"use client";

import { useWorkout } from "@/app/context/WorkoutPlanContext";
import EmptyWorkoutPlan from "@/components/BoardingComponents/Workout_and_foodComponents/EmptyWorkoutPlan";
import PlanHeader from "@/components/BoardingComponents/Workout_and_foodComponents/PlanHeader";
import WorkoutCard from "@/components/BoardingComponents/Workout_and_foodComponents/WorkoutCard";
import WorkoutPlanNote from "@/components/BoardingComponents/Workout_and_foodComponents/WorkoutPlanNote";
import { useCreateWorkoutPlan } from "@/hooks/boarding.hook";
import { exercises } from "@/lib/exerciseData";
import { useRouter } from "next/navigation";

const FinalizeWorkoutPlans = () => {
  const { plan, removeFromPlan, clearPlan } = useWorkout();
  const router = useRouter();
  const selectedExercises = exercises.filter((exercise) =>
    plan.includes(exercise.id),
  );
  const hasPlan = plan.length > 0;
  const { mutate } = useCreateWorkoutPlan();

  const handleFinalize = () => {
    mutate(plan, {
      onSuccess: (data) => {
        if (data.success) {
          alert("Workout plan created!");

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
        label="WorkOut Plan"
        onAction={clearPlan}
        subHeading=" Customize your path to peak performance."
      />

      <div className="max-w-7xl mx-auto">
        {hasPlan ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {selectedExercises.map((ex) => (
                  <div
                    key={ex.id}
                    className="hover:scale-[1.02] transition-transform duration-300"
                  >
                    <WorkoutCard
                      ex={ex}
                      label="Remove"
                      onAction={removeFromPlan}
                    />
                  </div>
                ))}
              </div>
            </div>

            <WorkoutPlanNote
              length={plan.length}
              handledFinalize={handleFinalize}
            />
          </div>
        ) : (
          <EmptyWorkoutPlan />
        )}
      </div>
    </div>
  );
};

export default FinalizeWorkoutPlans;
