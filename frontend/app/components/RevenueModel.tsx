"use client";

import { motion } from "framer-motion";
import { Truck, Flame, Recycle, Coins } from "lucide-react";

const revenueStreams = [
  {
    icon: <Truck size={22} />,
    title: "Waste Collection & Processing",
    description:
      "Institutions pay us to collect and process their waste — replacing their existing disposal costs. We charge ₹2–4/kg, cheaper than traditional landfill haulage.",
    value: "₹2–4/kg collected",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: <Flame size={22} />,
    title: "Biogas for Kitchens",
    description:
      "Captured biogas is fed back into partner hostel kitchens, displacing LPG cylinders. At 40+ kWh/m³, each 100 kg of waste generates ~80 cooking minutes of clean fuel.",
    value: "~7 m³/day per 150 kg waste",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: <Recycle size={22} />,
    title: "Organic Fertilizer Sales",
    description:
      "Nutrient-rich digestate is processed and sold as premium organic fertilizer. Each 100 kg waste yields ~25 kg fertilizer, sold at ₹4–6/kg to farmers and landscapers.",
    value: "25 kg output per 100 kg input",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: <Coins size={22} />,
    title: "Carbon Credits",
    description:
      "Every tonne of CO₂ prevented from landfill becomes a verified carbon credit — tradeable on India's Carbon Credit Trading Scheme and voluntary markets at ₹800+/tonne.",
    value: "₹800+ per tCO₂ credit",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export default function RevenueModel() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-amber-400 font-semibold">
            Revenue Model
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Where{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Value
            </span>{" "}
            <span className="text-white">Comes From</span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Four revenue streams from a single kilogram of food waste —
            turning what institutions see as a cost into a profit center.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {revenueStreams.map((stream, i) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${stream.bg} flex items-center justify-center ${stream.color} flex-shrink-0`}
                >
                  {stream.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-600 mb-1">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                    {stream.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-white/[0.04] text-neutral-400">
                    {stream.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unit economics callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 lg:p-8 gradient-border">
            <h4 className="text-sm font-semibold text-neutral-300 mb-4 uppercase tracking-wider">
              Unit Economics per 100 kg waste
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-amber-400">₹300</div>
                <div className="text-xs text-neutral-600">Collection fee</div>
              </div>
              <div>
                <div className="text-lg font-bold text-orange-400">₹420</div>
                <div className="text-xs text-neutral-600">Biogas value</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-400">₹125</div>
                <div className="text-xs text-neutral-600">Fertilizer sale</div>
              </div>
              <div>
                <div className="text-lg font-bold text-violet-400">₹800</div>
                <div className="text-xs text-neutral-600">Carbon credit</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06] text-center">
              <span className="text-sm text-neutral-400">Total value: </span>
              <span className="text-xl font-bold gradient-text">
                ₹1,645 per 100 kg
              </span>
              <span className="text-xs text-neutral-600 ml-2">
                (vs ₹200 spent on disposal)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
