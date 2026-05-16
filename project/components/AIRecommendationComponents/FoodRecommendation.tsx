"use client";

import { Utensils } from "lucide-react";
import FoodRecommendationCard from "./FoodRecommendationCard";

interface Food {
  foodName: string;
  quantity?: string;
}

interface Props {
  foods: Food[];
  dietType: string;
}

const FoodRecommendation = ({ foods, dietType }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
      <div className="absolute bottom-[-20%] right-[-10%] w-[220px] h-[220px] bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.25em] font-bold">
              Nutrition Intelligence
            </p>

            <h3 className="text-3xl font-black mt-2 flex items-center gap-3">
              <Utensils className="text-emerald-400" />
              Nutrition Guide
            </h3>
          </div>

          <span className="px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-black uppercase tracking-wide">
            {dietType || "Balanced"}
          </span>
        </div>

        <div className="space-y-4">
          {foods?.map((food, index) => (
            <FoodRecommendationCard key={index} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRecommendation;
