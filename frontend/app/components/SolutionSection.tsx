"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3, ShieldCheck } from "lucide-react";
import Section from "./Section";

const features = [
  {
    icon: Brain,
    title: "AI Waste Sensing",
    description:
      "Computer vision models classify and quantify waste streams in real time. Know exactly what you're wasting — and how to reduce it.",
    accent: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/15",
  },
  {
    icon: Cpu,
    title: "Decentralized Digesters",
    description:
      "Compact, modular anaerobic digesters deployed on-site. No transportation needed — process waste where it's generated.",
    accent: "text-success",
    bg: "bg-success/8",
    border: "border-success/15",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboard tracking waste diverted, biogas generated, and carbon credits earned. Full transparency, full accountability.",
    accent: "text-accent",
    bg: "bg-accent/8",
    border: "border-accent/15",
  },
  {
    icon: ShieldCheck,
    title: "Carbon Credit Ready",
    description:
      "Every kg of waste diverted is logged, verified, and converted into tradeable carbon credits. Measurable climate ROI.",
    accent: "text-warning",
    bg: "bg-warning/8",
    border: "border-warning/15",
  },
];

export default function SolutionSection() {
  return (
    <Section className="section-standard">
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
              The Solution
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[0.95] text-text">
            From Waste to
            <br />
            <span className="gradient-text">Watts.</span>
          </h2>
          <p className="mt-5 text-text-dim leading-relaxed">
            Our AI-powered platform transforms bio-waste into three revenue
            streams: clean energy, organic fertilizer, and verified carbon credits.
          </p>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`surface-card rounded-2xl p-7 sm:p-8 hover:bg-card-hover hover:border-border-hover transition-all duration-300 group cursor-default glow-card`}
            >
              <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={20} className={feature.accent} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
