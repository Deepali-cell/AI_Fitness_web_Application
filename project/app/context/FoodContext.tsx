import { createContext } from "react";

interface FoodPlanContextValue {
  plan: string[];
  addToPlan: (id: string) => void;
  removeFromPlan: (id: string) => void;
  clearPlan: () => void;
}
const FoodContext = createContext<FoodPlanContextValue>({
  plan: [],

  addToPlan: () => {},

  removeFromPlan: () => {},

  clearPlan: () => {},
});

export default FoodContext;
