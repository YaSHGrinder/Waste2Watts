"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, DollarSign, Leaf } from "lucide-react";
import Section from "./Section";

const stats = [
  { icon: AlertTriangle, value: "68.8M", label: "tonnes wasted annually", detail: "Among world's highest — feeds 190M people", color: "text-red-400" },
  { icon: TrendingDown, value: "150–200", label: "kg waste per hostel/day", detail: "500-student hostel daily output", color: "text-orange-400" },
  { icon: DollarSign, value: "₹2.8L", label: "waste disposal cost/year", detail: "Money spent hauling to landfills", color: "text-amber-400" },
  { icon: Leaf, value: "28×", label: "methane's warming power", detail: "Landfill methane vs CO₂", color: "text-green-400" },
];

export default function ProblemSection() {
  return (
    <Section className="section-tall" bgMesh>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        {/* Editorial-style header - asymmetric */}
        <div className="flex items-start gap-4 mb-6">
          <div className="hidden sm:block w-[2px] h-12 bg-green-400/40 mt-2 flex-shrink-0" />
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-red-400 font-semibold font-[family-name:var(--font-syne)]">
              The Problem
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[0.95] text-text-heading">
              India Wastes<br />
              <span className="text-red-400">₹93,000 Crore</span>{" "}
              <span className="text-text-heading">of Food</span>
            </h2>
          </div>
        </div>
        <p className="text-text-body max-w-[40rem] leading-relaxed ml-6 sm:ml-8">
          Most ends up in landfills — emitting methane, costing institutions
          money, and creating zero value. Hostels pay to throw away food
          they already paid to cook.
        </p>
      </motion.div>

      {/* Stats - horizontal scrollable on mobile, full-width bar on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] mb-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-deep p-6 sm:p-8"
            >
              <Icon size={20} className={`${stat.color} mb-4`} />
              <div className="font-mono-data text-3xl font-semibold text-text-heading tabular-nums">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-body">{stat.label}</div>
              <div className="mt-2 text-[11px] text-text-muted leading-relaxed">
                {stat.detail}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Vicious cycle - minimal horizontal flow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-bg-surface border border-white/[0.06] px-6 py-5 sm:px-8 sm:py-6 rounded-sm"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm">
          {[
            { label: "Food Cooked", color: "text-orange-400" },
            { label: "Leftovers Wasted", color: "text-amber-400" },
            { label: "Hauled to Landfill", color: "text-red-400" },
            { label: "Methane Emitted", color: "text-slate-400" },
            { label: "₹ Spent, Zero Return", color: "text-violet-400" },
          ].map((item, i) => (
            <span key={item.label} className="flex items-center gap-2">
              <span className={`font-medium ${item.color} text-sm`}>{item.label}</span>
              {i < 4 && (
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14" className="text-white/10">
                  <path d="M1 7h12m0 0L9 3m4 4L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
