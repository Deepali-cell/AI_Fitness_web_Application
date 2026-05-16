import { CheckCircle2 } from "lucide-react";

const WorkoutPlanNote = ({
  length,
  handledFinalize,
}: {
  length: number;
  handledFinalize: () => void;
}) => {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-10 bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full" />
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 font-sans">
          Plan Summary{" "}
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </h2>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 mb-8 border border-white/10">
          <p className="text-slate-300 text-sm mb-1 uppercase tracking-wider font-semibold font-sans">
            Total Workouts
          </p>
          <div className="text-5xl font-black text-white">{length}</div>
        </div>
        <ul className="space-y-4 mb-10">
          {[
            "7 Days schedule",
            "Personalized intensity",
            "Rest days optimized",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-slate-300 font-medium font-sans text-sm"
            >
              <CheckCircle2 size={16} className="text-blue-400" /> {item}
            </li>
          ))}
        </ul>
        <button
          onClick={handledFinalize}
          className="w-full py-4 rounded-2xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg active:scale-95"
        >
          Finalize Weekly Plan
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanNote;
