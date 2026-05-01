"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ShieldCheck } from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

// Generate dummy carbon credits data
function generateCreditsData() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return months.map((month, i) => ({
    month,
    credits: Math.round((12 + i * 3.5 + Math.random() * 5) * 100) / 100,
    value: Math.round((12 + i * 3.5 + Math.random() * 5) * 800) / 100,
  }));
}

const data = generateCreditsData();

export default function CarbonCredits() {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setChartReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="carbon" className="relative py-24 lg:py-32">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-violet-400 font-semibold">
            Carbon Credits
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Tradeable{" "}
            <span
              className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
            >
              Carbon Credits
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Every tonne of CO₂ diverted becomes a verified carbon credit —
            tracked, certified, and ready for the global carbon marketplace.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: <TrendingUp size={18} />,
              value: "127.5",
              label: "Total Credits Generated (tons CO₂)",
              color: "text-green-400",
            },
            {
              icon: <DollarSign size={18} />,
              value: "₹8.1L",
              label: "Est. Market Value",
              color: "text-emerald-400",
            },
            {
              icon: <ShieldCheck size={18} />,
              value: "Gold Standard",
              label: "Verification Status",
              color: "text-blue-400",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all"
            >
              <div
                className={`w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center ${item.color} mb-3`}
              >
                {item.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{item.value}</div>
              <div className="text-xs text-neutral-500">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 lg:p-8"
        >
          <h3 className="text-lg font-semibold mb-6">
            Credits Generated Over Time
          </h3>
          <div className="h-64 sm:h-72">
            {chartReady ? (
              <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="creditGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                />
                <XAxis
                  dataKey="month"
                  stroke="rgba(255,255,255,0.15)"
                  tick={{ fill: "#737373", fontSize: 12 }}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.15)"
                  tick={{ fill: "#737373", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                  formatter={(value) => [`${value} credits`, "CO₂"]}
                />
                <Area
                  type="monotone"
                  dataKey="credits"
                  stroke="#22c55e"
                  strokeWidth={2}
                  fill="url(#creditGrad)"
                />
              </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-xl bg-white/[0.025]" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
