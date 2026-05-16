import { FoodLogType } from "@/lib/interfaces";
import { UtensilsCrossed } from "lucide-react";

const FoodPlanTable = ({ foods }: { foods: FoodLogType[] }) => {
  return (
    <div className="bg-[#11111a] rounded-3xl border border-[#1e1e2f] p-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-500/10 p-3 rounded-2xl">
          <UtensilsCrossed className="text-green-500" />
        </div>

        <div>
          <h3 className="text-white font-bold text-xl">Food Plan</h3>

          <p className="text-gray-500 text-sm">Nutrition & meals</p>
        </div>
      </div>

      <div className="space-y-4">
        {foods.length > 0 ? (
          foods.map((food: FoodLogType) => (
            <div
              key={food.id}
              className="bg-[#171724] border border-[#26263b] rounded-2xl p-4 hover:border-green-500/40 transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {food.foodName}
                  </h4>

                  <p className="text-gray-500 text-sm capitalize mt-1">
                    {food.mealType}
                  </p>
                </div>

                <div className="bg-green-500/10 px-3 py-1 rounded-full text-green-400 text-xs capitalize">
                  {food.quantity || "Meal"}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                <div className="bg-[#0f0f17] p-3 rounded-xl border border-[#222235]">
                  <p className="text-xs text-gray-500">Calories</p>

                  <h4 className="text-orange-400 font-bold mt-1">
                    {food.calories}
                  </h4>
                </div>

                <div className="bg-[#0f0f17] p-3 rounded-xl border border-[#222235]">
                  <p className="text-xs text-gray-500">Protein</p>

                  <h4 className="text-blue-400 font-bold mt-1">
                    {food.protein || 0}g
                  </h4>
                </div>

                <div className="bg-[#0f0f17] p-3 rounded-xl border border-[#222235]">
                  <p className="text-xs text-gray-500">Carbs</p>

                  <h4 className="text-yellow-400 font-bold mt-1">
                    {food.carbs || 0}g
                  </h4>
                </div>

                <div className="bg-[#0f0f17] p-3 rounded-xl border border-[#222235]">
                  <p className="text-xs text-gray-500">Fats</p>

                  <h4 className="text-pink-400 font-bold mt-1">
                    {food.fats || 0}g
                  </h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No meals planned
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodPlanTable;
