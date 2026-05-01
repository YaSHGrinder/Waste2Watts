"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getPreviewData() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return months.map((m, i) => ({
    month: m,
    waste: Math.round((800 + i * 150 + Math.random() * 200)),
  }));
}

const data = getPreviewData();

export default function DashboardPreview() {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setChartReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.06]"
        >
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="max-w-md mx-auto px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-neutral-600 text-center font-mono">
                dashboard.waste2watts.in
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-white/[0.02] to-transparent">
            {/* Mini stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Today's Waste", value: "147 kg", color: "text-green-400" },
                { label: "Biogas Today", value: "7.35 m³", color: "text-sky-400" },
                { label: "Fertilizer", value: "36.8 kg", color: "text-amber-400" },
                { label: "CO₂ Offset", value: "0.147 t", color: "text-violet-400" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3 sm:p-4"
                >
                  <div className="text-xs text-neutral-500 mb-1">{stat.label}</div>
                  <div className={`text-lg sm:text-xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="h-40 sm:h-48">
              {chartReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                    <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        background: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="waste"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full rounded-xl bg-white/[0.025]" />
              )}
            </div>
          </div>

          {/* CTA Overlay */}
          <div className="text-center py-4 border-t border-white/[0.06]">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Open Full Dashboard
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
