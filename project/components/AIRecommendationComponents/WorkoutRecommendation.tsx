"use client";

import { Dumbbell } from "lucide-react";
import WorkoutRecommendationCard from "./WorkoutRecommendationCard";

interface Workout {
  name: string;
  difficulty?: string;
  duration?: string;
  sets?: string;
}

interface Props {
  workouts: Workout[];
  goalType: string;
}

const WorkoutRecommendation = ({ workouts, goalType }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
      <div className="absolute top-[-20%] left-[-10%] w-[220px] h-[220px] bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.25em] font-bold">
              Training System
            </p>

            <h3 className="text-3xl font-black mt-2 flex items-center gap-3">
              <Dumbbell className="text-cyan-400" />
              Workout Plan
            </h3>
          </div>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-black uppercase tracking-wide">
            {goalType || "Fitness"}
          </span>
        </div>

        <div className="space-y-4">
          {workouts?.map((workout, index) => (
            <WorkoutRecommendationCard key={index} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutRecommendation;
