import { motion } from "framer-motion";
import { FaBolt, FaChevronRight, FaHeartbeat } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#060606] text-white flex items-center px-6 lg:px-20">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Cyan Glow */}
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/15 blur-[140px] rounded-full" />

        {/* Blue Glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[650px] h-[650px] bg-blue-500/10 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:55px_55px]" />

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

        {/* Small Dots */}
        <div className="absolute top-32 right-40 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

        <div className="absolute bottom-24 left-24 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_30px_#3b82f6]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* ===== LEFT SIDE ===== */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-xs font-bold tracking-[0.25em] uppercase text-cyan-200">
              AI Fitness Intelligence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]"
          >
            Unlock Your <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]">
              Peak Performance
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-xl text-zinc-400 text-lg leading-relaxed"
          >
            Smart AI technology that tracks workouts, monitors health, predicts
            risks, and helps you build a stronger and healthier lifestyle with
            personalized fitness insights.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-2 flex flex-col sm:flex-row gap-5"
          >
            {/* Main Button */}
            <button className="group px-9 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_45px_rgba(34,211,238,0.35)]">
              <span className="flex items-center gap-3">
                Start Training
                <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary Button */}
            <button className="px-9 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all uppercase tracking-wide font-bold">
              Explore System
            </button>
          </motion.div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="relative flex justify-center items-center">
          {/* Main Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

          {/* ECG / Health Pulse Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[560px] h-[560px] rounded-full border border-cyan-400/10 border-dashed"
          />

          {/* Hexagon Shape */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[470px] h-[470px] bg-cyan-400/5 backdrop-blur-sm"
            style={{
              clipPath:
                "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
            }}
          />

          {/* HEALTH UI LINES */}
          <div className="absolute w-[620px] h-[620px] border border-white/5 rounded-full" />

          {/* ===== MAIN IMAGE SHAPE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[340px] h-[420px] overflow-hidden border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 shadow-[0_0_80px_rgba(34,211,238,0.25)]"
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
            }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl z-10" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-20" />

            {/* Image */}
            <img
              src="/h.jpg"
              alt="AI Fitness"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-700"
            />

            {/* HEALTH HUD LINES */}
            <div className="absolute top-6 left-6 w-16 h-[2px] bg-cyan-400 z-30 shadow-[0_0_10px_#22d3ee]" />

            <div className="absolute bottom-8 right-6 w-20 h-[2px] bg-blue-400 z-30 shadow-[0_0_10px_#60a5fa]" />

            <div className="absolute top-10 right-8 w-2 h-2 rounded-full bg-cyan-300 z-30 animate-pulse" />
          </motion.div>

          {/* ===== FLOATING CARD 1 ===== */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-10 -left-10 bg-black/40 border border-cyan-400/20 backdrop-blur-2xl p-5 rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-40 rounded-full" />

                <div className="relative w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center">
                  <FaHeartbeat />
                </div>
              </div>

              <div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.25em]">
                  Heart Rate
                </p>

                <h3 className="text-2xl font-black mt-1">72 BPM</h3>
              </div>
            </div>
          </motion.div>

          {/* ===== FLOATING CARD 2 ===== */}
          <motion.div
            animate={{
              y: [0, 18, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-10 -right-10 bg-black/40 border border-blue-400/20 backdrop-blur-2xl p-5 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-40 rounded-full" />

                <div className="relative w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center">
                  <FaBolt />
                </div>
              </div>

              <div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.25em]">
                  Energy Level
                </p>

                <h3 className="text-2xl font-black mt-1">High</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
