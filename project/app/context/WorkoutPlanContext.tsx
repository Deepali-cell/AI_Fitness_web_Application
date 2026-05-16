"use client";

import { useContext, useEffect, useState } from "react";
import WorkoutContext from "./WorkoutContext";

export const WorkoutPlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<string[]>([]);

  // LOAD
  useEffect(() => {
    const load = () => {
      const storedPlan = localStorage.getItem("workout-plan");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }
    };
    load();
  }, []);

  // ADD
  const addToPlan = (id: string) => {
    setPlan((prev) => {
      const updatedPlan = [...prev, id];

      localStorage.setItem("workout-plan", JSON.stringify(updatedPlan));

      return updatedPlan;
    });
  };

  // REMOVE
  const removeFromPlan = (id: string) => {
    setPlan((prev) => {
      const updatedPlan = prev.filter((wId) => wId !== id);

      localStorage.setItem("workout-plan", JSON.stringify(updatedPlan));

      return updatedPlan;
    });
  };

  // CLEAR
  const clearPlan = () => {
    setPlan([]);
    localStorage.removeItem("workout-plan");
  };
  const value = {
    plan,
    addToPlan,
    removeFromPlan,
    clearPlan,
  };
  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
};

export const useWorkout = () => useContext(WorkoutContext);
