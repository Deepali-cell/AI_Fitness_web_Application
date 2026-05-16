import React from "react";

interface TableHeaderProps {
  workoutLength: number;
  formattedDate: string;
  totalCalories: number;
}

const TableHeader = ({
  workoutLength,
  formattedDate,
  totalCalories,
}: TableHeaderProps) => {
  return (
    <>
      {" "}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-[#1d1d2d] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{formattedDate}</h2>

          <p className="text-gray-400 text-sm mt-1">Daily fitness schedule</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="bg-[#141421] px-4 py-3 rounded-2xl border border-[#25253a]">
            <p className="text-xs text-gray-500">Workouts</p>

            <h3 className="text-lg font-bold text-blue-400">{workoutLength}</h3>
          </div>

          <div className="bg-[#141421] px-4 py-3 rounded-2xl border border-[#25253a]">
            <p className="text-xs text-gray-500">Calories</p>

            <h3 className="text-lg font-bold text-orange-400">
              {Math.round(totalCalories)} kcal
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
