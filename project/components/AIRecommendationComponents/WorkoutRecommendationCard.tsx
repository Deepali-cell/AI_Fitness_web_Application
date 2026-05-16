"use client";

import { Clock, Layers } from "lucide-react";

interface Workout {
  name: string;
  difficulty?: string;
  duration?: string;
  sets?: string;
}

interface Props {
  workout: Workout;
}

const WorkoutRecommendationCard = ({ workout }: Props) => {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/20 p-5 hover:border-cyan-400/20 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-bold capitalize">{workout.name}</h4>

          <p className="text-zinc-500 text-sm mt-1">
            {workout.difficulty || "All Levels"}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-cyan-400/10 px-3 py-1 rounded-xl text-cyan-300 text-sm font-semibold">
          <Clock size={14} />
          {workout.duration}
        </div>
      </div>

      {workout.sets && (
        <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm font-semibold">
          <Layers size={15} />
          {workout.sets}
        </div>
      )}
    </div>
  );
};

export default WorkoutRecommendationCard;
