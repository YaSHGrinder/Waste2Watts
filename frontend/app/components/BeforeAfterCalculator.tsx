"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

/*
 * Pricing assumptions (all per kg waste unless noted):
 * - Landfill disposal cost: ₹3.5/kg (collection + transport)
 * - LPG cylinder: ₹900, provides ~160 cooking min
 * - Biogas: 0.05 m³/kg waste → ~30 min cooking per m³
 * - Fertilizer: 0.25 kg/kg waste @ ₹5/kg
 * - Carbon credits: 0.001 tCO₂/kg @ ₹800/t
 */

const DISPOSAL_COST_PER_KG = 3.5;
const LPG_CYLINDER_COST = 900;
const LPG_COOKING_MINUTES = 160;
const FERTILIZER_PRICE_PER_KG = 5;
const CREDIT_PRICE_PER_TCO2 = 800;

function calculateWasteKg(students: number, mealsPerDay: number): number {
  // ~0.3 kg waste per meal per student
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

  const wasteKg = useMemo(
    () => calculateWasteKg(students, meals),
    [students, meals]
  );

  // ===== BEFORE (current scenario) =====
  const before = useMemo(() => {
    const monthlyWaste = wasteKg * 30;
    const disposalCost = Math.round(monthlyWaste * DISPOSAL_COST_PER_KG);
    // Average LPG cooking need: ~0.3 min per meal per student
    const monthlyCookingMin = Math.round(students * meals * 0.3 * 30);
    const lpgCylinders = Math.round(monthlyCookingMin / LPG_COOKING_MINUTES);
    const lpgCost = lpgCylinders * LPG_CYLINDER_COST;
    const co2Methane = Math.round(monthlyWaste * 0.5 * 28); // 0.5 kg CO₂e/kg→methane equiv (IPCC AR5 GWP)
    return {
      monthlyWaste,
      disposalCost,
      lpgCylinders,
      lpgCost,
      co2Methane,
      totalSpend: disposalCost + lpgCost,
    };
  }, [wasteKg, students, meals]);

  // ===== AFTER (Waste2Watts scenario) =====
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
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-sky-400 font-semibold">
            Savings Calculator
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            See What Your Hostel{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Could Save
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Enter your student count and compare your current waste costs
            against what Waste2Watts delivers.
          </p>
        </motion.div>

        {/* Input Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-10"
        >
          {/* Quick presets */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {HOSTEL_PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  setStudents(p.students);
                  setMeals(p.meals);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-full border transition-all ${
                  students === p.students && meals === p.meals
                    ? "bg-sky-500/20 text-sky-400 border-sky-500/30"
                    : "border-white/[0.08] text-neutral-500 hover:text-white hover:border-white/20"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Students slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-neutral-400 font-medium">
                  Number of Students
                </label>
                <span className="text-xl font-bold gradient-text">
                  {students.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={1000}
                step={10}
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between mt-1.5 text-xs text-neutral-700">
                <span>30</span>
                <span>500</span>
                <span>1,000</span>
              </div>
            </div>

            {/* Meals slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-neutral-400 font-medium">
                  Meals per day
                </label>
                <span className="text-xl font-bold gradient-text">
                  {meals} meals/day
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={3}
                step={1}
                value={meals}
                onChange={(e) => setMeals(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between mt-1.5 text-xs text-neutral-700">
                <span>Breakfast only</span>
                <span>2 meals</span>
                <span>Full board</span>
              </div>
            </div>

            {/* Derived metric */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-sm text-neutral-500">
                Est. daily waste:
              </span>
              <span className="text-lg font-bold text-amber-400">
                ~{wasteKg} kg/day
              </span>
            </div>
          </div>
        </motion.div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto mb-8">
          {/* LEFT: Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 lg:p-8 border-red-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <TrendingDown size={20} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400">
                  Current Situation
                </h3>
                <p className="text-xs text-neutral-600">
                  Without Waste2Watts
                </p>
              </div>
            </div>

            {/* Flow */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500 mb-6 pb-6 border-b border-white/[0.06]">
              <span className="text-orange-400 font-medium">Food Waste</span>
              <ArrowRight size={12} className="text-neutral-700" />
              <span className="text-red-400 font-medium">Collection Truck</span>
              <ArrowRight size={12} className="text-neutral-700" />
              <span className="text-slate-400 font-medium">Landfill</span>
              <ArrowRight size={12} className="text-neutral-700" />
              <span className="text-red-400 font-medium">Methane</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Waste disposal (collection + transport)
                </span>
                <span className="text-sm font-semibold text-red-400">
                  ₹{before.disposalCost.toLocaleString()}/mo
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  LPG cylinders ({before.lpgCylinders} × ₹{LPG_CYLINDER_COST})
                </span>
                <span className="text-sm font-semibold text-red-400">
                  ₹{before.lpgCost.toLocaleString()}/mo
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Methane emitted (CO₂ equivalent)
                </span>
                <span className="text-sm font-semibold text-slate-400">
                  {before.co2Methane.toLocaleString()} kg/mo
                </span>
              </div>
            </div>

            {/* Wasted money callout */}
            <div className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10 flex items-start gap-2">
              <AlertCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-red-400/80 leading-relaxed">
                ₹{before.totalSpend.toLocaleString()}/mo spent with zero return —
                food waste goes to landfill, emits methane, and creates no value.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-red-500/20 flex justify-between items-center">
              <span className="text-sm font-medium text-neutral-300">
                Total monthly waste spend
              </span>
              <span className="text-2xl font-bold text-red-400">
                ₹{before.totalSpend.toLocaleString()}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 lg:p-8 border-green-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">
                  With Waste2Watts
                </h3>
                <p className="text-xs text-neutral-600">
                  After switching to our system
                </p>
              </div>
            </div>

            {/* Flow */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500 mb-6 pb-6 border-b border-white/[0.06]">
              <span className="text-orange-400 font-medium">Food Waste</span>
              <ArrowRight size={12} className="text-neutral-700" />
              <span className="text-sky-400 font-medium">Biogas Plant</span>
              <ArrowRight size={12} className="text-neutral-700" />
              <span className="text-green-400 font-medium">Energy +</span>
              <ArrowRight size={12} className="text-neutral-700" />
              <span className="text-violet-400 font-medium">Revenue</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Biogas generated ({after.biogasM3} m³)
                </span>
                <span className="text-sm font-semibold text-green-400">
                  ₹{after.lpgSavings.toLocaleString()}/mo saved
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Cooking minutes from biogas
                </span>
                <span className="text-sm font-semibold text-sky-400">
                  ~{after.cookingMinFromBiogas.toLocaleString()} min/mo
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Fertilizer ({after.fertilizerKg} kg)
                </span>
                <span className="text-sm font-semibold text-amber-400">
                  ₹{after.fertilizerValue.toLocaleString()}/mo value
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Carbon credits ({after.co2Avoided} tCO₂)
                </span>
                <span className="text-sm font-semibold text-violet-400">
                  ₹{after.carbonRevenue.toLocaleString()}/mo revenue
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">
                  Methane prevented
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  {after.methanePrevented.toLocaleString()} kg CO₂/mo
                </span>
              </div>
            </div>

            {/* Value proposition callout */}
            <div className="mt-4 p-3 rounded-lg bg-green-500/5 border border-green-500/10 flex items-start gap-2">
              <AlertCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-green-400/80 leading-relaxed">
                Your waste becomes energy — cutting LPG costs by{" "}
                <span className="font-semibold text-green-400">~{Math.round((after.lpgSavings / (before.lpgCost || 1)) * 100)}%</span>,
                creating fertilizer, and generating carbon credits. Every rupee works twice.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-green-500/20 flex justify-between items-center">
              <span className="text-sm font-medium text-neutral-300">
                Total monthly value
              </span>
              <span className="text-2xl font-bold text-green-400">
                ₹{after.totalEarned.toLocaleString()}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Net savings banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto border border-green-500/20 rounded-2xl p-6 lg:p-8 text-center bg-green-500/[0.04]"
        >
          <p className="text-sm text-neutral-500 mb-3">
            Net difference for your hostel
          </p>
          <div className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">
              {netIsPositive
                ? `₹${netSavings.toLocaleString()}/mo savings`
                : `₹${Math.abs(netSavings).toLocaleString()}/mo — but methane eliminated`}
            </span>
          </div>

          {/* Value breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="bg-white/[0.03] rounded-lg p-4">
              <div className="text-lg font-bold text-green-400">
                ~{Math.round((after.lpgSavings / (before.lpgCost || 1)) * 100)}%
              </div>
              <div className="text-[11px] text-neutral-600 uppercase tracking-wider mt-0.5">
                LPG cost reduction
              </div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <div className="text-lg font-bold text-red-400">
                ₹{before.totalSpend.toLocaleString()}
              </div>
              <div className="text-[11px] text-neutral-600 uppercase tracking-wider mt-0.5">
                Currently wasted/mo
              </div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <div className="text-lg font-bold text-emerald-400">
                {after.methanePrevented.toLocaleString()} kg
              </div>
              <div className="text-[11px] text-neutral-600 uppercase tracking-wider mt-0.5">
                CO₂ prevented/mo
              </div>
            </div>
          </div>

          {netIsPositive ? (
            <p className="text-sm text-neutral-500 leading-relaxed">
              That&apos;s ₹{(netSavings * 12).toLocaleString()}/year you&apos;re
              currently losing by sending waste to landfill — money that could
              stay in your hostel&apos;s budget.
            </p>
          ) : (
            <p className="text-sm text-neutral-500 leading-relaxed">
              Even if the net economics are still scaling up, switching to
              Waste2Watts means zero food waste in landfills, no methane
              emissions, and your LPG costs cut by{" "}
              <span className="text-green-400 font-semibold">
                ~{Math.round((after.lpgSavings / (before.lpgCost || 1)) * 100)}%
              </span>
              . Your waste stops being a cost and starts creating value — for
              your kitchen, your community, and the environment.
            </p>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-full hover:from-green-300 hover:to-green-400 transition-all hover:shadow-lg hover:shadow-green-500/25"
          >
            Get a Free Waste Audit
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
