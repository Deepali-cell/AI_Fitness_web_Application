"use client";

import BackgroundEffects from "./BackgroundEffects";
import EmptyState from "./EmptyState";
import AiHeader from "./AiHeader";
import AlertBanner from "./AlertBanner";
import HealthScoreCard from "./HealthScoreCard";
import WorkoutRecommendation from "./WorkoutRecommendation";
import AnalyticsGrid from "./AnalyticsGrid";
import FoodRecommendation from "./FoodRecommendation";
import { useAiRecommendation } from "@/hooks/ai.hooks";

const AiRecommendation = () => {
  const { mutate, data, isPending } = useAiRecommendation();

  const generateRecommendation = () => {
    mutate();
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white px-6 md:px-10 py-10">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto">
        <AiHeader loading={isPending} onGenerate={generateRecommendation} />

        {!data && !isPending && <EmptyState />}

        {data && (
          <div className="space-y-8">
            <AlertBanner
              header={data.ai_response?.header}
              riskLabel={data.ai_response?.risk?.risk_label}
            />

            <div className="grid lg:grid-cols-4 gap-6">
              <HealthScoreCard score={data.health_score} />

              <AnalyticsGrid analytics={data.analytics} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <WorkoutRecommendation
                workouts={data.recommendations?.workouts}
                goalType={data.recommendations?.plan_meta?.goal_type}
              />

              <FoodRecommendation
                foods={data.recommendations?.foods}
                dietType={data.recommendations?.plan_meta?.diet_type}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiRecommendation;
