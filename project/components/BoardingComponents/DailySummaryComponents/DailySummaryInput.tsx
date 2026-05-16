"use client";

import {
  DailySummaryData,
  FoodEntry,
  WorkoutEntry,
} from "@/types/dailySummary.type";
import { FormEventType } from "@/types/field.type";
import { Dispatch, SetStateAction } from "react";

export interface DailySummaryInputProps {
  data: DailySummaryData;

  foodInput: FoodEntry;
  setFoodInput: Dispatch<SetStateAction<FoodEntry>>;

  workoutInput: WorkoutEntry;
  setWorkoutInput: Dispatch<SetStateAction<WorkoutEntry>>;

  addFood: () => void;
  addWorkout: () => void;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEventType) => void;

  loading: boolean;
  message: string;
}

const DailySummaryInput = ({
  data,
  foodInput,
  setFoodInput,
  setWorkoutInput,
  addFood,
  workoutInput,
  addWorkout,
  handleChange,
  handleSubmit,
  loading,
  message,
}: DailySummaryInputProps) => {
  return (
    <div className="bg-black text-white p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6"
      >
        {/* HEADER */}
        <h2 className="text-lg font-bold">🏋️ Daily Summary</h2>

        {/* FOODS SECTION */}
        <div className="space-y-2">
          <label className="text-sm text-blue-400 font-medium">Foods</label>

          <div className="flex gap-2">
            <input
              placeholder="Food name"
              value={foodInput.name}
              onChange={(e) =>
                setFoodInput((prev) => ({ ...prev, name: e.target.value }))
              }
              className="p-2 bg-zinc-800 rounded w-full"
            />

            <input
              type="number"
              value={foodInput.servings}
              onChange={(e) =>
                setFoodInput((prev) => ({
                  ...prev,
                  servings: Number(e.target.value),
                }))
              }
              className="p-2 bg-zinc-800 rounded w-20"
            />

            <button
              type="button"
              onClick={addFood}
              className="px-3 bg-blue-600 rounded"
            >
              +
            </button>
          </div>

          {/* list */}
          {data.foods.map((f, i) => (
            <p key={i} className="text-xs text-zinc-400">
              {f.name} - {f.servings}
            </p>
          ))}
        </div>
        {/* WORKOUTS SECTION */}
        <div className="space-y-2 mt-4">
          <label className="text-sm text-blue-400 font-medium">Workouts</label>

          <div className="flex gap-2">
            <input
              placeholder="Type (running)"
              value={workoutInput.type}
              onChange={(e) =>
                setWorkoutInput((prev) => ({ ...prev, type: e.target.value }))
              }
              className="p-2 bg-zinc-800 rounded w-full"
            />

            <input
              type="number"
              value={workoutInput.durationMinutes}
              onChange={(e) =>
                setWorkoutInput((prev) => ({
                  ...prev,
                  durationMinutes: Number(e.target.value),
                }))
              }
              className="p-2 bg-zinc-800 rounded w-20"
            />

            <button
              type="button"
              onClick={addWorkout}
              className="px-3 bg-blue-600 rounded"
            >
              +
            </button>
          </div>

          {data.workouts.map((w, i) => (
            <p key={i} className="text-xs text-zinc-400">
              {w.type} - {w.durationMinutes} min
            </p>
          ))}
        </div>

        {/* STEPS */}
        <div className="space-y-1">
          <label className="text-sm text-blue-400 font-medium">Steps</label>
          <input
            name="steps"
            type="number"
            value={data.steps}
            onChange={handleChange}
            placeholder="Enter steps"
            className="w-full p-2 rounded bg-zinc-800"
          />
        </div>

        {/* SLEEP */}
        <div className="space-y-1 mt-3">
          <label className="text-sm text-blue-400 font-medium">
            Sleep Hours
          </label>
          <input
            name="sleepHours"
            type="number"
            value={data.sleepHours}
            onChange={handleChange}
            placeholder="Enter sleep hours"
            className="w-full p-2 rounded bg-zinc-800"
          />
        </div>

        {/* WEIGHT */}
        <div className="space-y-1 mt-3">
          <label className="text-sm text-blue-400 font-medium">
            Weight (kg)
          </label>
          <input
            name="weight"
            type="number"
            value={data.weight}
            onChange={handleChange}
            placeholder="Enter weight"
            className="w-full p-2 rounded bg-zinc-800"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl font-semibold"
        >
          {loading ? "Saving..." : "Save Summary"}
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="text-center text-sm text-zinc-400">{message}</p>
        )}
      </form>
    </div>
  );
};

export default DailySummaryInput;
