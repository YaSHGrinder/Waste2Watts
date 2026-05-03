"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Trash2,
  Factory,
  Flame,
  Sprout,
  Leaf,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: <Trash2 size={20} />,
    step: "01",
    title: "Collect",
    tagline: "Segregated food waste from hostels & campuses",
    description:
      "Daily pickup from mess kitchens. Pre-segregated organic waste goes straight to our digesters — zero sorting delays, zero contamination.",
    gradient: "from-amber-400 to-orange-500",
    textColor: "text-amber-400",
    bgGlow: "bg-amber-500/5",
    borderColor: "border-amber-500/20",
  },
  {
    icon: <Factory size={20} />,
    step: "02",
    title: "Digest",
    tagline: "Anaerobic digestion in decentralized plants",
    description:
      "Sealed digesters break down waste without oxygen, releasing methane-rich biogas and nutrient-dense digestate in a controlled loop.",
    gradient: "from-blue-400 to-indigo-500",
    textColor: "text-blue-400",
    bgGlow: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
  },
  {
    icon: <Flame size={20} />,
    step: "03",
    title: "Generate",
    tagline: "Biogas for clean energy, digestate for fertilizer",
    description:
      "Captured biogas replaces LPG in hostel kitchens. The byproduct becomes premium organic fertilizer for local farms — two revenue streams from one waste stream.",
    gradient: "from-green-400 to-emerald-600",
    textColor: "text-green-400",
    bgGlow: "bg-green-500/10",
    borderColor: "border-green-500/30",
    isHighlight: true,
  },
  {
    icon: <Leaf size={20} />,
    step: "04",
    title: "Verify",
    tagline: "Carbon-credit-ready impact records",
    description:
      "Every kg diverted from landfills is logged, verified, and converted into tradeable carbon credits. Measurable climate ROI for every partner.",
    gradient: "from-violet-400 to-purple-600",
    textColor: "text-violet-400",
    bgGlow: "bg-violet-500/5",
    borderColor: "border-violet-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const pipeline = [
  { label: "Waste In", color: "text-amber-400", dotColor: "bg-amber-400" },
  { label: "Digestion", color: "text-blue-400", dotColor: "bg-blue-400" },
  { label: "Biogas", color: "text-green-400", dotColor: "bg-green-400" },
  {
    label: "Fertilizer",
    color: "text-emerald-400",
    dotColor: "bg-emerald-400",
  },
  {
    label: "Carbon Value",
    color: "text-violet-400",
    dotColor: "bg-violet-400",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background radial glow behind the transform step */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[11px] tracking-[0.25em] uppercase text-green-400 font-semibold"
          >
            Operational Pipeline
          </motion.span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            From{" "}
            <span className="text-amber-400">Waste</span>{" "}
            <span className="text-neutral-600 mx-2">→</span>{" "}
            <span className="gradient-text">Value</span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            We collect segregated food waste, convert it into biogas and organic
            fertilizer, and log every output into carbon-credit-ready records.
          </p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop: horizontal flow with animated connecting line */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {steps.map((step, i) => {
                const isActive = activeStep === i;
                const isHighlight = step.isHighlight;

                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    onHoverStart={() => setActiveStep(i)}
                    onHoverEnd={() => setActiveStep(null)}
                    className="relative"
                  >
                    <div
                      className={`
                        group relative h-full rounded-2xl p-5 border transition-all duration-300
                        ${step.borderColor} ${step.bgGlow}
                        ${
                          isActive
                            ? "border-opacity-100 shadow-lg scale-[1.02]"
                            : "hover:border-opacity-60"
                        }
                        ${
                          isHighlight && !isActive
                            ? "ring-1 ring-green-500/20"
                            : ""
                        }
                        ${
                          isHighlight && isActive
                            ? "ring-1 ring-green-400/40 shadow-green-500/10"
                            : ""
                        }
                      `}
                    >
                      {/* Step number + icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-[11px] font-mono ${step.textColor} ${
                            isActive ? "opacity-100" : "opacity-50"
                          } transition-opacity`}
                        >
                          {step.step}
                        </span>
                        <div
                          className={`
                            w-9 h-9 rounded-lg bg-gradient-to-br ${step.gradient}
                            flex items-center justify-center text-black
                            transition-transform duration-300
                            ${isActive ? "scale-110" : "group-hover:scale-105"}
                          `}
                        >
                          {step.icon}
                        </div>
                      </div>

                      <h3
                        className={`text-sm font-semibold mb-1 ${step.textColor}`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[10px] text-neutral-600 mb-3 leading-relaxed tracking-wide uppercase">
                        {step.tagline}
                      </p>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Transformation glow for step 3 */}
                      {isHighlight && isActive && (
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 pointer-events-none" />
                      )}
                    </div>

                    {/* Connector arrow between steps - desktop only */}
                    {i < steps.length - 1 && (
                      <div className="absolute top-[52px] -right-2.5 z-20 hidden lg:block">
                        <ArrowRight
                          size={14}
                          className={`transition-colors duration-300 ${
                            activeStep !== null && activeStep >= i
                              ? "text-green-400/60"
                              : "text-neutral-700"
                          }`}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-5">
            {steps.map((step, i) => {
              const isHighlight = step.isHighlight;

              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`
                          w-9 h-9 rounded-lg bg-gradient-to-br ${step.gradient}
                          flex items-center justify-center text-black flex-shrink-0
                          ${isHighlight ? "ring-1 ring-green-400/30" : ""}
                        `}
                      >
                        {step.icon}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-[1px] flex-1 bg-neutral-800 mt-2 relative overflow-hidden">
                          <div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-400/40 to-transparent"
                          />
                        </div>
                      )}
                    </div>

                    <div
                      className={`
                        flex-1 rounded-xl p-5 border
                        ${step.borderColor} ${step.bgGlow}
                        ${isHighlight ? "ring-1 ring-green-500/20" : ""}
                      `}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[11px] font-mono ${step.textColor} opacity-50`}
                        >
                          {step.step}
                        </span>
                        <h3
                          className={`text-sm font-semibold ${step.textColor}`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[10px] text-neutral-600 mb-2 uppercase tracking-wide">
                        {step.tagline}
                      </p>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pipeline strip - enhanced with active step highlighting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-6 lg:p-8"
        >
          <p className="text-center text-[11px] tracking-[0.2em] uppercase text-neutral-600 font-semibold mb-5">
            Value Chain
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-2.5 text-sm">
            {pipeline.map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                <motion.span
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full
                    bg-white/[0.03] border border-white/[0.06]
                    ${item.color}
                    transition-all duration-300
                    ${
                      activeStep !== null && i <= activeStep
                        ? "border-opacity-100 bg-white/[0.06]"
                        : ""
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeStep !== null && i <= activeStep
                        ? item.dotColor
                        : "bg-current opacity-40"
                    } transition-all duration-300`}
                  />
                  <span className="font-medium text-xs tracking-wide">
                    {item.label}
                  </span>
                </motion.span>
                {i < pipeline.length - 1 && (
                  <ArrowRight
                    size={12}
                    className={`transition-colors duration-300 ${
                      activeStep !== null && i < activeStep
                        ? "text-green-400/60"
                        : "text-neutral-700"
                    } hidden sm:inline`}
                  />
                )}
              </span>
            ))}
          </div>

          {/* KPI row - enhanced */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap justify-center gap-10 text-center">
            <div>
              <div className="text-lg font-bold text-green-400">100%</div>
              <div className="text-[11px] text-neutral-600 uppercase tracking-wider">
                Waste Utilized
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-400">2x</div>
              <div className="text-[11px] text-neutral-600 uppercase tracking-wider">
                LPG Savings
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-400">Verified</div>
              <div className="text-[11px] text-neutral-600 uppercase tracking-wider">
                Carbon Credits
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
