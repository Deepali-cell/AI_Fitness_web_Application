// =========================
// FEATURE CARD
// =========================

import { motion } from "framer-motion";

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.05)]"
    >
      {/* ===== GLOW EFFECT ===== */}
      <div className="absolute top-[-30%] right-[-20%] w-[220px] h-[220px] bg-cyan-400/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* HOVER BORDER */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        {/* ICON */}
        <div className="relative mb-8 w-fit">
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 rounded-2xl" />

          {/* Icon Box */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black shadow-[0_0_35px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-all duration-500">
            {icon}
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-black text-white tracking-tight mb-4">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-zinc-400 leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors duration-300">
          {desc}
        </p>

        {/* BOTTOM LINE */}
        <div className="mt-8 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-24 transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
