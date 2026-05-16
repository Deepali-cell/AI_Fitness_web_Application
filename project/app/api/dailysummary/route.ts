import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { calcCaloriesIn, calcCaloriesOut } from "@/lib/caloriesHelperFn";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const userId = session?.user?.id;

    const {
      date,
      foods = [],
      workouts = [],
      activity = {},
      sleep = { hours: 0 },
      userWeightKg,
    } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 },
      );
    }

    const userDetails = await prisma.userBodyDetails.findUnique({
      where: { userId },
    });

    const weightKg = userWeightKg ?? userDetails?.weight ?? 70;

    const totalCaloriesIn = calcCaloriesIn(foods);
    const steps = activity.steps ?? 0;
    const totalCaloriesOut = calcCaloriesOut(workouts, steps, weightKg);
    const sleepHours = sleep.hours ?? 0;
    const summaryDate = date ? new Date(date) : new Date();

    // same day new time
    const startOfDay = new Date(summaryDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(summaryDate);
    endOfDay.setHours(23, 59, 59, 999);

    const existing = await prisma.dailySummary.findFirst({
      where: {
        userId,
        date: { gte: startOfDay, lte: endOfDay },
      },
    });

    let summary;

    if (existing) {
      summary = await prisma.dailySummary.update({
        where: { id: existing.id },
        data: {
          totalCaloriesIn,
          totalCaloriesOut,
          steps,
          sleepHours,
        },
      });
    } else {
      summary = await prisma.dailySummary.create({
        data: {
          userId,
          date: summaryDate,
          totalCaloriesIn,
          totalCaloriesOut,
          steps,
          sleepHours,
        },
      });
    }

    return NextResponse.json({
      success: true,
      summary,
      meta: {
        usedWeight: weightKg,
      },
      breakdown: {
        netCalories: totalCaloriesIn - totalCaloriesOut,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
