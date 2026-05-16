"use client";
import Banner from "@/components/HomeComponents/Banner";
import Features from "@/components/HomeComponents/Features";
import HeroSection from "@/components/HomeComponents/HeroSection";
import StatsSection from "@/components/HomeComponents/StatsSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <HeroSection />
      {/* 2. STATS SECTION */}
      <StatsSection />
      {/* 3. CORE FEATURES */}
      <Features />
      {/* 4. Banner Section */}
      <Banner />
    </div>
  );
}
