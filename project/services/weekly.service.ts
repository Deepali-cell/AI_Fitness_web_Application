import axios from "axios";

export const getWeeklyReport = async () => {
  const { data } = await axios.get("/api/getWeeklyReport");
  return data;
};

export const createFoodPlan = async (foodIds: string[]) => {
  const { data } = await axios.post("/api/makeFoodPlan", {
    foodIds,
  });

  return data;
};

export const createWorkoutPlan = async (workoutIds: string[]) => {
  const { data } = await axios.post("/api/makeWorkoutPlan", {
    workoutIds,
  });

  return data;
};

export const getWeeklyPlans = async () => {
  const { data } = await axios.get("/api/getWeeklyPlans");

  return data;
};
