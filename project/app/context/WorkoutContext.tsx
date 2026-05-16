import { createContext } from "react";

export interface WorkoutContextType {
  plan: string[];

  addToPlan: (id: string) => void;

  removeFromPlan: (id: string) => void;

  clearPlan: () => void;
}

const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],

  addToPlan: () => {},

  removeFromPlan: () => {},

  clearPlan: () => {},
});

export default WorkoutContext;
