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
import Section from "./Section";

function getPreviewData() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return months.map((m, i) => ({
    month: m,
    waste: Math.round(800 + i * 150 + Math.random() * 200),
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
    <Section className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border border-white/[0.06] rounded-sm overflow-hidden bg-bg-surface"
      >
        {/* Browser chrome - minimal */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.06] bg-bg-deep">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-md mx-auto px-3 py-1 rounded-sm bg-bg-elevated text-[11px] text-text-subtle text-center font-mono">
              dashboard.waste2watts.in
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 bg-bg-deep">
          {/* Stats row - full width, no cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-bg-deep mb-6">
            {[
              { label: "Today's Waste", value: "147", unit: "kg", color: "text-green-400" },
              { label: "Biogas Today", value: "7.35", unit: "m³", color: "text-sky-400" },
              { label: "Fertilizer", value: "36.8", unit: "kg", color: "text-amber-400" },
              { label: "CO₂ Offset", value: "0.147", unit: "t", color: "text-violet-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-surface px-4 py-4 sm:px-6 sm:py-5"
              >
                <div className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">{stat.label}</div>
                <div className={`font-mono-data text-lg sm:text-xl font-semibold tabular-nums ${stat.color}`}>
                  {stat.value}<span className="text-sm font-normal text-text-subtle ml-1">{stat.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart - no glass, flat background */}
          <div className="h-40 sm:h-48 bg-bg-surface px-4 py-4 rounded-sm">
            {chartReady ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.15)" tick={{ fill: "#71717a", fontSize: 11 }} />
                  <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "#71717a", fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "#0f0f0f",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "4px",
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
              <div className="h-full rounded-sm bg-bg-elevated" />
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-4 border-t border-white/[0.06] bg-bg-deep">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-[family-name:var(--font-syne)] font-medium"
          >
            Open Full Dashboard
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
