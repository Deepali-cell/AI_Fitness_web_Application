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

    const workoutPlan = await prisma.workoutPlan.findMany({
      where: { userId },

      include: {
        workouts: {
          orderBy: {
            date: "asc",
          },
        },
      },

      orderBy: {
        startDate: "desc",
      },
    });

    const foodPlan = await prisma.foodPlan.findMany({
      where: { userId },

      include: {
        foods: {
          orderBy: {
            date: "asc",
          },
        },
      },

      orderBy: {
        startDate: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      workoutPlan,
      foodPlan,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
