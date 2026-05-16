import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const userId = session.user.id;
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 6);

    const summaries = await prisma.dailySummary.findMany({
      where: {
        userId,
        date: {
          gte: sevenDaysAgo,
          lte: today,
        },
      },
      orderBy: { date: "asc" },
    });

    const formatted = summaries.map((s) => ({
      date: s.date.toISOString().split("T")[0],
      caloriesIn: s.totalCaloriesIn,
      caloriesOut: s.totalCaloriesOut,
      netCalories: s.totalCaloriesIn - s.totalCaloriesOut,
      steps: s.steps,
      sleep: s.sleepHours,
    }));

    return NextResponse.json({
      success: true,
      data: formatted,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
