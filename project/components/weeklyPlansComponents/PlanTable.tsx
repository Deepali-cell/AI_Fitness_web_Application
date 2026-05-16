"use client";

import { useMemo } from "react";
import FoodPlanTable from "./FoodPlanTable";
import WorkoutPlanTable from "./WorkoutPlanTable";
import { FoodLogType, FoodPlan, Workout, WorkoutPlan } from "@/lib/interfaces";
import TableHeader from "./TableHeader";
import { findTotalCalories, formattedDate } from "@/lib/caloriesHelperFn";
import EmptyUi from "./EmptyUi";
import MainHeader from "./MainHeader";
import { useWeeklyPlans } from "@/hooks/boarding.hook";

interface GroupedDataItem {
  workouts: Workout[];
  foods: FoodLogType[];
}
type GroupedData = [string, GroupedDataItem][];

const PlanTable = () => {
  const { data, isLoading } = useWeeklyPlans();

  const foodPlans = useMemo<FoodPlan[]>(() => data?.foodPlan || [], [data]);

  const workoutPlans = useMemo<WorkoutPlan[]>(
    () => data?.workoutPlan || [],
    [data],
  );

  const groupedData: GroupedData = useMemo(() => {
    const map: Record<string, GroupedDataItem> = {};

    workoutPlans.forEach((plan) => {
      plan.workouts.forEach((workout) => {
        const date = new Date(workout.date).toDateString();

        if (!map[date]) {
          map[date] = {
            workouts: [],
            foods: [],
          };
        }

        map[date].workouts.push(workout);
      });
    });

    foodPlans.forEach((plan) => {
      plan.foods.forEach((food) => {
        const date = new Date(food.date).toDateString();

        if (!map[date]) {
          map[date] = {
            workouts: [],
            foods: [],
          };
        }

        map[date].foods.push(food);
      });
    });

    return Object.entries(map).sort(
      ([a], [b]) => new Date(a).getTime() - new Date(b).getTime(),
    );
  }, [foodPlans, workoutPlans]);

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mx-auto mb-5" />

          <h2 className="text-white text-xl font-semibold">
            Loading Your Plans...
          </h2>

          <p className="text-gray-500 mt-2">Preparing your fitness dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Header */}
      <MainHeader />
      {groupedData.length === 0 && <EmptyUi />}
      <div className="space-y-8">
        {groupedData.map(([date, data]) => {
          const formateDate = formattedDate(date);
          const totalCalories = findTotalCalories(data.foods);

          return (
            <div
              key={date}
              className="bg-[#0d0d15] border border-[#1b1b28] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <TableHeader
                workoutLength={data.workouts.length}
                formattedDate={formateDate}
                totalCalories={totalCalories}
              />
              <div className="grid lg:grid-cols-2 gap-6 p-6">
                <WorkoutPlanTable workouts={data.workouts} />
                <FoodPlanTable foods={data.foods} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanTable;
