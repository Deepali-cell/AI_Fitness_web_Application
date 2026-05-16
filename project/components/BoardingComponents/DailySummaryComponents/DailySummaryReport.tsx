import { BreakdownType, DailySummaryType } from "@/types/dailySummary.type";
import { Flame, Footprints, Moon, Activity, TrendingUp } from "lucide-react";

export interface DailySummaryReportProps {
  loading: boolean;
  summary: DailySummaryType | null;
  breakdown: BreakdownType | null;
}
interface StateCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
}
const StatCard = ({ icon: Icon, label, value, sub }: StateCardProps) => (
  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-600 transition">
    <div className="flex items-center gap-2 text-blue-400">
      <Icon size={16} />
      <p className="text-xs">{label}</p>
    </div>
    <p className="text-xl font-semibold mt-1">{value}</p>
    {sub && <p className="text-[11px] text-zinc-500 mt-1">{sub}</p>}
  </div>
);

const DailySummaryReport = ({
  loading,
  summary,
  breakdown,
}: DailySummaryReportProps) => {
  if (loading) {
    return (
      <div className="p-6 border border-zinc-800 rounded-xl bg-black text-blue-300 animate-pulse">
        Loading your fitness insights...
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="p-6 border border-blue-900/40 rounded-xl bg-black text-center space-y-2">
        <p className="text-lg text-blue-400">📊 No Daily Summary Yet</p>
        <p className="text-sm text-zinc-500">
          Fill your daily activities to generate insights about your body
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 border border-blue-900/40  bg-black text-white space-y-6 shadow-lg shadow-blue-500/10">
      {/* HEADER */}
      <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
        <TrendingUp size={20} /> Your Daily Health Snapshot
      </h2>

      {/* INFO BOX */}
      <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800 text-xs text-zinc-300">
        <p>
          🔥 <b>Calories In</b> = Energy from food you eat
        </p>
        <p>
          🏃 <b>Calories Out</b> = Energy your body burns (activity + steps)
        </p>
        <p>
          ⚖️ <b>Net Calories</b> = Balance that affects weight gain/loss
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          icon={Flame}
          label="Calories In"
          value={summary.totalCaloriesIn}
          sub="Energy from food intake"
        />

        <StatCard
          icon={Activity}
          label="Calories Out"
          value={summary.totalCaloriesOut}
          sub="Burned via activity & body"
        />

        <StatCard
          icon={Footprints}
          label="Steps"
          value={summary.steps}
          sub="Daily movement tracking"
        />

        <StatCard
          icon={Moon}
          label="Sleep"
          value={`${summary.sleepHours} hrs`}
          sub="Recovery & rest quality"
        />
      </div>

      {/* NET CALORIES */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-blue-950 to-black border border-blue-700 text-center">
        <p className="text-sm text-blue-300">Net Energy Balance</p>
        <p className="text-3xl font-bold text-blue-400">
          {breakdown?.netCalories}
        </p>
        <p className="text-[11px] text-zinc-400 mt-1">
          Negative = Fat loss | Positive = Weight gain
        </p>
      </div>

      <span className=" text-xs text-zinc-500">AI-powered health estimate</span>
    </div>
  );
};

export default DailySummaryReport;
