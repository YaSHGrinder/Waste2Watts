"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  BatteryCharging,
  CheckCircle2,
  Clock3,
  Database,
  Droplets,
  Flame,
  Gauge,
  Leaf,
  Radio,
  Scale,
  ShieldCheck,
  Thermometer,
  Waves,
} from "lucide-react";

type TelemetryMetric = {
  metric: string;
  label: string;
  value: string;
  unit?: string;
  status: "Normal" | "Stable" | "Online" | "Verified";
  source: string;
  icon: React.ReactNode;
  accent: string;
};

const dailyTrend = [
  { day: "Mon", waste: 720, biogas: 34.8, co2: 0.72 },
  { day: "Tue", waste: 760, biogas: 37.1, co2: 0.76 },
  { day: "Wed", waste: 810, biogas: 40.4, co2: 0.81 },
  { day: "Thu", waste: 790, biogas: 39.2, co2: 0.79 },
  { day: "Fri", waste: 840, biogas: 42.5, co2: 0.84 },
  { day: "Sat", waste: 820, biogas: 41.8, co2: 0.82 },
  { day: "Sun", waste: 865, biogas: 44.1, co2: 0.87 },
];

const outputBreakdown = [
  { name: "Biogas", value: 42.5, color: "#38bdf8" },
  { name: "Fertilizer", value: 205, color: "#22c55e" },
  { name: "CO2e Offset", value: 82, color: "#f59e0b" },
];

const readinessItems = [
  { label: "Waste input logged", value: "Batch-wise", icon: Scale },
  { label: "Biogas output tracked", value: "Flow meter", icon: Flame },
  { label: "CO2 offset estimated", value: "Auto-calculated", icon: Leaf },
  { label: "Daily records available", value: "Export-ready", icon: Database },
];

const alerts = [
  { title: "System online", detail: "All pilot monitoring points reporting", tone: "text-green-400" },
  { title: "pH within safe range", detail: "Current reading stable for digestion", tone: "text-green-400" },
  { title: "Gas flow normal", detail: "Production trend matches feed input", tone: "text-sky-400" },
  { title: "Daily data recorded", detail: "Impact log ready for validation", tone: "text-amber-400" },
];

function buildTelemetry(tick: number): TelemetryMetric[] {
  const wave = Math.sin(tick / 3);
  const smallWave = Math.cos(tick / 4);

  return [
    {
      metric: "waste_weight",
      label: "Waste Weight",
      value: `${Math.round(820 + wave * 18)}`,
      unit: "kg today",
      status: "Online",
      source: "hopper_load_cell",
      icon: <Scale size={18} />,
      accent: "text-green-400 bg-green-500/10",
    },
    {
      metric: "biogas_flow",
      label: "Gas Flow",
      value: `${(42.5 + wave * 1.4).toFixed(1)}`,
      unit: "m3 today",
      status: "Normal",
      source: "gas_flow_meter",
      icon: <Gauge size={18} />,
      accent: "text-sky-400 bg-sky-500/10",
    },
    {
      metric: "methane_quality",
      label: "Methane Estimate",
      value: `${(61.8 + smallWave * 1.2).toFixed(1)}`,
      unit: "%",
      status: "Stable",
      source: "methane_sensor",
      icon: <Flame size={18} />,
      accent: "text-orange-400 bg-orange-500/10",
    },
    {
      metric: "digester_temperature",
      label: "Temperature",
      value: `${(35.6 + wave * 0.3).toFixed(1)}`,
      unit: "C",
      status: "Stable",
      source: "temperature_probe",
      icon: <Thermometer size={18} />,
      accent: "text-amber-400 bg-amber-500/10",
    },
    {
      metric: "slurry_ph",
      label: "pH Level",
      value: `${(7.1 + smallWave * 0.08).toFixed(1)}`,
      unit: "pH",
      status: "Normal",
      source: "ph_sensor",
      icon: <Droplets size={18} />,
      accent: "text-blue-400 bg-blue-500/10",
    },
  ];
}

export default function DashboardPage() {
  const [tick, setTick] = useState(0);
  const [chartsReady, setChartsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setChartsReady(true);
    });

    const timer = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 3500);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, []);

  const telemetry = useMemo(() => buildTelemetry(tick), [tick]);
  const wasteToday = Number(telemetry[0].value);
  const biogasToday = Number(telemetry[1].value);
  const methane = Number(telemetry[2].value);
  const co2Avoided = wasteToday / 1000;
  const energy = Math.round(biogasToday * (methane / 100) * 9.8);
  const fertilizer = Math.round(wasteToday * 0.25);

  const kpis = [
    {
      label: "Waste Processed Today",
      value: wasteToday.toLocaleString(),
      unit: "kg",
      icon: <Scale size={19} />,
      tone: "text-green-400 bg-green-500/10",
      caption: `${Math.round((wasteToday / 1000) * 100)}% of 1 TPD pilot capacity`,
    },
    {
      label: "Biogas Generated",
      value: biogasToday.toFixed(1),
      unit: "m3",
      icon: <Flame size={19} />,
      tone: "text-sky-400 bg-sky-500/10",
      caption: "Simulated gas flow meter reading",
    },
    {
      label: "CO2 Avoided",
      value: co2Avoided.toFixed(2),
      unit: "tCO2e",
      icon: <Leaf size={19} />,
      tone: "text-green-400 bg-green-500/10",
      caption: "Estimated from verified waste input",
    },
    {
      label: "Energy Equivalent",
      value: `~${energy}`,
      unit: "kWh",
      icon: <BatteryCharging size={19} />,
      tone: "text-amber-400 bg-amber-500/10",
      caption: "Based on methane-rich biogas output",
    },
    {
      label: "Fertilizer Output",
      value: fertilizer.toString(),
      unit: "kg",
      icon: <Waves size={19} />,
      tone: "text-emerald-400 bg-emerald-500/10",
      caption: "Digestate estimate for daily report",
    },
    {
      label: "Carbon Data Status",
      value: "Verified",
      unit: "",
      icon: <BadgeCheck size={19} />,
      tone: "text-violet-400 bg-violet-500/10",
      caption: "Daily impact record is export-ready",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    Live Monitoring
                  </span>
                  <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-neutral-400">
                    1 TPD Capacity
                  </span>
                  <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-neutral-400">
                    Pilot Plant
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Waste2Watts <span className="gradient-text">Pilot Dashboard</span>
                </h1>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-neutral-400">
                  A real-time preview of how food waste, biogas output, and carbon-credit ready impact data will be tracked.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Clock3 size={14} />
                    Last Updated
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">Just now</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Radio size={14} />
                    Data Mode
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">Live simulated</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {kpis.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="glass rounded-2xl p-5 hover:bg-white/[0.045] transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.tone}`}>
                  {card.icon}
                </div>
                <span className="rounded-full border border-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                  Today
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2">
                <div className="text-3xl font-bold tracking-tight">{card.value}</div>
                {card.unit && <div className="pb-1 text-sm font-medium text-neutral-400">{card.unit}</div>}
              </div>
              <div className="mt-2 text-xs text-neutral-500">{card.label}</div>
              <div className="mt-4 text-xs text-neutral-400">{card.caption}</div>
            </motion.div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-6 mb-6">
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Activity size={18} className="text-green-400" />
                  Basic Sensor Feed
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  Core monitoring points for the first smart biogas pilot.
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                <CheckCircle2 size={13} />
                All online
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
              {telemetry.map((sensor) => (
                <div key={sensor.metric} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${sensor.accent}`}>
                    {sensor.icon}
                  </div>
                  <div className="text-sm font-semibold text-white">{sensor.label}</div>
                  <div className="mt-2 flex items-end gap-1.5">
                    <span className="text-2xl font-bold">{sensor.value}</span>
                    {sensor.unit && <span className="pb-1 text-xs text-neutral-500">{sensor.unit}</span>}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="min-w-0 break-all text-[11px] text-neutral-500">{sensor.source}</span>
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[11px] font-medium text-green-400">
                      {sensor.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ShieldCheck size={18} className="text-violet-400" />
              Carbon Credit Readiness
            </div>
            <p className="mt-1 text-xs text-neutral-500">
              Key records needed for future validation and reporting.
            </p>

            <div className="mt-5 space-y-3">
              {readinessItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-neutral-500">{item.value}</div>
                      </div>
                    </div>
                    <CheckCircle2 size={16} className="text-green-400" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_0.72fr] gap-6 mb-6">
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <BarChart3 size={18} className="text-green-400" />
              <h2 className="text-sm font-semibold">Daily Waste Processed</h2>
            </div>
            <div className="h-64">
              {chartsReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 12 }} />
                    <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.03)" }}
                      contentStyle={{
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "13px",
                      }}
                    />
                    <Bar dataKey="waste" name="Waste kg" fill="#22c55e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full rounded-xl bg-white/[0.025]" />
              )}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <Flame size={18} className="text-sky-400" />
              <h2 className="text-sm font-semibold">Biogas Generation Trend</h2>
            </div>
            <div className="h-64">
              {chartsReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyTrend}>
                    <defs>
                      <linearGradient id="biogasGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 12 }} />
                    <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "#737373", fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "13px",
                      }}
                    />
                    <Area type="monotone" dataKey="biogas" name="Biogas m3" stroke="#38bdf8" strokeWidth={2.5} fill="url(#biogasGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full rounded-xl bg-white/[0.025]" />
              )}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <Droplets size={18} className="text-amber-400" />
              <h2 className="text-sm font-semibold">Output Breakdown</h2>
            </div>
            <div className="h-52">
              {chartsReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={outputBreakdown}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={54}
                      outerRadius={78}
                      paddingAngle={4}
                      stroke="none"
                    >
                      {outputBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "13px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full rounded-xl bg-white/[0.025]" />
              )}
            </div>
            <div className="mt-2 space-y-2">
              {outputBreakdown.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-neutral-400">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass rounded-2xl p-5 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck size={18} className="text-green-400" />
                Monitoring Log
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                Light operational alerts for website preview and pilot validation.
              </p>
            </div>
            <span className="w-fit rounded-full border border-white/[0.06] px-3 py-1 text-xs text-neutral-400">
              4 active confirmations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {alerts.map((alert) => (
              <div key={alert.title} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className={alert.tone} />
                  <div className="text-sm font-semibold">{alert.title}</div>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-500">{alert.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
