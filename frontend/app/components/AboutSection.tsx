"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  MapPinned,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: <Target size={22} />,
    value: "2 TPD",
    label: "Pilot Plant Capacity",
  },
  {
    icon: <MapPinned size={22} />,
    value: "Cluster-Based",
    label: "Expansion Model",
  },
  {
    icon: <TrendingUp size={22} />,
    value: "Pan-India",
    label: "Long-Term Vision",
  },
  {
    icon: <BarChart3 size={22} />,
    value: "Marketplace",
    label: "Carbon Credit Trading",
  },
];

const problems = [
  {
    stat: "68.7M",
    label: "Tonnes of food wasted annually in India",
  },
  {
    stat: "135K+",
    label: "College hostels generating tons of daily organic waste",
  },
  {
    stat: "90%",
    label: "Of food waste ends up in landfills",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Building India&apos;s{" "}
            <span className="gradient-text">Waste-to-Energy</span>{" "}
            Infrastructure
          </h2>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            Waste2Watts is building India&apos;s first nationwide hostel-based
            food waste network. We start with decentralized 2 TPD (tonnes per
            day) biogas plants and scale through cluster-based expansion —
            turning a ₹2.5 lakh crore waste problem into clean energy, organic
            fertilizer, and verified carbon credits.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              variants={itemUp}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {p.stat}
              </div>
              <div className="text-sm text-neutral-500">{p.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-neutral-500 mb-8 max-w-2xl text-sm">
            Pan-India decentralized waste-to-energy infrastructure with
            integrated carbon credit marketplace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 group hover:bg-white/[0.04] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-3 group-hover:bg-green-500/20 transition-colors">
                  {s.icon}
                </div>
                <div className="text-lg font-semibold mb-1">{s.value}</div>
                <div className="text-xs text-neutral-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scalability Model CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-10 gradient-border"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                Scaling Decentralized Energy
              </h3>
              <p className="text-neutral-400 max-w-lg text-sm leading-relaxed">
                Each plant processes waste from multiple hostels in a 3-5km
                radius. Revenue comes from biogas sales, fertilizer, and carbon
                credits — creating a profitable, self-sustaining model ready
                for VC funding and scale.
              </p>
            </div>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-full whitespace-nowrap hover:shadow-lg hover:shadow-green-500/25 transition-all"
            >
              Invest in Waste2Watts
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
