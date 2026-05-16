"use client";
import React from "react";
import { motion } from "framer-motion";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#09090b]">
      {/* --- PURE HIGH-TECH DARK OVERLAYS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Ambient Cosmic Glows (Black background ko clinical depth dene ke liye) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full"
        />

        {/* 4-Corner Vignette (Screeen ke corners ko dark aur immersive rakhne ke liye) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(9,9,11,0.5) 70%, rgba(9,9,11,1) 100%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full min-h-screen">{children}</main>
    </div>
  );
};

export default Background;
