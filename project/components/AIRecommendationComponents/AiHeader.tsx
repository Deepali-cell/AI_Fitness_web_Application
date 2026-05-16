"use client";

import { Loader2, Sparkles } from "lucide-react";

interface AiHeaderProps {
  loading: boolean;
  onGenerate: () => void;
}

const AiHeader = ({ loading, onGenerate }: AiHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-cyan-300">
            AI Recommendation Engine
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
          AI Health
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Co-Pilot
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Personalized fitness, nutrition, and recovery insights powered by
          real-time AI health analysis.
        </p>
      </div>

      <button
        onClick={onGenerate}
        disabled={loading}
        className="group relative overflow-hidden px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black uppercase tracking-wide shadow-[0_0_45px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300"
      >
        <span className="relative z-10 flex items-center gap-3">
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Sparkles size={20} />
          )}

          {loading ? "Analyzing..." : "Generate Insights"}
        </span>

        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

export default AiHeader;
