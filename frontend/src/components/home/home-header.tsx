"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GitHubButton from "../github-button";

function HomeHeader() {
  return (
    <motion.div
      className={cn(
        // "flex w-full h-16 rounded-4xl items-center px-10 bg-zinc-700/20 backdrop-blur-[1px] shadow-[inset_0px_0px_6px_#bba8a863] justify-between",
        "flex w-full h-16 rounded-4xl items-center justify-between mx-auto px-16 fixed top-3"
      )}
      initial={{
        y: -30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        y: {
          duration: 0.5,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      {/* App name */}
      <Link
        href="/"
        className="font-main text-3xl font-extrabold tracking-wide"
      >
        Hiree
      </Link>
      <div>
        <GitHubButton url="https://github.com/GurneeshBudhiraja/Hiree" />
      </div>
    </motion.div>
  );
}

export default HomeHeader;
