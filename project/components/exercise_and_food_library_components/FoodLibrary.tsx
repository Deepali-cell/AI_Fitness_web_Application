"use client";
import { useState } from "react";
import { foods } from "@/lib/foodData";
import { Utensils } from "lucide-react";
import FoodCard from "@/components/BoardingComponents/Workout_and_foodComponents/FoodCard";
import { useFood } from "@/app/context/FoodPlanContext";
import Filter_and_searchBar from "./Filter_and_searchBar";

const FoodLibrary = () => {
  const { addToPlan } = useFood();
  const [search, setSearch] = useState("");
  const [activeMeal, setActiveMeal] = useState("all");
  const mealTypes = ["all", "breakfast", "lunch", "dinner", "snack", "anytime"];

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.foodName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesMeal = activeMeal === "all" || food.mealType === activeMeal;
    return matchesSearch && matchesMeal;
  });

  return (
    <div className="min-h-screen  p-6 md:p-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Food <span className="text-green-600">Library</span>
        </h1>
        <p className="text-cyan-200 font-bold max-w-2xl mx-auto">
          Discover healthy recipes and nutritional facts. Track your macros and
          build your perfect diet plan effortlessly.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <Filter_and_searchBar
        types={mealTypes}
        active={activeMeal}
        setActive={setActiveMeal}
        search={search}
        setSearch={setSearch}
      />

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto">
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((food, index) => (
              <FoodCard
                key={index}
                food={food}
                onAction={addToPlan}
                label="Add to Plan"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <Utensils className="h-12 w-12 text-gray-300 mb-3" />
            <p className="text-gray-400 text-lg font-medium">
              No food found in our kitchen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodLibrary;
