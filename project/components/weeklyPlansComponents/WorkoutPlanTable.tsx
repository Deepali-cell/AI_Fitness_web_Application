import { Workout } from "@/lib/interfaces";
import { Dumbbell, Flame, Clock3 } from "lucide-react";

const WorkoutPlanTable = ({ workouts }: { workouts: Workout[] }) => {
  return (
    <>
      <div className="bg-[#11111a] rounded-3xl border border-[#1e1e2f] p-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/10 p-3 rounded-2xl">
            <Dumbbell className="text-blue-500" />
          </div>

          <div>
            <h3 className="text-white font-bold text-xl">Workout Plan</h3>

            <p className="text-gray-500 text-sm">Exercises & activity</p>
          </div>
        </div>

        <div className="space-y-4">
          {workouts.length > 0 ? (
            workouts.map((workout: Workout) => (
              <div
                key={workout.id}
                className="bg-[#171724] border border-[#26263b] rounded-2xl p-4 hover:border-blue-500/40 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {workout.name}
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      {workout.type || "Workout"}
                    </p>
                  </div>

                  <div className="bg-blue-500/10 px-3 py-1 rounded-full text-blue-400 text-xs">
                    Active
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap mt-4">
                  <div className="bg-[#0f0f17] px-3 py-2 rounded-xl border border-[#222235] text-sm text-gray-300">
                    {workout.sets || 0} Sets
                  </div>

                  <div className="bg-[#0f0f17] px-3 py-2 rounded-xl border border-[#222235] text-sm text-gray-300">
                    {workout.reps || 0} Reps
                  </div>

                  <div className="bg-[#0f0f17] px-3 py-2 rounded-xl border border-[#222235] text-sm text-gray-300 flex items-center gap-2">
                    <Clock3 size={14} />
                    {workout.duration} min
                  </div>

                  <div className="bg-orange-500/10 px-3 py-2 rounded-xl border border-orange-500/20 text-sm text-orange-400 flex items-center gap-2">
                    <Flame size={14} />
                    {workout.calories || 0} kcal
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              No workouts planned
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutPlanTable;
