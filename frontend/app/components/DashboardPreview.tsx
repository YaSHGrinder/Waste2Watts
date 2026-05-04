"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, Droplets, Wind, Users } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Section from "./Section";

function getData() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months.map((m, i) => ({
    month: m,
    waste: Math.round(800 + i * 150 + Math.random() * 200),
    biogas: Math.round(40 + i * 12 + Math.random() * 15),
  }));
}

const data = getData();

const stats = [
  { icon: Activity, label: "Waste Processed", value: "2,847", unit: "kg", color: "text-primary" },
  { icon: Droplets, label: "Biogas Generated", value: "156", unit: "m³", color: "text-success" },
  { icon: Wind, label: "CO₂ Avoided", value: "3.2", unit: "tons", color: "text-accent" },
  { icon: Users, label: "Active Partners", value: "4", unit: "", color: "text-warning" },
];

export default function DashboardPreview() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Section id="technology" className="section-standard">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[18px] h-[2px] bg-primary" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
              Technology
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[0.95] text-text">
            Real-Time
            <br />
            <span className="gradient-text">Impact Tracking.</span>
          </h2>
          <p className="mt-5 text-text-dim leading-relaxed">
            Our AI-powered dashboard gives you full visibility into waste
            processing, energy generation, and carbon credit accumulation.
          </p>
        </motion.div>
      </div>

      {/* Dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="surface rounded-2xl overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-surface">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-error/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-warning/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-success/30" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-xs mx-auto px-3 py-1 rounded-lg bg-bg text-[11px] text-text-muted text-center font-mono">
              dashboard.waste2watts.in
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-surface p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className={stat.color} />
                    <span className="text-[10px] uppercase tracking-[0.12em] text-text-muted font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <div className={`font-mono text-lg sm:text-xl font-bold ${stat.color}`}>
                    {stat.value}
                    <span className="text-xs font-normal text-text-muted ml-1">
                      {stat.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="h-48 sm:h-56 lg:h-64 bg-surface rounded-xl p-4">
            {ready ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="wasteGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E676" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#00E676" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-chart-grid)" />
                  <XAxis
                    dataKey="month"
                    stroke="var(--color-chart-axis)"
                    tick={{ fill: "var(--color-text-muted)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="var(--color-chart-axis)"
                    tick={{ fill: "var(--color-text-muted)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-chart-tooltip-bg)",
                      border: "1px solid var(--color-chart-tooltip-border)",
                      borderRadius: "12px",
                      color: "var(--color-text)",
                      fontSize: "12px",
                      padding: "10px 14px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="waste"
                    stroke="#00E676"
                    strokeWidth={2}
                    fill="url(#wasteGrad)"
                    dot={false}
                    activeDot={{ r: 4, fill: "#00E676", stroke: "#0B0F0C", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-lg bg-surface-elevated animate-pulse" />
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-4 border-t border-border">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dim transition-colors font-display font-medium"
          >
            Open Full Dashboard
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
