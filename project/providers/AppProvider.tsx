"use client";

import { FoodPlanProvider } from "@/app/context/FoodPlanContext";
import { WorkoutPlanProvider } from "@/app/context/WorkoutPlanContext";
import { AuthProvider } from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <WorkoutPlanProvider>
          <FoodPlanProvider>{children}</FoodPlanProvider>
        </WorkoutPlanProvider>
      </AuthProvider>
    </QueryProvider>
  );
}
