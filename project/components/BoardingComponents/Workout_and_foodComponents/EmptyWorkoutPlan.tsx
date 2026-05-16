import {
  Dumbbell,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const EmptyWorkoutPlan = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center min-h-[60vh] w-full animate-in fade-in zoom-in duration-500">
        <div className="relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl shadow-blue-200/20 max-w-2xl w-full">
          {/* Floating Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center font-sans">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-blue-700 rounded-3xl flex items-center justify-center rotate-12 mb-8 shadow-xl shadow-blue-200">
              <Dumbbell size={48} className="text-white -rotate-12" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">
              Your Schedule is Empty
            </h2>

            <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Start building your weekly fitness journey. Your future self will
              thank you.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                {
                  icon: <Sparkles size={16} className="text-orange-500" />,
                  text: "Get Fit",
                },
                {
                  icon: <Calendar size={16} className="text-blue-500" />,
                  text: "Weekly Goal",
                },
                {
                  icon: <CheckCircle2 size={16} className="text-green-500" />,
                  text: "Pro Workouts",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-2.5 px-4 bg-white/80 rounded-full border border-slate-100 text-xs font-bold text-slate-700 shadow-sm"
                >
                  {item.icon} {item.text}
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 px-10 py-5 rounded-2xl font-bold bg-cyan-400 text-white hover:bg-cyan-700 hover:shadow-2xl hover:shadow-cyan-300 transition-all duration-300 transform hover:-translate-y-1">
              Browse Workouts
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyWorkoutPlan;
