import { UserBodyDetails } from "@prisma/client";
import {
  CalculatedAverages,
  Exercise,
  FoodLibraryType,
  FoodLogType,
  MlRiskData,
} from "./interfaces";
import {
  DailySummaryType,
  FoodEntry,
  WorkoutEntry,
} from "@/types/dailySummary.type";

const WORKOUT_METS: Record<string, number> = {
  running: 9.8,
  cycling: 7.5,
  swimming: 8.0,
  walking: 3.5,
  weightlifting: 5.0,
  yoga: 2.5,
  hiit: 10.0,
  basketball: 8.0,
  soccer: 10.0,
  other: 5.0,
};
const FOOD_CALORIES: Record<string, number> = {
  rice: 206,
  chicken: 165,
  salad: 20,
  bread: 79,
  egg: 78,
  milk: 149,
  banana: 105,
  apple: 95,
  pasta: 220,
  burger: 540,
  pizza: 285,
  oatmeal: 154,
  yogurt: 100,
  protein_shake: 150,
  sandwich: 350,
  soup: 100,
  other: 200,
};
export function calcCaloriesIn(foods: FoodEntry[]): number {
  return foods.reduce((sum, food) => {
    const base =
      FOOD_CALORIES[food.name.toLowerCase()] ?? FOOD_CALORIES["other"];

    return sum + base * (food.servings ?? 1);
  }, 0);
}
export function calcCaloriesOut(
  workouts: WorkoutEntry[],
  steps: number,
  weightKg: number,
): number {
  const workoutCalories = workouts.reduce((sum, w) => {
    const met = WORKOUT_METS[w.type.toLowerCase()] ?? WORKOUT_METS["other"];

    const hours = w.durationMinutes / 60;

    return sum + met * weightKg * hours;
  }, 0);

  const stepCalories = steps * 0.04;

  return Math.round(workoutCalories + stepCalories);
}
export function formattedDate(date: string) {
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  return formatDate;
}
export function findTotalCalories(foods: FoodLogType[]) {
  return foods.reduce(
    (acc: number, item: FoodLogType) => acc + (item.calories ?? 0),
    0,
  );
}
export const calculateAverages = (summaries: DailySummaryType[]) => {
  if (summaries.length === 0)
    return { avgCaloriesIn: 0, avgCaloriesOut: 0, avgSteps: 0 };
  const count = summaries.length;
  return {
    avgCaloriesIn:
      summaries.reduce((acc, item) => acc + item.totalCaloriesIn, 0) / count,
    avgCaloriesOut:
      summaries.reduce((acc, item) => acc + item.totalCaloriesOut, 0) / count,
    avgSteps: summaries.reduce((acc, item) => acc + item.steps, 0) / count,
  };
};
export const filterWorkouts = (
  workouts: Exercise[],
  chronicDiseases: string[],
  age: number,
  onTreatment: boolean,
) => {
  const filtered = workouts.filter((w) => {
    const isBackPainSafe = chronicDiseases.includes("Back Pain")
      ? !["deadlift", "squat", "heavy"].some((bad) =>
          w.name.toLowerCase().includes(bad),
        )
      : true;
    const isAgeSafe =
      onTreatment || age > 50 ? w.difficulty !== "Advanced" : true;
    return isBackPainSafe && isAgeSafe;
  });

  // FALLBACK: Agar kuch nahi mila, toh safe exercises return karo (like Walking/Yoga)
  if (filtered.length === 0) {
    return [
      {
        name: "Brisk Walking",
        duration: "30 mins",
        sets: "1",
        difficulty: "Beginner",
      },
      {
        name: "Light Stretching",
        duration: "15 mins",
        sets: "1",
        difficulty: "Beginner",
      },
    ];
  }

  return filtered.map((w) => ({
    name: w.name,
    duration: w.recommendedDuration || "20-30 mins",
    sets: w.recommendedSets || "3 sets of 12 reps", // Optional sets logic
  }));
};
export const filterFoods = (
  foods: FoodLibraryType[],
  diet: string,
  allergies: string[],
) => {
  const filtered = foods.filter((f) => {
    const name = f.foodName.toLowerCase();
    const isVegSafe =
      diet === "Veg"
        ? !["chicken", "fish", "egg", "meat", "beef", "pork"].some((nv) =>
            name.includes(nv),
          )
        : true;
    const isAllergySafe = !allergies.some((a) =>
      name.includes(a.toLowerCase()),
    );
    return isVegSafe && isAllergySafe;
  });

  // FALLBACK: Agar sab filter ho gaya, toh safe generic foods do
  if (filtered.length === 0) {
    return [
      { foodName: "Mixed Fruit Salad", quantity: "1 bowl" },
      { foodName: "Oatmeal with Water/Milk", quantity: "1 cup" },
      { foodName: "Steamed Vegetables", quantity: "1 plate" },
    ];
  }

  return filtered.map((f) => ({
    foodName: f.foodName,
    quantity: f.quantity || "1 Portion",
  }));
};
// Flask ko bhejne ke liye data prepare karein
export const prepareFlaskData = (
  details: UserBodyDetails,
  averages: CalculatedAverages,
  bmi: number,
) => {
  return {
    age: details.age,
    gender: details.gender === "Male" ? 1 : 0,
    bmi: parseFloat(bmi.toFixed(2)),
    avg_steps: averages.avgSteps,
    avg_sleep: details.sleepHours,
    net_calories: averages.avgCaloriesIn - averages.avgCaloriesOut,
    chronic_diseases: details.chronicDiseases.length > 0 ? 1 : 0,
    on_treatment: details.onTreatment ? 1 : 0,
    activity_level:
      details.activity === "Active"
        ? 2
        : details.activity === "Moderate"
          ? 1
          : 0,
  };
};
export const generateInsights = (
  details: UserBodyDetails,
  averages: CalculatedAverages,
  bmi: number,
) => {
  const insights: string[] = [];
  if (averages.avgCaloriesIn > averages.avgCaloriesOut)
    insights.push("Calorie surplus detected; focus on burning more.");
  if (details.hydration < 2)
    insights.push("Hydration is below optimal levels.");
  if (details.sleepHours < 6) insights.push("Sleep recovery is insufficient.");
  if (bmi >= 25) insights.push("Weight management recommended for BMI health.");
  return insights;
};
export const calculateHealthScore = (
  bmi: number,
  avgSteps: number,
  sleep: number,
  mlRisk: MlRiskData,
): number => {
  let score = 100;

  // 1. BMI Penalty (Ideal: 18.5 - 24.9)
  if (bmi >= 30)
    score -= 20; // Obese
  else if (bmi >= 25)
    score -= 10; // Overweight
  else if (bmi < 18.5) score -= 10; // Underweight

  // 2. Steps Bonus/Penalty (Target: 10,000)
  if (avgSteps < 4000) score -= 15;
  else if (avgSteps < 7000) score -= 5;
  else if (avgSteps >= 10000) score += 5; // Extra credit

  // 3. Sleep Penalty (Target: 7-9 hours)
  if (sleep < 6) score -= 15;
  else if (sleep < 7) score -= 5;

  // 4. ML Risk Impact
  if (mlRisk?.risk_label === "High Risk") score -= 25;
  else if (mlRisk?.risk_label === "Moderate Risk") score -= 10;

  // Ensure score stays between 0 and 100
  return Math.max(0, Math.min(100, score));
};
