import { foods } from "@/lib/foodData";
import { Goal } from "@/lib/interfaces";
import { prisma } from "@/lib/prisma";
import { MealType } from "@prisma/client";

async function main() {
  console.log("Seeding food library...");

  for (const food of foods) {
    await prisma.foodLibrary.upsert({
      where: { foodName: food.foodName },
      update: {
        calories: food.calories ?? 0,
        protein: food.protein,
        carbs: food.carbs,
        fats: food.fats,
        mealType: food.mealType as MealType,
        quantity: food.quantity,
        // Dhyan dein: Yahan 'goals' hona chahiye, 'goal' nahi
        goals: food.goals
          ? food.goals.map((g) => {
              const goalMap: Record<string, Goal> = {
                "Weight Loss": "WeightLoss",
                "Weight Gain": "WeightGain",
                "Muscle Gain": "MuscleGain",
                Maintenance: "Maintenance",
                Healthy: "Healthy",
                Common: "Common",
              };
              return goalMap[g];
            })
          : [],
        description: food.description,
      },
      create: {
        foodName: food.foodName,
        calories: food.calories ?? 0,
        protein: food.protein,
        carbs: food.carbs,
        fats: food.fats,
        mealType: food.mealType as MealType,
        quantity: food.quantity,
        goals: food.goals
          ? food.goals.map((g) => {
              const goalMap: Record<string, Goal> = {
                "Weight Loss": "WeightLoss",
                "Weight Gain": "WeightGain",
                "Muscle Gain": "MuscleGain",
                Maintenance: "Maintenance",
                Healthy: "Healthy",
                Common: "Common",
              };
              return goalMap[g];
            })
          : [],
        description: food.description ?? "",
      },
    });
  }

  console.log("Seeding complete! Food library is ready.");
}

main()
  .catch((e) => {
    console.error("Error seeding food:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
