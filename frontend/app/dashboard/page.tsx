"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowLeft,
  TrendingUp,
  Leaf,
  Wind,
  Flame,
  Recycle,
  Trees,
  BarChart3,
  PieChart as PieChartIcon,
  Droplets,
} from "lucide-react";

// ============ Dummy data ============
const DAILY_INPUT_KG = 150;
const HOSTELS = [
  "Greenwood Hostel",
  "Sunrise Residency",
  "Campus Living Hall",
  "Metro PG Residence",
];
const COMPANY_TOTAL = 4;

const weeklyData = (() => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const offsets = [10, 25, -5, 30, 15, -15, -20];
  return days.map((day, i) => {
    const waste = 120 + offsets[i];
    const total = waste * COMPANY_TOTAL;
    return {
      label: day,
      waste: total,
      biogas: parseFloat((total * 0.05).toFixed(2)),
      fertilizer: parseFloat((total * 0.25).toFixed(2)),
      carbon: parseFloat((total * 0.001).toFixed(3)),
    };
  });
})();

const MONTHLY_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthlyData = MONTHLY_LABELS.map((_, i) => {
  const single = 3500 + i * 300;
  const waste = single * COMPANY_TOTAL;
  return {
    label: MONTHLY_LABELS[i],
    waste,
    biogas: parseFloat((waste * 0.05).toFixed(2)),
    carbon: parseFloat((waste * 0.001).toFixed(3)),
  };
});

const hostelTotalWaste = DAILY_INPUT_KG * 90;

const comparisonData = HOSTELS.map((name) => {
  const w = hostelTotalWaste;
  return {
    name: name.split(" ")[0],
    waste: w,
    biogas: parseInt((w * 0.05).toFixed(0)),
  };
});

// Company totals
const compTotalWaste = hostelTotalWaste * COMPANY_TOTAL;
const compTotalBiogas = parseFloat((compTotalWaste * 0.05).toFixed(1));
const compTotalFert = parseFloat((compTotalWaste * 0.25).toFixed(1));
const compTotalCredits = parseFloat((compTotalWaste * 0.001).toFixed(2));
const compCo2 = compTotalWaste * 0.001 * 1000;
const compTrees = Math.round(compCo2 / 22);
const compLpg = Math.round(compTotalBiogas * 7.5 * 10) / 10;
const compCookMin = Math.round(compTotalBiogas * 30);

const PIE_COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

export default function DashboardPage() {
  const [trend, setTrend] = useState<"weekly" | "monthly">("weekly");
  const chartData = trend === "weekly" ? weeklyData : monthlyData;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors mb-3"
            >
              <ArrowLeft size={14} />
              Back to Home
            </a>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Company <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Overall waste processing across all {COMPANY_TOTAL} hostels
            </p>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: <Leaf size={18} />,
              label: "Total Waste Processed",
              value: `${(compTotalWaste / 1000).toFixed(1)}K kg`,
              color: "text-green-400",
              bg: "bg-green-500/10",
            },
            {
              icon: <Droplets size={18} />,
              label: "Total Biogas",
              value: `${compTotalBiogas} m³`,
              color: "text-blue-400",
              bg: "bg-blue-500/10",
            },
            {
              icon: <Recycle size={18} />,
              label: "Total Fertilizer",
              value: `${(compTotalFert / 1000).toFixed(1)}K kg`,
              color: "text-amber-400",
              bg: "bg-amber-500/10",
            },
            {
              icon: <TrendingUp size={18} />,
              label: "Total Carbon Credits",
              value: `${compTotalCredits} tCO₂`,
              color: "text-violet-400",
              bg: "bg-violet-500/10",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="glass rounded-2xl p-5 hover:bg-white/[0.03] transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center ${card.color} mb-3`}>
                {card.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{card.value}</div>
              <div className="text-xs text-neutral-500">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Environmental Impact */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                <Leaf size={20} />
              </div>
              <h3 className="font-semibold">Environmental Impact</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: <Wind size={14} className="text-sky-400" />, label: "CO₂ Avoided", value: `${compCo2.toFixed(0)} kg` },
                { icon: <Trees size={14} className="text-green-400" />, label: "Trees Equivalent", value: `≈ ${compTrees}` },
                { icon: <Flame size={14} className="text-orange-400" />, label: "LPG Replaced", value: `${compLpg} cylinders` },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    {item.icon}
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Energy Generated */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                <Droplets size={20} />
              </div>
              <h3 className="font-semibold">Energy Generated</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: <Flame size={14} className="text-orange-400" />, label: "Biogas", value: `${compTotalBiogas} m³` },
                { icon: <Droplets size={14} className="text-blue-400" />, label: "Cooking Time", value: `~${compCookMin} min` },
                { icon: <Recycle size={14} className="text-amber-400" />, label: "Fertilizer", value: `${compTotalFert.toLocaleString()} kg` },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    {item.icon}
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Carbon Credits */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-semibold">Carbon Credits</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Credits Earned", value: `${compTotalCredits} tCO₂` },
                { label: "Est. Value", value: `₹${(compTotalCredits * 800).toFixed(0)}` },
                { label: "Monthly Avg", value: `₹${((compTotalCredits / 3) * 800).toFixed(0)}` },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">{item.label}</span>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Hostel comparison */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 size={18} className="text-green-400" />
              <h3 className="font-semibold">Waste by Hostel (90 Days)</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 12 }} />
                  <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "#1a1a1a",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "13px",
                    }}
                  />
                  <Bar dataKey="waste" fill="#22c55e" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie chart */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <PieChartIcon size={18} className="text-blue-400" />
              <h3 className="font-semibold">Output Breakdown</h3>
            </div>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Biogas", value: compTotalBiogas },
                      { name: "Fertilizer", value: compTotalFert },
                      { name: "Carbon Credits", value: compTotalCredits * 100 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {PIE_COLORS.map((color, i) => (
                      <Cell key={i} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#1a1a1a",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "13px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="glass rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-green-400" />
              <h3 className="font-semibold">Waste Trend</h3>
            </div>
            <div className="flex gap-1">
              {(["weekly", "monthly"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTrend(t)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    trend === t
                      ? "bg-green-500/20 text-green-400"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="wasteGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="label" stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                />
                <Area type="monotone" dataKey="waste" stroke="#22c55e" strokeWidth={2} fill="url(#wasteGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Table */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Weekly Overview (All Hostels Combined)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-neutral-500 border-b border-white/[0.06]">
                  <th className="pb-3 text-left font-medium">Day</th>
                  <th className="pb-3 text-right font-medium">Waste (kg)</th>
                  <th className="pb-3 text-right font-medium">Biogas (m³)</th>
                  <th className="pb-3 text-right font-medium">Fertilizer (kg)</th>
                  <th className="pb-3 text-right font-medium">CO₂ (t)</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((d) => (
                  <tr
                    key={d.label}
                    className="border-b border-white/[0.03] text-neutral-300 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 font-medium">{d.label}</td>
                    <td className="py-3 text-right">{d.waste}</td>
                    <td className="py-3 text-right text-blue-400">{d.biogas}</td>
                    <td className="py-3 text-right text-amber-400">{d.fertilizer}</td>
                    <td className="py-3 text-right text-violet-400">{d.carbon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
