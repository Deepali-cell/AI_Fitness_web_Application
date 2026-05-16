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

    const { foodIds } = await req.json();

    if (!foodIds || foodIds.length === 0) {
      return NextResponse.json(
        { success: false, message: "No foods selected" },
        { status: 400 },
      );
    }

    // Get foods from FoodLibrary
    const foods = await prisma.foodLibrary.findMany({
      where: {
        id: {
          in: foodIds,
        },
      },
    });

    // Create weekly food plan
    const foodPlan = await prisma.foodPlan.create({
      data: {
        userId,
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    // Create food logs
    await prisma.foodLog.createMany({
      data: foods.map((food) => ({
        userId,
        foodPlanId: foodPlan.id,

        foodName: food.foodName,
        calories: food.calories,
        protein: food.protein,
        carbs: food.carbs,
        fats: food.fats,

        mealType: food.mealType,
        quantity: food.quantity,
      })),
    });

    return NextResponse.json({
      success: true,
      message: "Food plan created successfully",
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
