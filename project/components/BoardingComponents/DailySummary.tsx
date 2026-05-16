"use client";

import { useEffect, useState } from "react";
import DailySummaryInput from "./DailySummaryComponents/DailySummaryInput";
import DailySummaryReport from "./DailySummaryComponents/DailySummaryReport";
import { useCreateDailySummary, useDailySummary } from "@/hooks/boarding.hook";
import {
  createDailySummaryPayload,
  useDailySummaryForm,
} from "@/services/user.dailySummaryForm.service";
import { BreakdownType, DailySummaryType } from "@/types/dailySummary.type";
import { FormEventType } from "@/types/field.type";

const DailySummary = () => {
  const {
    data,
    foodInput,
    workoutInput,
    setFoodInput,
    setWorkoutInput,
    handleChange,
    addFood,
    addWorkout,
    resetForm,
  } = useDailySummaryForm();
  const [message, setMessage] = useState<string>("");
  const [summary, setSummary] = useState<DailySummaryType | null>(null);
  const [breakdown, setBreakdown] = useState<BreakdownType | null>(null);
  const { data: summaryData, isLoading } = useDailySummary();
  const { mutate, isPending } = useCreateDailySummary();
  const finalSendData = createDailySummaryPayload(data);

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();

    setMessage("");

    mutate(finalSendData, {
      onSuccess: (res) => {
        if (res.success) {
          setMessage("✅ Data saved successfully!");

          setSummary(res.summary);

          setBreakdown(res.breakdown);

          resetForm();
        }
      },

      onError: () => {
        setMessage("⚠️ Error occurred");
      },
    });
  };

  useEffect(() => {
    const loadSummaryData = () => {
      if (summaryData?.success) {
        setSummary(summaryData.summary);
        setBreakdown(summaryData.breakdown);
      }
    };
    loadSummaryData();
  }, [summaryData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DailySummaryInput
        data={data}
        foodInput={foodInput}
        workoutInput={workoutInput}
        setFoodInput={setFoodInput}
        setWorkoutInput={setWorkoutInput}
        addFood={addFood}
        addWorkout={addWorkout}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={isPending}
        message={message}
      />

      <DailySummaryReport
        loading={isLoading}
        summary={summary}
        breakdown={breakdown}
      />
    </div>
  );
};

export default DailySummary;
