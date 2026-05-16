import { motion } from "framer-motion";
import { FaHeartbeat, FaBrain, FaFireAlt, FaArrowUp } from "react-icons/fa";

const IntelligenceSection = () => {
  return (
    <section className="relative px-6 lg:px-12 py-28 overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-400/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===== TOP ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-7">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-cyan-300">
              AI Health Intelligence
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1] text-white">
            Your Personal
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              AI Fitness System
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            Real-time health tracking, intelligent workout recommendations, and
            predictive AI insights designed to improve your fitness journey.
          </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-2xl p-8 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[250px] h-[250px] bg-cyan-400/10 blur-[120px]" />

            {/* Card Header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-[0.25em]">
                  AI Health Overview
                </p>

                <h3 className="text-3xl font-black mt-3">Daily Analysis</h3>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <FaBrain />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {[
                {
                  icon: <FaHeartbeat />,
                  label: "Heart Health",
                  value: "98%",
                },
                {
                  icon: <FaFireAlt />,
                  label: "Calories Burn",
                  value: "1,284",
                },
                {
                  icon: <FaArrowUp />,
                  label: "Performance",
                  value: "+24%",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <p className="text-zinc-300 font-semibold">{item.label}</p>
                  </div>

                  <h4 className="text-2xl font-black text-white">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-2xl p-8 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] bg-blue-500/10 blur-[120px]" />

            {/* Header */}
            <div className="mb-10">
              <p className="text-zinc-500 text-sm uppercase tracking-[0.25em]">
                Smart Recommendations
              </p>

              <h3 className="text-3xl font-black mt-3">AI Suggestions</h3>
            </div>

            {/* Recommendation Cards */}
            <div className="space-y-5">
              {[
                "Increase hydration level for better recovery.",
                "AI detected lower sleep quality this week.",
                "Recommended: High protein meal after workout.",
                "Your endurance performance improved by 18%.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 text-zinc-300 hover:border-cyan-400/20 transition-all"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
