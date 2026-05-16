"use client";
import { Clock, BarChart3, Dumbbell } from "lucide-react";
import { FaFireAlt } from "react-icons/fa";
import { Exercise } from "@/lib/interfaces";

type CardProps = {
  ex: Exercise;
  onAction: (id: string) => void;
  label: string;
};
const WorkoutCard = ({ ex, onAction, label }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase">
            {ex.category}
          </span>
          <span
            className={`text-xs font-bold ${
              ex.difficulty === "Beginner"
                ? "text-green-500"
                : ex.difficulty === "Intermediate"
                  ? "text-orange-500"
                  : "text-red-500"
            }`}
          >
            {ex.difficulty}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {ex.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 italic">
          {ex?.description}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
          <div className="flex items-center gap-1">
            <FaFireAlt className="h-4 w-4 text-orange-500" />
            <span>{ex.caloriesPerMin} cal/m</span>
          </div>
          {ex.recommendedDuration ? (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>{ex.recommendedDuration}m</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4 text-purple-500" />
              <span>
                {ex.recommendedSets}x{ex.recommendedReps}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => onAction(ex.id)}
          className="w-full bg-gray-900 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <Dumbbell className="h-4 w-4" />
          {label}
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
