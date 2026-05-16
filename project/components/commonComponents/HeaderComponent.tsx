"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaHeartbeat } from "react-icons/fa";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Boarding", href: "/userBoarding" },
  { name: "Workout Library", href: "/exerciseLibrary" },
  { name: "Food Library", href: "/foodLibrary" },
  { name: "Weekly Plans", href: "/weeklyPlans" },
  { name: "AI Recommendation", href: "/aiRecommendation" },
];

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {/* ===== HEADER ===== */}
      <nav className="fixed top-0 left-0 w-full z-[70] px-5 lg:px-10 pt-5">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-cyan-400/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* NAVBAR */}
          <div className="relative flex items-center justify-between px-5 lg:px-7 py-4 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.08)] overflow-hidden">
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[28px] border border-cyan-400/10 pointer-events-none" />

            {/* ===== LEFT ===== */}
            {/* ===== LEFT ===== */}
            <div className="flex items-center gap-5">
              {/* LOGO */}
              <Link href="/" className="flex items-center gap-3 group">
                {/* Logo Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 rounded-2xl" />

                  <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                    <FaHeartbeat className="text-lg" />
                  </div>
                </div>

                {/* Logo Text */}
                <div className="leading-none">
                  <h1 className="text-xl font-black tracking-tight">
                    NeuroFit
                  </h1>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-1">
                    AI FITNESS
                  </p>
                </div>
              </Link>

              {/* DESKTOP NAV TOGGLE */}
              <div className="hidden lg:flex items-center">
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden flex items-center gap-7 border-l border-white/10 ml-6 pl-6"
                    >
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="relative text-sm font-semibold text-zinc-400 hover:text-cyan-300 transition-all duration-300 whitespace-nowrap group"
                        >
                          {link.name}

                          {/* Hover Line */}
                          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ===== RIGHT ===== */}
            <div className="flex items-center gap-4">
              {/* DESKTOP AUTH */}
              <div className="hidden md:flex items-center gap-4">
                {isLoading ? (
                  <div className="w-28 h-10 rounded-2xl bg-white/10 animate-pulse" />
                ) : isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    {/* User Avatar */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-40 rounded-full" />

                      <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-black uppercase border border-white/10">
                        {session?.user?.name?.charAt(0) || "U"}
                      </div>
                    </div>

                    {/* Logout */}
                    <button
                      onClick={() => signOut()}
                      className="px-5 py-3 rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 font-bold text-xs hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      LOGOUT
                    </button>
                  </div>
                ) : (
                  <Link href="/authenticate">
                    <button className="group relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black text-sm shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-300">
                      <span className="relative z-10">LOGIN / SIGNUP</span>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </Link>
                )}
              </div>

              {/* MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-40 rounded-2xl" />

                <div className="relative z-10">
                  {isOpen ? <RxCross2 size={24} /> : <HiMenuAlt1 size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="fixed inset-x-5 top-28 z-[60] xl:hidden"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/80 backdrop-blur-3xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-cyan-400/10 blur-[100px]" />

              {/* Links */}
              <div className="relative z-10 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold text-zinc-300 hover:text-cyan-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="w-full h-px bg-white/10 mt-2" />

                {/* MOBILE AUTH */}
                {isAuthenticated ? (
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-zinc-500">Signed in as</p>

                      <p className="text-white font-bold mt-1 break-all">
                        {session?.user?.email}
                      </p>
                    </div>

                    <button
                      onClick={() => signOut()}
                      className="w-full py-4 rounded-2xl bg-red-500 text-white font-black tracking-wide"
                    >
                      LOGOUT
                    </button>
                  </div>
                ) : (
                  <Link href="/authenticate">
                    <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black tracking-wide">
                      SIGN IN
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-28 w-full" />
    </>
  );
}
