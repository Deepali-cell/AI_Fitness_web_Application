const Banner = () => {
  return (
    <section className="px-6 pb-32 relative overflow-hidden">
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-400/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative group">
        {/* OUTER GLOW */}
        <div className="absolute -inset-[1px] rounded-[3rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-cyan-400/20 blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700" />

        {/* ===== MAIN CONTAINER ===== */}
        <div className="relative rounded-[3rem] border border-white/10 bg-[#090909]/90 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.08)]">
          {/* GRID EFFECT */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:55px_55px]" />

          {/* TOP RIGHT GLOW */}
          <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full" />

          {/* BOTTOM LEFT GLOW */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 px-8 py-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
            {/* ===== LEFT SIDE ===== */}
            <div className="max-w-3xl">
              {/* SMALL LABEL */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-7">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-cyan-300">
                  AI Health Optimization
                </p>
              </div>

              {/* HEADING */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tight text-white">
                Transform Your <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                  Fitness Journey
                </span>
                <br />
                With Intelligent AI.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
                Track workouts, monitor your health, receive personalized
                recommendations, and unlock smarter fitness insights powered by
                advanced AI technology.
              </p>
            </div>

            {/* ===== RIGHT SIDE ===== */}
            <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
              {/* MAIN BUTTON */}
              <button className="group relative overflow-hidden w-full lg:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black uppercase tracking-wide shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Start Your Analysis</span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* STATUS */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 blur-md opacity-70 rounded-full" />

                  <div className="relative w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                </div>

                <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-500">
                  AI System Active
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
