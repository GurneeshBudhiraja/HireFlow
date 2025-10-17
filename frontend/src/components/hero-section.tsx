import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HIREE_FEATURES = [
  "Find the best jobs for you",
  "Customize your resume easily",
  "Apply to jobs quickly",
  "Get help with follow ups",
];

function HeroSection({ onNavigate }: { onNavigate?: () => void }) {
  const [currentFeature, setCurrentFeature] = useState(HIREE_FEATURES[0]);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => {
        const availableFeatures = HIREE_FEATURES.filter(
          (feature) => feature !== prev
        );
        return availableFeatures[
          Math.floor(Math.random() * availableFeatures.length)
        ];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center mt-16 mx-auto text-center gap-12 max-w-4xl px-6">
      {/* title */}
      <motion.div
        className="font-sub text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          All in one AI agent to{" "}
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold group relative overflow-hidden hover:cursor-pointer"
          >
            find
            <div className="hidden group-hover:absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
          </motion.span>
          ,{" "}
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
            className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            apply
          </motion.span>
          , and{" "}
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6,
            }}
            className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
          >
            follow up
          </motion.span>{" "}
          on job applications
        </span>
      </motion.div>

      {/* description */}
      <motion.div
        className="font-sub flex flex-col sm:flex-row text-2xl md:text-3xl font-medium gap-3 sm:gap-4 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-300 bg-clip-text text-transparent">
          Hiree helps you in
        </span>
        <motion.div
          className="font-side font-semibold px-6 py-2.5 rounded-full relative overflow-hidden bg-white/10 transition-all duration-300 text-2xl"
          style={{
            boxShadow:
              "inset 0px 0px 15px 7px #000000, 0px 4px 20px rgba(0,0,0,0.3)",
            border: "1px solid white",
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          layout
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            layout: {
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          }}
        >
          <NoiseFilterBackground className="absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-600/20" />

          <AnimatePresence mode="wait">
            <motion.span
              key={currentFeature}
              initial={{
                y: 20,
                opacity: 0,
                rotateX: 90,
                scale: 0.8,
                filter: "blur(4px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                rotateX: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -20,
                opacity: 0,
                rotateX: 90,
                scale: 0.8,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative z-10 inline-block whitespace-nowrap text-white select-none"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {currentFeature}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        style={{
          boxShadow: "inset 0px 0px 12px 0px #000000",
        }}
        className="font-sub text-lg px-8 py-4 rounded-full relative overflow-hidden text-white cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 group hover:shadow-none active:border-white/10"
        onClick={() => {
          if (onNavigate) {
            onNavigate();
            setTimeout(() => {
              router.push("/dashboard");
            }, 800);
          } else {
            router.push("/dashboard");
          }
        }}
      >
        <span className="relative font-bold z-10">Get Started</span>
        <div className="absolute h-full w-11 bg-gradient-to-b from-zinc-600/80 to-zinc-800/50 -left-11 top-0 rotate-45  group-hover:left-full blur-md transition-all duration-500 ease-in-out" />
      </motion.button>
    </div>
  );
}

function NoiseFilterBackground({ className }: { className?: string }) {
  return (
    <Image
      src={"/texture-02.svg"}
      alt="noise filter background"
      fill
      className={cn("object-cover", className)}
    />
  );
}

export default HeroSection;
