"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Trash2,
  Factory,
  Flame,
  Sprout,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Section from "./Section";

const steps = [
  {
    icon: Trash2,
    step: "01",
    title: "Collect",
    tagline: "Segregated waste from hostels & campuses",
    description: "Daily pickup from mess kitchens. Pre-segregated organic waste goes straight to our digesters — zero sorting delays.",
    accent: "text-amber-400",
    borderAccent: "border-amber-400/20",
    bgAccent: "bg-amber-400/5",
  },
  {
    icon: Factory,
    step: "02",
    title: "Digest",
    tagline: "Anaerobic digestion in decentralized plants",
    description: "Sealed digesters break down waste without oxygen, releasing methane-rich biogas and nutrient-dense digestate.",
    accent: "text-sky-400",
    borderAccent: "border-sky-400/20",
    bgAccent: "bg-sky-400/5",
  },
  {
    icon: Flame,
    step: "03",
    title: "Generate",
    tagline: "Biogas & fertilizer output",
    description: "Captured biogas replaces LPG in kitchens. Byproduct becomes premium organic fertilizer — two revenue streams.",
    accent: "text-green-400",
    borderAccent: "border-green-400/30",
    bgAccent: "bg-green-400/5",
    isHighlight: true,
  },
  {
    icon: Leaf,
    step: "04",
    title: "Verify",
    tagline: "Carbon-credit-ready records",
    description: "Every kg diverted is logged, verified, and converted into tradeable carbon credits. Measurable climate ROI.",
    accent: "text-violet-400",
    borderAccent: "border-violet-400/20",
    bgAccent: "bg-violet-400/5",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <Section
      id="how-it-works"
      ref={sectionRef}
      className="section-standard overflow-hidden"
      bgMesh
    >
      {/* Vertical accent line */}
      <div className="hidden lg:block absolute left-[calc(50%+480px)] top-1/3 bottom-1/3 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className={`${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        {/* Header - asymmetric */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[2px] h-8 bg-green-400" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-green-400 font-[family-name:var(--font-syne)] font-medium">
                Operational Pipeline
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[0.95] text-text-heading">
              From <span className="text-amber-400">Waste</span>
              <span className="text-text-muted mx-3">→</span>
              <span className="gradient-text">Value</span>
            </h2>
            <p className="mt-6 text-text-body max-w-2xl leading-relaxed">
              We collect segregated food waste, convert it into biogas and organic
              fertilizer, and log every output into carbon-credit-ready records.
            </p>
          </motion.div>
        </div>

        {/* Process steps - asymmetric layout */}
        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`flex items-start gap-6 group ${isLeft ? "" : "lg:flex-row-reverse"}`}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step number - large background number */}
                <div className="hidden lg:block flex-shrink-0 w-16 text-right">
                  <span
                    className={`font-[family-name:var(--font-syne)] text-6xl font-bold transition-colors duration-500 ${
                      isActive ? step.accent : "text-white/[0.04]"
                    }`}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Card - sharp, no glass */}
                <div
                  className={`flex-1 max-w-2xl border transition-all duration-300 ${
                    step.borderAccent
                  } ${step.bgAccent} ${isActive ? "border-opacity-100" : "border-opacity-30 hover:border-opacity-60"} rounded-sm p-6 sm:p-8`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center bg-bg-elevated border ${step.borderAccent} transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                    >
                      <Icon size={20} className={step.accent} />
                    </div>
                    <span className={`font-mono text-[11px] ${step.accent} ${isActive ? "opacity-100" : "opacity-40"} transition-opacity`}>
                      {step.step}
                    </span>
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-1 ${step.accent}`}>
                    {step.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value chain strip - minimal horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 border border-white/[0.06] rounded-sm px-6 py-5 sm:px-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm">
            {[
              { label: "Waste In", color: "text-amber-400" },
              { label: "Digestion", color: "text-sky-400" },
              { label: "Biogas", color: "text-green-400" },
              { label: "Fertilizer", color: "text-emerald-400" },
              { label: "Carbon Value", color: "text-violet-400" },
            ].map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                <span
                  className={`font-medium text-xs tracking-wide ${item.color} ${
                    activeStep !== null && i <= activeStep ? "opacity-100" : "opacity-40"
                  } transition-opacity duration-300`}
                >
                  {item.label}
                </span>
                {i < 4 && (
                  <ArrowRight
                    size={10}
                    className={`${activeStep !== null && i < activeStep ? "text-green-400/40" : "text-white/10"} transition-colors`}
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
