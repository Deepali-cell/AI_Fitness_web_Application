import React from "react";
import { Plus } from "lucide-react";
import { FaFireAlt } from "react-icons/fa";
import { FoodLibraryType } from "@/lib/interfaces";

type CardProps = {
  food: FoodLibraryType;
  onAction: (id: string) => void;
  label: string;
};

const FoodCard = ({ food, onAction, label }: CardProps) => {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
              {food.mealType}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {food.quantity || "1 Serving"}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
            {food.foodName}
          </h3>

          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed italic">
            {food.description || "No description available for this item."}
          </p>

          {/* Macros Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-orange-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-orange-600 font-bold uppercase">
                Prot
              </p>
              <p className="font-bold text-gray-800">{food.protein}g</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-blue-600 font-bold uppercase">
                Carb
              </p>
              <p className="font-bold text-gray-800">{food.carbs}g</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-yellow-600 font-bold uppercase">
                Fat
              </p>
              <p className="font-bold text-gray-800">{food.fats}g</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600 border-t border-dashed pt-4">
            <div className="flex items-center gap-1">
              <FaFireAlt className="h-4 w-4 text-orange-500" />
              <span className="font-bold text-gray-800">
                {food.calories} kcal
              </span>
            </div>
            <div className="flex gap-1">
              {/* Goals Badges */}
              {food.goals?.slice(0, 2).map((g, i) => (
                <span
                  key={i}
                  className="text-[9px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => onAction(food.id)}
            className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Plus className="h-4 w-4" />
            {label}
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
