"use client";

import { useFood } from "@/app/context/FoodPlanContext";
import EmptyFoodPlan from "@/components/BoardingComponents/Workout_and_foodComponents/EmptyFoodPlan";
import FoodCard from "@/components/BoardingComponents/Workout_and_foodComponents/FoodCard";
import FoodPlanNote from "@/components/BoardingComponents/Workout_and_foodComponents/FoodPlanNote";
import PlanHeader from "@/components/BoardingComponents/Workout_and_foodComponents/PlanHeader";
import { useCreateFoodPlan } from "@/hooks/boarding.hook";
import { foods } from "@/lib/foodData";
import { useRouter } from "next/navigation";

const FinalizeFoodPlans = () => {
  const { plan, removeFromPlan, clearPlan } = useFood();
  const router = useRouter();
  const selectedFoods = foods.filter((food) => plan.includes(food.id));
  const hasPlan = selectedFoods.length > 0;
  const { mutate } = useCreateFoodPlan();

  const handleFinalize = () => {
    mutate(plan, {
      onSuccess: (data) => {
        if (data.success) {
          alert("Food plan created!");

          clearPlan();

          router.push("/weeklyPlans");
        }
      },

      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-10 text-slate-900">
      {/* HEADER SECTION */}
      <PlanHeader
        hasPlan={hasPlan}
        label="Food Plan"
        onAction={clearPlan}
        subHeading="Fuel your body with the right nutrition and workout."
      />

      <div className="max-w-7xl mx-auto">
        {hasPlan ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {selectedFoods.map((f) => (
                  <div
                    key={f.id}
                    className="hover:scale-[1.02] transition-transform duration-300"
                  >
                    <FoodCard
                      food={f}
                      label="Remove"
                      onAction={removeFromPlan}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE SUMMARY */}
            <FoodPlanNote
              length={plan.length}
              handleFinalize={handleFinalize}
            />
          </div>
        ) : (
          <EmptyFoodPlan />
        )}
      </div>
    </div>
  );
};

export default FinalizeFoodPlans;
