"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import Section from "./Section";
import type { Summary } from "@/lib/api";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection({ summary }: { summary: Summary }) {
  return (
    <Section
      id="home"
      className="overflow-hidden mesh-green section-hero"
    >
      {/* Grid of dots, not lines - more premium than grid lines */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Asymmetric accent line */}
      <div className="hidden lg:block absolute left-0 top-1/3 bottom-1/3 w-[2px] bg-gradient-to-b from-transparent via-green-400/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Top badge - minimal, tucked left */}
        <motion.div
          variants={itemUp}
          className="mb-8 inline-flex items-center gap-3"
        >
          <div className="w-[2px] h-4 bg-green-400" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-green-400 font-[family-name:var(--font-syne)] font-medium">
            Launching 2026
          </span>
        </motion.div>

        {/* Main headline - asymmetric, oversized Syne */}
        <motion.div variants={itemUp}>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.03em] leading-[0.9] -mt-2">
            <span className="block text-white">Waste is</span>
            <span className="block gradient-text">Revenue.</span>
          </h1>
        </motion.div>

        {/* Subheadline - constrained width, left-aligned for asymmetry */}
        <motion.p
          variants={itemUp}
          className="mt-8 text-lg sm:text-xl text-text-body max-w-[40rem] leading-relaxed font-[family-name:var(--font-dm-sans)]"
        >
          India wastes 68.8 million tonnes of food every year. We collect it
          from hostel messes, process it at decentralized plants, and turn it
          into biogas, organic fertilizer, and tradeable carbon credits.
        </motion.p>

        {/* CTAs - sharp corners, inline layout */}
        <motion.div
          variants={itemUp}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
        >
          <a
            href="#impact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-black bg-green-400 rounded-sm hover:bg-green-300 transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] active:scale-[0.98] font-[family-name:var(--font-syne)]"
          >
            Calculate Impact
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-text-body border border-white/10 rounded-sm hover:bg-white/[0.03] hover:border-white/20 transition-all active:scale-[0.98] font-[family-name:var(--font-syne)]"
          >
            Free Waste Audit
          </a>
        </motion.div>

        {/* Stats - asymmetric grid, mono numbers, surgical green */}
        <motion.div
          variants={itemUp}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.04]"
        >
          {[
            { value: summary.totalWaste, label: "kg waste diverted", decimals: 0, suffix: "" },
            { value: Math.round(summary.totalBiogas * 10) / 10, label: "m³ biogas generated", decimals: 1, suffix: " m³" },
            { value: Math.round(summary.totalCarbonCredits * 100) / 100, label: "tCO₂ in credits", decimals: 1, suffix: "" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-bg-deep px-8 py-8 ${i === 0 ? "sm:col-span-1" : ""}`}
            >
              <div className="font-mono-data text-4xl sm:text-5xl font-semibold text-white tabular-nums">
                <AnimatedCounter
                  target={typeof stat.value === 'number' ? stat.value : 0}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom scroll indicator - minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute -bottom-4 left-0 flex items-center gap-3"
        >
          <div className="w-[60px] h-[1px] bg-text-subtle/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-subtle">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </Section>
  );
}
