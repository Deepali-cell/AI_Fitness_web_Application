import { Brain } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center py-16">
        <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black shadow-[0_0_50px_rgba(34,211,238,0.35)]">
          <Brain size={42} />
        </div>

        <h2 className="mt-8 text-3xl font-black">
          Your AI Health Report Awaits
        </h2>

        <p className="mt-4 text-zinc-400 max-w-xl leading-relaxed">
          Generate intelligent recommendations for workouts, nutrition,
          recovery, and risk analysis.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
