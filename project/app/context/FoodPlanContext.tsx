"use client";

import { useContext, useEffect, useState } from "react";
import FoodContext from "./FoodContext";

export const FoodPlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<string[]>([]);

  // LOAD
  useEffect(() => {
    const load = () => {
      const storedPlan = localStorage.getItem("food-plan");

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

      localStorage.setItem("food-plan", JSON.stringify(updatedPlan));

      return updatedPlan;
    });
  };

  // REMOVE
  const removeFromPlan = (id: string) => {
    setPlan((prev) => {
      const updatedPlan = prev.filter((fId) => fId !== id);

      localStorage.setItem("food-plan", JSON.stringify(updatedPlan));

      return updatedPlan;
    });
  };

  // CLEAR
  const clearPlan = () => {
    setPlan([]);
    localStorage.removeItem("food-plan");
  };

  const value = {
    plan,
    addToPlan,
    removeFromPlan,
    clearPlan,
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export const useFood = () => useContext(FoodContext);
