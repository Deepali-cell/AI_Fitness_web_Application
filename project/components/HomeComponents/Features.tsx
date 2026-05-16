// =========================
// FEATURES SECTION
// =========================

import FeatureCard from "./FeatureCard";
import { FaBrain, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="relative px-6 lg:px-12 py-32 overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-400/10 blur-[140px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="flex flex-col items-center text-center mb-24">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-7">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-cyan-300">
              Smart Fitness Technology
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tight text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              NeuroFit
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="text-zinc-400 mt-8 text-lg leading-relaxed max-w-2xl">
            Advanced AI-powered fitness intelligence designed to help you train
            smarter, monitor your health, and achieve better results with
            personalized recommendations.
          </p>
        </div>

        {/* ===== FEATURE CARDS ===== */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaBrain size={24} />}
            title="AI Fitness Insights"
            desc="Get intelligent workout recommendations and adaptive training plans powered by real-time AI analysis."
          />

          <FeatureCard
            icon={<FaShieldAlt size={24} />}
            title="Health Risk Detection"
            desc="Monitor vital health metrics and identify possible health risks before they become serious problems."
          />

          <FeatureCard
            icon={<FaChartLine size={24} />}
            title="Progress Analytics"
            desc="Track body performance, calories, workouts, and fitness improvements with advanced visual analytics."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
