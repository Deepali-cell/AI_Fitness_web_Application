import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const userId = session.user.id;

    const { workoutIds } = await req.json();

    if (!workoutIds || workoutIds.length === 0) {
      return NextResponse.json(
        { success: false, message: "No workouts selected" },
        { status: 400 },
      );
    }

    // Fetch exercises from ExerciseLibrary
    const exercises = await prisma.exerciseLibrary.findMany({
      where: {
        id: {
          in: workoutIds,
        },
      },
    });

    // Create weekly workout plan
    const workoutPlan = await prisma.workoutPlan.create({
      data: {
        userId,
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    // Create workout logs
    await prisma.workout.createMany({
      data: exercises.map((exercise) => ({
        userId,
        planId: workoutPlan.id,

        name: exercise.name,
        type: exercise.category,

        duration: exercise.recommendedDuration || 30,

        reps: exercise.recommendedReps || null,

        sets: exercise.recommendedSets || null,

        calories:
          (exercise.recommendedDuration || 30) * exercise.caloriesPerMin,
      })),
    });

    return NextResponse.json({
      success: true,
      message: "Workout plan created successfully",
      workoutPlan,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
