"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "68.8M", suffix: "t", label: "Food wasted annually in India", trend: "+2.4%" },
  { value: "₹93K", suffix: " Cr", label: "Economic value of wasted food", trend: null },
  { value: "28×", suffix: "", label: "Methane's warming power vs CO₂", trend: null },
  { value: "85%", suffix: "", label: "Divertible from landfills", trend: "growing" },
];

export default function StatsStrip() {
  return (
    <section className="section-compact relative">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-bg p-6 sm:p-8 lg:p-10 group hover:bg-surface transition-colors duration-300 cursor-default"
            >
              {stat.trend && (
                <div className="flex items-center gap-1 mb-3">
                  <ArrowUpRight size={12} className="text-primary" />
                  <span className="text-[10px] font-semibold text-primary tracking-wide">
                    {stat.trend}
                  </span>
                </div>
              )}
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight">
                {stat.value}
                <span className="text-base sm:text-lg text-text-muted font-normal ml-0.5">
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-2 text-[11px] sm:text-xs text-text-muted leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16" />
    </section>
  );
}
