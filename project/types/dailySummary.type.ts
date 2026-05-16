export interface FoodEntry {
  name: string;
  servings: number;
}

export interface WorkoutEntry {
  type: string;
  durationMinutes: number;
}

export interface DailySummaryData {
  foods: FoodEntry[];
  workouts: WorkoutEntry[];
  steps: number;
  sleepHours: number;
  weight: number;
}
export interface DailySummaryPayload {
  date: Date;

  foods: FoodEntry[];

  workouts: WorkoutEntry[];

  activity: {
    steps: number;
  };

  sleep: {
    hours: number;
  };

  userWeightKg: number;
}

export interface DailySummaryType {
  id?: string;
  userId?: string;
  date?: string | Date;
  totalCaloriesIn: number;
  totalCaloriesOut: number;
  steps: number;
  sleepHours: number;
}

export interface BreakdownType {
  netCalories: number;
}
