"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import type { Summary } from "@/lib/api";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection({ summary }: { summary: Summary }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-green-400 font-medium">
              India&apos;s First Hostel Waste-to-Energy Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
          >
            <span className="block">Turn Food Waste</span>
            <span className="block gradient-text mt-2">Into Clean Energy</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemUp}
            className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Track your impact. Power a sustainable future. We convert hostel
            food waste into biogas, fertilizer, and verified carbon
            credits.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="/dashboard"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-full hover:from-green-300 hover:to-green-400 transition-all hover:shadow-xl hover:shadow-green-500/25"
            >
              Track Your Impact
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Partner With Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter
                  target={Math.round(summary.totalWaste)}
                  suffix={""}
                  decimals={0}
                />
              </div>
              <div className="text-sm text-neutral-500 font-medium">
                Total Waste Processed (kg)
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter
                  target={Math.round(summary.totalBiogas * 10) / 10}
                  suffix=" m³"
                  decimals={1}
                />
              </div>
              <div className="text-sm text-neutral-500 font-medium">
                Biogas Produced
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter
                  target={Math.round(summary.totalCarbonCredits * 100) / 100}
                  suffix=""
                  decimals={1}
                />
              </div>
              <div className="text-sm text-neutral-500 font-medium">
                Carbon Credits (tons CO₂)
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-neutral-600 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent" />
      </motion.div>
    </section>
  );
}
