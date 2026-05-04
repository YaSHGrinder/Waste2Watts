"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import Section from "./Section";

const DISPOSAL_COST_PER_KG = 3.5;
const LPG_CYLINDER_COST = 900;
const LPG_COOKING_MINUTES = 160;
const FERTILIZER_PRICE_PER_KG = 5;
const CREDIT_PRICE_PER_TCO2 = 800;

function calculateWasteKg(students: number, mealsPerDay: number): number {
  return Math.round(students * mealsPerDay * 0.3);
}

const HOSTEL_PRESETS = [
  { label: "Small PG (50)", students: 50, meals: 2 },
  { label: "College Hostel (200)", students: 200, meals: 3 },
  { label: "Large Hostel (500)", students: 500, meals: 3 },
  { label: "PG Complex (800)", students: 800, meals: 3 },
];

export default function BeforeAfterCalculator() {
  const [students, setStudents] = useState(200);
  const [meals, setMeals] = useState(2);

  const wasteKg = useMemo(() => calculateWasteKg(students, meals), [students, meals]);

  const before = useMemo(() => {
    const monthlyWaste = wasteKg * 30;
    const disposalCost = Math.round(monthlyWaste * DISPOSAL_COST_PER_KG);
    const monthlyCookingMin = Math.round(students * meals * 0.3 * 30);
    const lpgCylinders = Math.round(monthlyCookingMin / LPG_COOKING_MINUTES);
    const lpgCost = lpgCylinders * LPG_CYLINDER_COST;
    const co2Methane = Math.round(monthlyWaste * 0.5 * 28);
    return {
      monthlyWaste,
      disposalCost,
      lpgCylinders,
      lpgCost,
      co2Methane,
      totalSpend: disposalCost + lpgCost,
    };
  }, [wasteKg, students, meals]);

  const after = useMemo(() => {
    const monthlyWaste = wasteKg * 30;
    const biogasM3 = monthlyWaste * 0.05;
    const cookingMinFromBiogas = Math.round(biogasM3 * 30);
    const lpgCylindersReplaced = Math.round(cookingMinFromBiogas / LPG_COOKING_MINUTES);
    const lpgSavings = lpgCylindersReplaced * LPG_CYLINDER_COST;
    const fertilizerKg = monthlyWaste * 0.25;
    const fertilizerValue = Math.round(fertilizerKg * FERTILIZER_PRICE_PER_KG);
    const co2Avoided = monthlyWaste * 0.001;
    const carbonRevenue = Math.round(co2Avoided * CREDIT_PRICE_PER_TCO2);
    const methanePrevented = Math.round(monthlyWaste * 0.5);
    return {
      monthlyWaste,
      biogasM3: Math.round(biogasM3 * 10) / 10,
      cookingMinFromBiogas,
      lpgCylindersReplaced,
      lpgSavings,
      fertilizerKg: Math.round(fertilizerKg),
      fertilizerValue,
      co2Avoided: Math.round(co2Avoided * 1000) / 1000,
      carbonRevenue,
      methanePrevented,
      totalEarned: lpgSavings + fertilizerValue + carbonRevenue,
    };
  }, [wasteKg]);

  const netSavings = before.totalSpend - after.totalEarned;
  const netIsPositive = netSavings >= 0;

  return (
    <Section className="section-standard" bgMesh>
      <div className="mb-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[2px] h-8 bg-sky-400" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-sky-400 font-[family-name:var(--font-syne)] font-medium">
              Savings Calculator
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[0.95] text-text-heading">
            Your Hostel's<br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Potential Savings
            </span>
          </h2>
          <p className="mt-6 text-text-body leading-relaxed">
            Enter student count and compare current waste costs against what Waste2Watts delivers.
          </p>
        </motion.div>
      </div>

      {/* Presets + Sliders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-12"
      >
        <div className="flex flex-wrap gap-2 mb-8">
          {HOSTEL_PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => { setStudents(p.students); setMeals(p.meals); }}
              className={`px-4 py-2 text-xs font-medium rounded-sm border transition-all ${
                students === p.students && meals === p.meals
                  ? "bg-sky-400/10 text-sky-400 border-sky-400/30"
                  : "border-white/[0.08] text-text-muted hover:text-white hover:border-white/20"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="bg-bg-surface border border-white/[0.06] rounded-sm p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-text-body font-medium">Students</span>
              <span className="font-mono-data text-xl text-white tabular-nums">{students.toLocaleString()}</span>
            </div>
            <input
              type="range" min={30} max={1000} step={10}
              value={students}
              onChange={(e) => setStudents(Number(e.target.value))}
              className="w-full h-[2px] bg-white/10 rounded-none appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between mt-2 text-[11px] text-text-subtle">
              <span>30</span><span>500</span><span>1,000</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-text-body font-medium">Meals / day</span>
              <span className="font-mono-data text-xl text-white tabular-nums">{meals} meals/day</span>
            </div>
            <input
              type="range" min={1} max={3} step={1}
              value={meals}
              onChange={(e) => setMeals(Number(e.target.value))}
              className="w-full h-[2px] bg-white/10 rounded-none appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between mt-2 text-[11px] text-text-subtle">
              <span>Breakfast</span><span>2 meals</span><span>Full board</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-sm text-text-muted">Est. daily waste:</span>
            <span className="font-mono-data text-lg text-amber-400 tabular-nums">~{wasteKg} kg/day</span>
          </div>
        </div>
      </motion.div>

      {/* Comparison - split layout, no cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-1"
      >
        {/* Before */}
        <div className="bg-bg-surface border border-red-500/10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-sm bg-red-500/10 flex items-center justify-center">
              <TrendingDown size={20} className="text-red-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-red-400">Current Situation</h3>
              <p className="text-[11px] text-text-subtle">Without Waste2Watts</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-text-muted mb-6 pb-6 border-b border-white/[0.06]">
            {["Food Waste", "→ Truck", "→ Landfill", "→ Methane"].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-red-400/80">{item}</span>
                {i < 3 && <ArrowRight size={10} className="text-white/10" />}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            {[
              { label: "Waste disposal", value: `₹${before.disposalCost.toLocaleString()}/mo` },
              { label: `LPG (${before.lpgCylinders} × ₹${LPG_CYLINDER_COST})`, value: `₹${before.lpgCost.toLocaleString()}/mo` },
              { label: "Methane CO₂e", value: `${before.co2Methane.toLocaleString()} kg/mo` },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-baseline">
                <span className="text-sm text-text-body">{item.label}</span>
                <span className="font-mono-data text-sm text-red-400 tabular-nums">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-red-500/20 flex justify-between items-center">
            <span className="text-sm text-text-body">Monthly waste spend</span>
            <span className="font-mono-data text-2xl text-red-400 tabular-nums">₹{before.totalSpend.toLocaleString()}</span>
          </div>
        </div>

        {/* After */}
        <div className="bg-bg-surface border border-green-500/10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-sm bg-green-500/10 flex items-center justify-center">
              <TrendingUp size={20} className="text-green-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-green-400">With Waste2Watts</h3>
              <p className="text-[11px] text-text-subtle">After switching</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-text-muted mb-6 pb-6 border-b border-white/[0.06]">
            {["Food Waste", "→ Biogas Plant", "→ Energy +", "→ Revenue"].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-green-400/80">{item}</span>
                {i < 3 && <ArrowRight size={10} className="text-white/10" />}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            {[
              { label: `Biogas (${after.biogasM3} m³)`, value: `₹${after.lpgSavings.toLocaleString()}/mo saved` },
              { label: "Cooking minutes", value: `~${after.cookingMinFromBiogas.toLocaleString()} min/mo` },
              { label: `Fertilizer (${after.fertilizerKg} kg)`, value: `₹${after.fertilizerValue.toLocaleString()}/mo` },
              { label: `Carbon credits (${after.co2Avoided} tCO₂)`, value: `₹${after.carbonRevenue.toLocaleString()}/mo` },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-baseline">
                <span className="text-sm text-text-body">{item.label}</span>
                <span className="font-mono-data text-sm text-green-400 tabular-nums">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-green-500/20 flex justify-between items-center">
            <span className="text-sm text-text-body">Monthly value</span>
            <span className="font-mono-data text-2xl text-green-400 tabular-nums">₹{after.totalEarned.toLocaleString()}</span>
          </div>
        </div>
      </motion.div>

      {/* Net savings banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-1 bg-bg-surface border border-green-500/10 p-6 sm:p-8"
      >
        <div className="text-center">
          <p className="text-sm text-text-muted mb-3">Net difference</p>
          <div className="font-mono-data text-3xl sm:text-4xl font-bold mb-4 text-green-400 tabular-nums">
            {netIsPositive
              ? `₹${netSavings.toLocaleString()}/mo savings`
              : `₹${Math.abs(netSavings).toLocaleString()}/mo — methane eliminated`}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.03]">
            {[
              { value: `${Math.round((after.lpgSavings / (before.lpgCost || 1)) * 100)}%`, label: "LPG cost reduction" },
              { value: `₹${before.totalSpend.toLocaleString()}`, label: "Currently wasted/mo" },
              { value: `${after.methanePrevented.toLocaleString()} kg`, label: "CO₂ prevented/mo" },
            ].map((stat) => (
              <div key={stat.label} className="bg-bg-surface px-4 py-4">
                <div className="font-mono-data text-lg font-semibold text-green-400 tabular-nums">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 text-base font-semibold text-black bg-green-400 rounded-sm hover:bg-green-300 transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] active:scale-[0.98] font-[family-name:var(--font-syne)]"
          >
            Get a Free Waste Audit
            <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
