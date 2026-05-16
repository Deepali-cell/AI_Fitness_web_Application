"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Profile from "@/components/BoardingComponents/Profile";
import HealthForm from "@/components/BoardingComponents/HealthForm";
import DailySummary from "@/components/BoardingComponents/DailySummary";
import WeeklyReport from "@/components/BoardingComponents/WeeklyReport";
import FinalizeWorkoutPlans from "@/components/BoardingComponents/FinalizeWorkoutPlans";
import FinalizeFoodPlans from "@/components/BoardingComponents/FinalizeFoodPlans";
import { useUpdateUserDetails, useUserDetails } from "@/hooks/boarding.hook";
import { UserDetailType } from "@/types/healthForm.type";

const Boarding = () => {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("HealthDataPanel");
  const [healthData, sethealthData] = useState<UserDetailType>({
    age: "",
    gender: "Male",
    weight: "",
    height: "",
    bloodGroup: "",
    diet: "",
    activity: "",
    sleepHours: 0,
    hydration: 0,
    profession: "",
    goal: "",
    allergies: [],
    chronicDiseases: [],
    habits: [],
    onTreatment: false,
  });
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const { data } = useUserDetails(status === "authenticated");
  const userDetails = data?.userBodyDetails;
  const { mutate } = useUpdateUserDetails();

  const handleDataUpdate = (newData: UserDetailType) => {
    mutate(newData);
  };

  useEffect(() => {
    const loadData = () => {
      if (userDetails) {
        sethealthData(userDetails);
        setIsDataAvailable(true);
      }
    };
    loadData();
  }, [userDetails]);

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center text-blue-500 font-mono animate-pulse tracking-[0.2em]">
        INITIALIZING SYSTEM...
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "HealthDataPanel":
        return <HealthForm data={healthData} updateData={handleDataUpdate} />;
      case "DailyReportPanel":
        return <DailySummary />;
      case "WeeklyReportPanel":
        return <WeeklyReport />;
      case "FinalizeWorkoutPanel":
        return <FinalizeWorkoutPlans />;
      case "FinalizeFoodPanel":
        return <FinalizeFoodPlans />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto">
        <Profile session={session} />

        {/* Tabs Navigation */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 border-b border-zinc-900 scrollbar-hide">
          {[
            "HealthDataPanel",
            "DailyReportPanel",
            "WeeklyReportPanel",
            "FinalizeWorkoutPanel",
            "FinalizeFoodPanel",
          ].map((tab) => {
            const isLocked = tab !== "HealthDataPanel" && !isDataAvailable;

            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                disabled={isLocked}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full border text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 whitespace-nowrap
        ${
          isLocked
            ? "bg-zinc-950 border-zinc-900 text-zinc-700 cursor-not-allowed opacity-40 grayscale"
            : isActive
              ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
        }`}
              >
                {isLocked && <span>🔒</span>}
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[400px] animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Boarding;
