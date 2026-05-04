"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Trash2, Factory, Flame, Leaf, ArrowRight } from "lucide-react";
import Section from "./Section";

const steps = [
  {
    icon: Trash2,
    step: "01",
    title: "Collect",
    tagline: "Segregated waste from hostels & campuses",
    description:
      "Daily pickup from mess kitchens. Pre-segregated organic waste goes straight to our digesters — zero sorting delays.",
    color: "text-warning",
    bg: "bg-warning/8",
    border: "border-warning/15",
    line: "from-warning/30",
  },
  {
    icon: Factory,
    step: "02",
    title: "Digest",
    tagline: "Anaerobic digestion in decentralized plants",
    description:
      "Sealed digesters break down waste without oxygen, releasing methane-rich biogas and nutrient-dense digestate.",
    color: "text-success",
    bg: "bg-success/8",
    border: "border-success/15",
    line: "from-success/30",
  },
  {
    icon: Flame,
    step: "03",
    title: "Generate",
    tagline: "Biogas & fertilizer output",
    description:
      "Captured biogas replaces LPG in kitchens. Byproduct becomes premium organic fertilizer — two revenue streams.",
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/15",
    line: "from-primary/30",
  },
  {
    icon: Leaf,
    step: "04",
    title: "Verify",
    tagline: "Carbon-credit-ready records",
    description:
      "Every kg diverted is logged, verified, and converted into tradeable carbon credits. Measurable climate ROI.",
    color: "text-accent",
    bg: "bg-accent/8",
    border: "border-accent/15",
    line: "from-accent/30",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  return (
    <Section id="how-it-works" ref={sectionRef} className="section-tall mesh-green">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[18px] h-[2px] bg-primary" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
              How It Works
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[0.95] text-text">
            From <span className="text-warning">Waste</span>
            <span className="text-text-muted mx-2">→</span>
            <span className="gradient-text">Value</span>
          </h2>
          <p className="mt-5 text-text-dim leading-relaxed">
            We collect segregated food waste, convert it into biogas and organic
            fertilizer, and log every output into carbon-credit-ready records.
          </p>
        </motion.div>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Vertical connector line */}
        <div className="hidden lg:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-[1px] bg-gradient-to-b from-border via-border to-transparent" />

        <div className="space-y-6 lg:space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                  i > 0 ? "lg:mt-12" : ""
                }`}
              >
                {/* Center dot on desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-bg border-2 border-primary/40 z-10" />

                {/* Card */}
                <div className={`${isLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
                  <div className="surface-card rounded-2xl p-6 sm:p-8 hover:bg-card-hover hover:border-border-hover transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} className={step.color} />
                      </div>
                      <div>
                        <span className={`font-mono text-[11px] font-semibold ${step.color} opacity-60`}>
                          {step.step}
                        </span>
                        <h3 className={`font-display text-lg font-semibold ${step.color}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2 font-medium">
                      {step.tagline}
                    </p>
                    <p className="text-sm text-text-dim leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1"}`} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Value chain strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 surface rounded-xl px-6 py-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
          {[
            { label: "Waste In", color: "text-warning" },
            { label: "Digestion", color: "text-success" },
            { label: "Biogas", color: "text-primary" },
            { label: "Fertilizer", color: "text-success" },
            { label: "Carbon Value", color: "text-accent" },
          ].map((item, i) => (
            <span key={item.label} className="flex items-center gap-2">
              <span className={`font-semibold ${item.color}`}>{item.label}</span>
              {i < 4 && <ArrowRight size={10} className="text-text-faint" />}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
