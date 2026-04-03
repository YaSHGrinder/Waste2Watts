"use client";

import { motion } from "framer-motion";
import {
  Trash2,
  ArrowRight,
  Factory,
  Zap,
  Leaf,
} from "lucide-react";

const steps = [
  {
    icon: <Trash2 size={28} />,
    title: "Food Waste Collection",
    description:
      "We collect organic food waste from hostel mess kitchens daily — segregated at source for maximum efficiency.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: <Factory size={28} />,
    title: "Anaerobic Digestion",
    description:
      "Waste enters our sealed digesters where bacteria break it down without oxygen, releasing methane-rich biogas.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: <Zap size={28} />,
    title: "Biogas & Fertilizer",
    description:
      "Captured biogas powers hostel kitchens. The nutrient-rich digestate becomes premium organic fertilizer.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: <Leaf size={28} />,
    title: "Carbon Credits",
    description:
      "Every kg of waste diverted from landfills generates verified carbon credits — measurable, tradeable, impactful.",
    color: "from-violet-400 to-purple-600",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            The Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            How It{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto leading-relaxed">
            From kitchen waste to clean energy — a simple, scalable process
            that transforms liability into value.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                {/* Step number */}
                <div className="text-xs text-neutral-600 font-mono mb-4">
                  Step 0{i + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 text-black`}
                >
                  {step.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/3 -right-3 z-10 text-neutral-700">
                  <ArrowRight size={14} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Flow diagram bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-6 lg:p-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 text-sm">
            {[
              { label: "Waste In", color: "text-amber-400" },
              { label: "Digestion", color: "text-blue-400" },
              { label: "Biogas Out", color: "text-green-400" },
              { label: "Fertilizer", color: "text-emerald-400" },
              { label: "Carbon Credits", color: "text-violet-400" },
            ].map((item, i) => (
              <span key={item.label}>
                <span className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-current ${item.color}`}
                  />
                  <span className={`font-medium ${item.color}`}>
                    {item.label}
                  </span>
                </span>
                {i < 4 && (
                  <ArrowRight
                    size={14}
                    className="text-neutral-700 hidden sm:inline"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
