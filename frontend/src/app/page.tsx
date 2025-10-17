"use client";
import BackgroundTexture from "@/components/background-texture";
import FloatingCircles from "@/components/floating-circles";
import HeroSection from "@/components/hero-section";
import HomeHeader from "@/components/home/home-header";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [isExiting, setIsExiting] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        key="home-page"
        className="h-screen w-screen bg-gradient-to-br from-zinc-900 to-zinc-950"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {/* background texture */}
        <BackgroundTexture />
        {/* header */}
        <HomeHeader />

        <div className="pt-24 h-full px-16">
          <HeroSection onNavigate={() => setIsExiting(true)} />
        </div>
        <FloatingCircles />
      </motion.div>
    </AnimatePresence>
  );
}
