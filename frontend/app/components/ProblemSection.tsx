"use client";

import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Leaf, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: <AlertTriangle size={22} />,
    value: "68.8M tonnes",
    label: "Food wasted annually in India",
    detail: "Among the world's highest — enough to feed 190M people",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: <TrendingDown size={22} />,
    value: "150–200 kg",
    label: "Waste per hostel per day",
    detail: "A 500-student hostel's daily food waste output",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: <DollarSign size={22} />,
    value: "₹2.8L/year",
    label: "Waste disposal cost per hostel",
    detail: "Money spent just to haul waste to landfills",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: <Leaf size={22} />,
    value: "28× CO₂",
    label: "Methane's warming power",
    detail: "Landfill methane is 28x worse than CO₂ for climate",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-red-400 font-semibold">
            The Problem
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
           {" "}
            India Wastes{" "}
            <span className="text-red-400">₹93,000 Crore</span> of Food{" "}
            <span className="text-white">Every Year</span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Most of it ends up in landfills — emitting methane, costing
            institutions money, and creating zero value. Hostels pay to throw
            away food they already paid to cook.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all"
            >
              <div
                className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color} mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-neutral-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-600">{stat.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* The vicious cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              { label: "Food Cooked", color: "text-orange-400" },
              { label: "Leftovers Wasted", color: "text-amber-400" },
              { label: "Hauled to Landfill", color: "text-red-400" },
              { label: "Methane Emitted", color: "text-slate-400" },
              { label: "₹ Spent, Zero Return", color: "text-violet-400" },
            ].map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                <span className={`font-medium ${item.color}`}>
                  {item.label}
                </span>
                {i < 4 && (
                  <svg
                    className="text-neutral-700 hidden sm:block"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M1 7h12m0 0L9 3m4 4L9 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
