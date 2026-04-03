"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Flame,
  Recycle,
  Trees,
  Wind,
  Droplets,
} from "lucide-react";
import {
  co2Avoided,
  treesEquivalent,
  lpgReplaced,
  wasteToBiogas,
  wasteToFertilizer,
  cookingMinutes,
} from "@/lib/conversions";

export default function ImpactCalculator() {
  const [wasteKg, setWasteKg] = useState(100);

  const biogas = wasteToBiogas(wasteKg);
  const fertilizer = wasteToFertilizer(wasteKg);
  const co2 = co2Avoided(wasteKg);
  const trees = treesEquivalent(co2);
  const lpg = lpgReplaced(biogas);
  const minutes = cookingMinutes(biogas);

  const impacts = [
    {
      icon: <Flame size={20} />,
      value: `${biogas.toFixed(2)} m³`,
      label: "Biogas Generated",
      detail: `Powered cooking for ~${minutes} minutes`,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      icon: <Recycle size={20} />,
      value: `${fertilizer.toFixed(1)} kg`,
      label: "Organic Fertilizer",
      detail: "Nutrient-rich digestate output",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: <Wind size={20} />,
      value: `${co2.toFixed(0)} kg CO₂`,
      label: "Emissions Avoided",
      detail: "Landfill methane prevented",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      icon: <Trees size={20} />,
      value: `≈ ${trees} trees`,
      label: "Tree Equivalent",
      detail: "Annual CO₂ absorption capacity",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: <Droplets size={20} />,
      value: `${lpg} LPG cylinders`,
      label: "LPG Replaced",
      detail: "Biogas replaces fossil fuel",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      icon: <Leaf size={20} />,
      value: `${(wasteKg * 0.001).toFixed(3)} t`,
      label: "Carbon Credits",
      detail: "Verified for marketplace trading",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section id="impact" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            Your Impact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Your Waste Did
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            See exactly how your donated food waste transforms into
            measurable environmental impact.
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-neutral-400 font-medium">
                Enter your waste amount:
              </span>
              <div className="text-2xl font-bold gradient-text">
                {wasteKg} kg
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={10000}
              value={wasteKg}
              onChange={(e) => setWasteKg(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between mt-2 text-xs text-neutral-600">
              <span>1 kg</span>
              <span>5,000 kg</span>
              <span>10,000 kg</span>
            </div>
          </div>
        </motion.div>

        {/* Impact Cards */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="glass rounded-2xl p-6 group hover:bg-white/[0.04] transition-all"
            >
              <div
                className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <div className="text-xl font-bold mb-1">{item.value}</div>
              <div className="text-sm font-medium text-neutral-300 mb-1">
                {item.label}
              </div>
              <div className="text-xs text-neutral-600">{item.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Example formula */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <span className="text-xs text-neutral-500 font-mono">
              1 kg waste → 0.05 m³ biogas → 0.25 kg fertilizer → 0.001 tCO₂
              offset
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
