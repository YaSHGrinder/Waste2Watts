"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react";
import Section from "./Section";
import AnimatedCounter from "./AnimatedCounter";
import type { Summary } from "@/lib/api";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const floatItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function EnergyOrb() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      {/* Outer glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-primary/5"
      />

      {/* Central orb */}
      <div className="absolute inset-12 sm:inset-16 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent glow-primary flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center"
        >
          <Zap size={36} className="text-primary" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Floating data cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-4 left-0 sm:left-4 surface-glass rounded-xl px-3 py-2.5 flex items-center gap-2 animate-float"
      >
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <Leaf size={14} className="text-primary" />
        </div>
        <div>
          <div className="text-[10px] text-text-muted font-medium">CO₂ Avoided</div>
          <div className="text-xs font-semibold text-text data-value">12.4 t</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 right-0 sm:right-4 surface-glass rounded-xl px-3 py-2.5 flex items-center gap-2 animate-float-delayed"
      >
        <div className="w-7 h-7 rounded-lg bg-success/10 flex items-center justify-center">
          <TrendingUp size={14} className="text-success" />
        </div>
        <div>
          <div className="text-[10px] text-text-muted font-medium">Biogas</div>
          <div className="text-xs font-semibold text-text data-value">48 m³</div>
        </div>
      </motion.div>

      {/* Connection lines (decorative) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
      </div>
    </div>
  );
}

export default function HeroSection({ summary }: { summary: Summary }) {
  return (
    <Section id="home" className="section-hero overflow-hidden mesh-green dot-grid">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <motion.div variants={itemUp} className="mb-8 inline-flex items-center gap-2.5">
            <div className="w-[18px] h-[2px] bg-primary" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
              AI-Powered Waste Intelligence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemUp}>
            <h1 className="font-display text-[42px] sm:text-6xl md:text-7xl lg:text-[72px] font-bold tracking-[-0.04em] leading-[0.92] text-text">
              Waste is
              <br />
              <span className="gradient-text">Revenue.</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemUp}
            className="mt-7 text-base sm:text-lg text-text-dim max-w-[36rem] leading-relaxed"
          >
            We convert bio-waste into energy, fertilizer, and carbon credits
            using AI-powered sensing. Stop paying to throw away food — start
            generating value from it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-10"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold text-bg bg-primary rounded-xl hover:bg-primary-dim transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,230,118,0.3)] active:scale-[0.97]"
            >
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-medium text-text-dim border border-border rounded-xl hover:border-border-hover hover:text-text transition-all duration-200 active:scale-[0.97]"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            variants={itemUp}
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              {
                value: summary.totalWaste,
                label: "kg waste diverted",
                decimals: 0,
                suffix: "",
              },
              {
                value: Math.round(summary.totalBiogas * 10) / 10,
                label: "m³ biogas",
                decimals: 1,
                suffix: "",
              },
              {
                value: Math.round(summary.totalCarbonCredits * 100) / 100,
                label: "tCO₂ credits",
                decimals: 1,
                suffix: "",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-mono text-xl sm:text-2xl font-semibold text-text data-value">
                  <AnimatedCounter
                    target={typeof stat.value === "number" ? stat.value : 0}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div variants={floatItem} className="hidden lg:block">
          <EnergyOrb />
        </motion.div>
      </motion.div>
    </Section>
  );
}
