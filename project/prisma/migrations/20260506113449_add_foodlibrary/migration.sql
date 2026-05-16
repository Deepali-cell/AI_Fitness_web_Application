-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('breakfast', 'lunch', 'dinner', 'snack', 'anytime', 'night');

-- CreateEnum
CREATE TYPE "Goal" AS ENUM ('WeightLoss', 'WeightGain', 'MuscleGain', 'Maintenance', 'Healthy', 'Common');

-- CreateTable
CREATE TABLE "FoodLibrary" (
    "id" TEXT NOT NULL,
    "foodName" TEXT NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION,
    "carbs" DOUBLE PRECISION,
    "fats" DOUBLE PRECISION,
    "mealType" "MealType" NOT NULL,
    "quantity" TEXT,
    "goals" "Goal"[],
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FoodLibrary_pkey" PRIMARY KEY ("id")
);
