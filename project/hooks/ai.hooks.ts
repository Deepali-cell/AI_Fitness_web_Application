import { getAiRecommendation } from "@/services/ai.service";
import { useMutation } from "@tanstack/react-query";

export const useAiRecommendation = () => {
  return useMutation({
    mutationFn: getAiRecommendation,
  });
};
