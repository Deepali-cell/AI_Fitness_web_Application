"use client";
import { useState } from "react";
import { exercises } from "@/lib/exerciseData";
import WorkoutCard from "@/components/BoardingComponents/Workout_and_foodComponents/WorkoutCard";
import Filter_and_searchBar from "./Filter_and_searchBar";
import { useWorkout } from "@/app/context/WorkoutPlanContext";

const ExerciseLibrary = () => {
  const { addToPlan } = useWorkout();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Yoga", "Strength", "Cardio", "Meditation"];

  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || ex.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold  mb-4">
          Exercise <span className="text-blue-600">Library</span>
        </h1>
        <p className="text-cyan-200 font-bold max-w-2xl mx-auto">
          Explore over 60+ curated exercises to build your perfect weekly plan.
          Filter by category or search by name.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <Filter_and_searchBar
        types={categories}
        active={activeCategory}
        setActive={setActiveCategory}
        search={search}
        setSearch={setSearch}
      />

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto">
        {filteredExercises.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExercises.map((ex, index) => (
              <WorkoutCard
                key={index}
                ex={ex}
                label="Add From Plan"
                onAction={addToPlan}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No exercises found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseLibrary;
