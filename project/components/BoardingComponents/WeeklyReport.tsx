"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Filler,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { WeeklyChartData } from "@/types/weeklyReport.type";
import { useWeeklyReport } from "@/hooks/boarding.hook";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Filler,
  Tooltip,
  Legend,
);

const WeeklyChart = () => {
  const [chartData, setChartData] = useState<WeeklyChartData[]>([]);
  const { data: weeklyData, isLoading } = useWeeklyReport();

  useEffect(() => {
    const fetchSummary = async () => {
      if (weeklyData) {
        setChartData(weeklyData?.data || []);
      }
    };
    fetchSummary();
  }, [weeklyData]);

  const labels = (chartData || []).map((d) => d.date);

  const data: ChartData<"bar" | "line"> = {
    labels,
    datasets: [
      {
        // 1. CALORIES: Smooth Wave (Line + Area)
        type: "line",
        label: "Calories Burned",
        data: chartData.map((d) => d.netCalories),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4, // Curvy wave look
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: "#3b82f6",
        yAxisID: "y",
      },
      {
        // 2. STEPS: Modern Thick Bars
        type: "bar" as const,
        label: "Steps Walked",
        data: chartData.map((d) => d.steps),
        backgroundColor: "rgba(34, 197, 94, 0.6)",
        hoverBackgroundColor: "#22c55e",
        borderRadius: 6, // Rounded bars
        barThickness: 25,
        yAxisID: "y1", // Second axis for higher numbers
      },
      {
        // 3. SLEEP: Floating Dotted Line
        type: "line" as const,
        label: "Sleep (hrs)",
        data: chartData.map((d) => d.sleep),
        borderColor: "#a855f7",
        borderDash: [5, 5], // Dotted line effect
        borderWidth: 2,
        pointStyle: "rectRounded",
        pointRadius: 5,
        fill: false,
        yAxisID: "y2", // Third axis for hours (0-12 range)
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#aaa",
          usePointStyle: true,
          font: { family: "Inter", size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "#1a1a2e",
        padding: 15,
        cornerRadius: 12,
        boxPadding: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#666" },
      },
      y: {
        // Axis for Calories
        position: "left" as const,
        grid: { color: "rgba(255, 255, 255, 0.05)" },
        ticks: { color: "#3b82f6" },
        title: { display: true, text: "Kcal", color: "#3b82f6" },
      },
      y1: {
        // Axis for Steps
        position: "right" as const,
        grid: { display: false },
        ticks: { color: "#22c55e" },
        title: { display: true, text: "Steps", color: "#22c55e" },
      },
      y2: {
        // Axis for Sleep (Hidden mostly, but keeps scale correct)
        position: "right" as const,
        display: false,
        min: 0,
        max: 15,
      },
    },
  };

  if (isLoading)
    return (
      <div
        style={{
          color: "#3b82f6",
          textAlign: "center",
          padding: "100px",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Updating your stats...
      </div>
    );

  return (
    <div
      style={{
        background: "#0d0d12",
        padding: "30px",
        borderRadius: "28px",
        border: "1px solid #1e1e2e",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            color: "#fff",
            margin: 0,
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Weekly Summary
        </h3>
        <p style={{ color: "#555", fontSize: "13px" }}>
          Mixed-mode activity tracking
        </p>
      </div>

      <div style={{ height: "400px", width: "100%" }}>
        {chartData.length > 0 ? (
          <Chart type="bar" data={data} options={options} />
        ) : (
          <div
            style={{ color: "#444", textAlign: "center", paddingTop: "150px" }}
          >
            No data found for this week.
          </div>
        )}
      </div>

      {/* Legend Footer */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid #1e1e2e",
          paddingTop: "15px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#3b82f6", fontWeight: "bold" }}>Wave</div>
          <div style={{ color: "#444", fontSize: "10px" }}>CALORIES</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#22c55e", fontWeight: "bold" }}>Bars</div>
          <div style={{ color: "#444", fontSize: "10px" }}>STEPS</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#a855f7", fontWeight: "bold" }}>Dots</div>
          <div style={{ color: "#444", fontSize: "10px" }}>SLEEP</div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;
