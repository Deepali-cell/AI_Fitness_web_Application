import { getUserDetails, updateUserDetails } from "@/services/boarding.service";
import {
  createDailySummary,
  getDailySummary,
} from "@/services/user.dailySummaryForm.service";
import {
  createFoodPlan,
  createWorkoutPlan,
  getWeeklyPlans,
  getWeeklyReport,
} from "@/services/weekly.service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUserDetails = (enabled: boolean) => {
  return useQuery({
    queryKey: ["user-details"],
    queryFn: getUserDetails,
    enabled,
  });
};

export const useUpdateUserDetails = () => {
  return useMutation({
    mutationFn: updateUserDetails,
  });
};

export const useDailySummary = () => {
  return useQuery({
    queryKey: ["daily-summary"],
    queryFn: getDailySummary,
  });
};

export const useCreateDailySummary = () => {
  return useMutation({
    mutationFn: createDailySummary,
  });
};
export const useWeeklyReport = () => {
  return useQuery({
    queryKey: ["weekly-report"],
    queryFn: getWeeklyReport,
  });
};

export const useCreateFoodPlan = () => {
  return useMutation({
    mutationFn: createFoodPlan,
  });
};

export const useCreateWorkoutPlan = () => {
  return useMutation({
    mutationFn: createWorkoutPlan,
  });
};
export const useWeeklyPlans = () => {
  return useQuery({
    queryKey: ["weekly-plans"],
    queryFn: getWeeklyPlans,
  });
};
