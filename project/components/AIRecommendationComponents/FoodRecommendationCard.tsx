"use client";

import { Scale, Utensils } from "lucide-react";

interface Food {
  foodName: string;
  quantity?: string;
}

interface Props {
  food: Food;
}

const FoodRecommendationCard = ({ food }: Props) => {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/20 p-5 hover:border-emerald-400/20 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
            <Utensils size={18} />
          </div>

          <div>
            <h4 className="text-lg font-bold capitalize">{food.foodName}</h4>

            <p className="text-zinc-500 text-sm">Serving Suggestion</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-emerald-400/10 px-3 py-2 rounded-xl text-emerald-300 text-sm font-bold">
          <Scale size={14} />
          {food.quantity}
        </div>
      </div>
    </div>
  );
};

export default FoodRecommendationCard;
