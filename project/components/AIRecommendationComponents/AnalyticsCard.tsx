"use client";

import { HeartPulse } from "lucide-react";

interface Props {
  label: string;
  value: string | number;
  status: string;
}

const AnalyticsCard = ({ label, value, status }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6">
      <div className="absolute top-[-20%] right-[-20%] w-[150px] h-[150px] bg-cyan-400/5 blur-[80px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
            <HeartPulse size={20} />
          </div>

          <span
            className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide ${
              status === "High" || status === "Low"
                ? "bg-red-500/20 text-red-300"
                : "bg-emerald-500/20 text-emerald-300"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="text-zinc-500 text-sm font-medium">{label}</p>

        <h3 className="text-4xl font-black mt-3">{value}</h3>
      </div>
    </div>
  );
};

export default AnalyticsCard;
