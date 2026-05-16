"use client";

import { AlertTriangle, ShieldCheck } from "lucide-react";

interface Props {
  header: string;
  riskLabel: string;
}

const AlertBanner = ({ header, riskLabel }: Props) => {
  const isCritical = header?.includes("Critical");

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl ${
        isCritical
          ? "border-red-500/20 bg-red-500/10"
          : "border-emerald-500/20 bg-emerald-500/10"
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-[250px] h-[250px] blur-[100px] ${
          isCritical ? "bg-red-500/10" : "bg-emerald-500/10"
        }`}
      />

      <div className="relative z-10 flex items-start gap-5">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
            isCritical ? "bg-red-500 text-white" : "bg-emerald-500 text-black"
          }`}
        >
          {isCritical ? <AlertTriangle size={28} /> : <ShieldCheck size={28} />}
        </div>

        <div>
          <h2 className="text-2xl font-black">{header}</h2>

          <p className="mt-2 text-zinc-300 font-medium">
            Risk Level: {riskLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
