"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, DollarSign, CloudLightning } from "lucide-react";
import Section from "./Section";

const stats = [
  {
    icon: AlertTriangle,
    value: "68.8M",
    label: "tonnes wasted annually",
    detail: "Among the world's highest — enough to feed 190M people",
    color: "text-error",
    bg: "bg-error/8",
  },
  {
    icon: TrendingDown,
    value: "150–200",
    label: "kg waste per hostel/day",
    detail: "Typical 500-student hostel daily output",
    color: "text-warning",
    bg: "bg-warning/8",
  },
  {
    icon: DollarSign,
    value: "₹2.8L",
    label: "waste disposal cost/year",
    detail: "Money spent hauling to landfills, per institution",
    color: "text-warning",
    bg: "bg-warning/8",
  },
  {
    icon: CloudLightning,
    value: "28×",
    label: "methane's warming power",
    detail: "Landfill methane vs CO₂ over 100 years",
    color: "text-success",
    bg: "bg-success/8",
  },
];

export default function ProblemSection() {
  return (
    <Section className="section-tall mesh-violet">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Header — 2 cols */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[18px] h-[2px] bg-error" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-error font-semibold font-display">
                The Problem
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[0.95] text-text">
              India Wastes
              <br />
              <span className="text-error">₹93,000 Crore</span>
              <br />
              <span className="text-text-dim text-2xl sm:text-3xl lg:text-[32px] font-medium">
                of Food Every Year
              </span>
            </h2>
            <p className="mt-6 text-text-dim leading-relaxed max-w-md">
              Most ends up in landfills — emitting methane, costing institutions
              money, and creating zero value. Hostels pay to throw away food
              they already paid to cook.
            </p>
          </motion.div>
        </div>

        {/* Stats grid — 3 cols */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="surface-card rounded-xl p-6 hover:bg-card-hover transition-colors duration-300 group"
                >
                  <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center mb-4`}>
                    <Icon size={18} className={stat.color} />
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-text">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm text-text font-medium">{stat.label}</div>
                  <div className="mt-2 text-[11px] text-text-muted leading-relaxed">
                    {stat.detail}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Vicious cycle arrow flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 surface rounded-xl px-5 py-4"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs">
              {[
                { label: "Food Cooked", color: "text-success" },
                { label: "→", dim: true },
                { label: "Leftovers Wasted", color: "text-warning" },
                { label: "→", dim: true },
                { label: "Hauled to Landfill", color: "text-error" },
                { label: "→", dim: true },
                { label: "Methane Emitted", color: "text-text-muted" },
                { label: "→", dim: true },
                { label: "₹ Spent, Zero Return", color: "text-text-dim" },
              ].map((item, i) =>
                item.dim ? (
                  <span key={i} className="text-text-faint">
                    {item.label}
                  </span>
                ) : (
                  <span key={i} className={`font-semibold ${item.color}`}>
                    {item.label}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
