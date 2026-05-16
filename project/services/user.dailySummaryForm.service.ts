import {
  DailySummaryData,
  DailySummaryPayload,
  FoodEntry,
  WorkoutEntry,
} from "@/types/dailySummary.type";
import axios from "axios";
import { useState } from "react";

export const useDailySummaryForm = () => {
  const [data, setData] = useState<DailySummaryData>({
    foods: [],
    workouts: [],
    steps: 0,
    sleepHours: 0,
    weight: 70,
  });

  const [foodInput, setFoodInput] = useState<FoodEntry>({
    name: "",
    servings: 1,
  });

  const [workoutInput, setWorkoutInput] = useState<WorkoutEntry>({
    type: "",
    durationMinutes: 30,
  });

  // COMMON INPUT
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  // ADD FOOD
  const addFood = () => {
    if (!foodInput.name.trim()) return;

    setData((prev) => ({
      ...prev,
      foods: [...prev.foods, foodInput],
    }));

    setFoodInput({
      name: "",
      servings: 1,
    });
  };

  // ADD WORKOUT
  const addWorkout = () => {
    if (!workoutInput.type.trim()) return;

    setData((prev) => ({
      ...prev,
      workouts: [...prev.workouts, workoutInput],
    }));

    setWorkoutInput({
      type: "",
      durationMinutes: 30,
    });
  };

  const resetForm = () => {
    setData({
      foods: [],
      workouts: [],
      steps: 0,
      sleepHours: 0,
      weight: 70,
    });
  };

  return {
    data,
    setData,

    foodInput,
    setFoodInput,

    workoutInput,
    setWorkoutInput,

    handleChange,
    addFood,
    addWorkout,
    resetForm,
  };
};
export const createDailySummaryPayload = (
  data: DailySummaryData,
): DailySummaryPayload => ({
  date: new Date(),

  foods: data.foods,

  workouts: data.workouts,

  activity: {
    steps: data.steps,
  },

  sleep: {
    hours: data.sleepHours,
  },

  userWeightKg: data.weight,
});

export const createDailySummary = async (payload: DailySummaryPayload) => {
  const { data } = await axios.post("/api/dailysummary", payload);

  return data;
};

export const getDailySummary = async () => {
  const { data } = await axios.get("/api/getDailySummary");

  return data;
};
