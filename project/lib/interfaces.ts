export interface MetaType {
  usedWeight: number;
}

export type Exercise = {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  goal: string;

  description?: string | null;

  recommendedSets?: number | null;
  recommendedReps?: number | null;
  recommendedDuration?: number | null;

  caloriesPerMin: number;
  createdAt?: Date;
};
export type Goal =
  | "WeightLoss"
  | "WeightGain"
  | "MuscleGain"
  | "Maintenance"
  | "Healthy"
  | "Common";

export type MealType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "anytime"
  | "night";

export type FoodLogType = {
  id: string;
  foodName: string;

  calories: number | null;
  protein?: number | null;
  carbs?: number | null;
  fats?: number | null;

  mealType: MealType;

  quantity?: string | null;

  goals?: Goal[];

  description?: string;
  date: string;

  createdAt?: Date;
  updatedAt?: Date;
};
export type FoodLibraryType = {
  id: string;
  foodName: string;

  calories: number | null;
  protein?: number | null;
  carbs?: number | null;
  fats?: number | null;

  mealType: MealType;

  quantity?: string | null;

  goals?: Goal[];

  description?: string;

  createdAt?: Date;
  updatedAt?: Date;
};

export interface Workout {
  id: string;
  name: string;
  type?: string;
  duration: number;
  reps?: number;
  sets?: number;
  calories?: number;
  date: string;
}

export interface WorkoutPlan {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;

  workouts: Workout[];
}

export interface FoodPlan {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  foods: FoodLogType[];
}

export interface UserBodyDetails {
  age: number;
  gender: string;
  sleepHours: number;
  chronicDiseases: string[];
  onTreatment: boolean;
  activity: string;
  hydration: number;
  height: number;
  weight: number;
}

export interface CalculatedAverages {
  avgCaloriesIn: number;
  avgCaloriesOut: number;
  avgSteps: number;
}

export interface MlRiskData {
  status: string;
  risk_cluster: number;
  risk_label: string;
}
