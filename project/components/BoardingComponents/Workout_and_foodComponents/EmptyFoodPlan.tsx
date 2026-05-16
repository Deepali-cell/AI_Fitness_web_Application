import { Utensils, Leaf, Apple, ArrowRight, Salad } from "lucide-react";

const EmptyFoodPlan = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[60vh] w-full animate-in fade-in zoom-in duration-500">
        <div className="relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl shadow-green-200/20 max-w-2xl w-full font-sans">
          {/* Floating Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-emerald-700 rounded-3xl flex items-center justify-center -rotate-6 mb-8 shadow-xl shadow-green-200">
              <Salad size={48} className="text-white rotate-6" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">
              No Meals Planned
            </h2>

            <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Let food be thy medicine. Start adding healthy meals to your
              weekly nutrition plan.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                {
                  icon: <Leaf size={16} className="text-green-500" />,
                  text: "Clean Eating",
                },
                {
                  icon: <Utensils size={16} className="text-orange-500" />,
                  text: "Balanced Diet",
                },
                {
                  icon: <Apple size={16} className="text-red-500" />,
                  text: "High Protein",
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
              Explore Healthy Foods
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

export default EmptyFoodPlan;
