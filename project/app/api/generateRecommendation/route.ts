import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import {
  calculateAverages,
  calculateHealthScore,
  filterFoods,
  filterWorkouts,
  generateInsights,
  prepareFlaskData,
} from "@/lib/caloriesHelperFn";
import { Goal } from "@/lib/interfaces";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id)
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        userBodyDetails: true,
        dailySummaries: { take: 7, orderBy: { date: "desc" } },
      },
    });

    if (!user?.userBodyDetails)
      return NextResponse.json(
        { success: false, message: "No Details" },
        { status: 404 },
      );

    const details = user.userBodyDetails;
    const averages = calculateAverages(user.dailySummaries);
    const bmi = details.weight / Math.pow(details.height / 100, 2);

    // Flask Call using Helper
    let mlRiskData = null;
    try {
      const flaskRes = await fetch(`${process.env.ML_MODEL_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prepareFlaskData(details, averages, bmi)),
      });

      if (flaskRes.ok) mlRiskData = await flaskRes.json();
    } catch (e) {
      console.log("Flask Offline");
    }

    // Logic using Helpers
    const healthScore = calculateHealthScore(
      bmi,
      averages.avgSteps,
      details.sleepHours,
      mlRiskData,
    );
    const insights = generateInsights(details, averages, bmi);

    const workouts = await prisma.exerciseLibrary.findMany({
      where: { goal: details.goal },
    });
    const foods = await prisma.foodLibrary.findMany({
      where: { goals: { has: details.goal as Goal } },
    });
    const workoutResults = filterWorkouts(
      workouts,
      details.chronicDiseases,
      details.age,
      details.onTreatment,
    );

    const foodResults = filterFoods(foods, details.diet, details.allergies);

    return NextResponse.json({
      success: true,
      health_score: healthScore,
      ai_response: {
        header:
          healthScore > 80
            ? "Excellent Health"
            : healthScore > 50
              ? "Health on Track"
              : "Critical Action Required",
        risk: mlRiskData,
        insights: insights,
      },
      analytics: [
        {
          label: "BMI",
          value: bmi.toFixed(2),
          status: bmi > 25 ? "High" : "Normal",
        },
        {
          label: "Steps",
          value: Math.round(averages.avgSteps),
          status: averages.avgSteps > 7000 ? "Good" : "Low",
        },
        {
          label: "Sleep",
          value: `${details.sleepHours}h`,
          status: details.sleepHours >= 7 ? "Optimal" : "Low",
        },
      ],
      recommendations: {
        plan_meta: { goal_type: details.goal }, // Yeh missing tha
        workouts: workoutResults.slice(0, 6), // Ab ye empty nahi hoga
        foods: foodResults.slice(0, 6), // Ab ye empty nahi hoga
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error" },
      { status: 500 },
    );
  }
}
