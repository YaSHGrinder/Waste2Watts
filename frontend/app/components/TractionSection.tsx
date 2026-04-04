"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle, FlaskConical, Network, Building2, Globe2, Award, Leaf } from "lucide-react";

const phases = [
  {
    title: "Phase 1 — Pilot",
    subtitle: "Validate the model",
    status: "active",
    date: "Q2 2026",
    icon: <FlaskConical size={20} />,
    description:
      "A single 2 TPD anaerobic digestion plant serving 4 hostels in Solan, HP. Validate waste collection workflows, digestion efficiency (~92%), biogas and fertilizer yields, and the real-time impact tracking dashboard. Everything we learn here becomes the playbook.",
    metrics: [
      { label: "Capacity", value: "2 TPD" },
      { label: "Partners", value: "4 hostels" },
      { label: "Daily Target", value: "600 kg/day" },
      { label: "Capex", value: "₹8–12L" },
    ],
    milestones: [
      "Feasibility study & technology assessment",
      "Impact tracking dashboard built",
      "Pilot plant deployment — Solan, HP",
      "First 3–4 hostel partnerships onboarded",
    ],
  },
  {
    title: "Phase 2 — Cluster Expansion",
    subtitle: "Replicate in institutional hubs",
    status: "planned",
    date: "Q3–Q4 2026",
    icon: <Network size={20} />,
    description:
      "3 × 5 TPD plants forming clusters across institutional hotspots in Noida, Gurugram, and Chandigarh. Centralized collection, decentralized processing. Each cluster serves 5–10 hostels within a 10 km radius, reducing logistics costs and creating economies of scale.",
    metrics: [
      { label: "Capacity", value: "15 TPD" },
      { label: "Plants", value: "3 × 5 TPD" },
      { label: "Partners", value: "15 hostels" },
      { label: "Revenue", value: "₹12–18L/mo" },
    ],
    milestones: [
      "Carbon credit certification process initiated",
      "Noida & Gurugram cluster plants deployed",
      "15+ hostels actively processing waste",
      "Standardized 5 TPD plant blueprint finalized",
    ],
  },
  {
    title: "Phase 3 — Scale Beyond Hostels",
    subtitle: "Grocery chains, banquet halls, hotels",
    status: "planned",
    date: "2027",
    icon: <Building2 size={20} />,
    description:
      "Expand the sourcing network beyond hostels into large food waste producers — grocery retail chains, banquet halls, hotels, and institutional cafeterias. Larger volume inputs, higher efficiency, diversified revenue streams across multiple customer segments.",
    metrics: [
      { label: "Capacity", value: "50+ TPD" },
      { label: "States", value: "3" },
      { label: "Plant Clusters", value: "10+" },
      { label: "Carbon Rev.", value: "₹50L+/mo" },
    ],
    milestones: [
      "Gold Standard / VERRA carbon certification",
      "10+ plant clusters across 3 states",
      "50+ institutional partners onboarded",
      "Grocery & hotel partnership vertical launched",
    ],
  },
  {
    title: "Phase 4 — National Network",
    subtitle: "Infrastructure at scale",
    status: "future",
    date: "2028–2029",
    icon: <Globe2 size={20} />,
    description:
      "A nationwide network of decentralized waste-to-energy clusters. 100+ hostels, hotels, and banquet halls across 6+ states. Standardized modular plant design enabling rapid deployment in any city. Carbon credits trading at scale on India's Carbon Credit Trading Scheme and international voluntary markets.",
    metrics: [
      { label: "Capacity", value: "200+ TPD" },
      { label: "States", value: "6+" },
      { label: "Partners", value: "100+" },
      { label: "Credits", value: "₹2Cr+/mo" },
    ],
    milestones: [
      "Pan-India partner onboarding pipeline",
      "Automated plant monitoring & maintenance",
      "International carbon credit market entry",
      "Series A funding for national expansion",
    ],
  },
];

const statusColors: Record<string, string> = {
  active: "bg-green-400",
  planned: "bg-amber-400",
  future: "bg-neutral-600",
};

function TractionProgressTrack() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-semibold">
            Progress
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Where We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Stand
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Building real infrastructure, not just an idea. From pilot to
            nationwide network — here is our expansion plan.
          </p>
        </motion.div>

        {/* Timeline connector */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/40 via-blue-500/20 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Phase number dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 mt-6">
                  <div className="w-5 h-5 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${statusColors[phase.status]}`} />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-1/2 md:pl-0" : "md:pl-12 md:ml-auto md:w-1/2"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 lg:p-8 hover:bg-white/[0.03] transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                          {phase.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{phase.title}</h3>
                          <p className="text-xs text-neutral-600">{phase.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-600 whitespace-nowrap">
                        {phase.date}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                      {phase.description}
                    </p>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                      {phase.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-white/[0.03] rounded-lg p-3 text-center"
                        >
                          <div className="text-sm font-bold text-amber-400">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-neutral-600 uppercase tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Milestones */}
                    <div className="space-y-2">
                      {phase.milestones.map((milestone) => (
                        <div key={milestone} className="flex items-start gap-2">
                          {phase.status === "active" ? (
                            <CheckCircle size={13} className="text-green-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle size={13} className="text-neutral-700 mt-0.5 flex-shrink-0" />
                          )}
                          <span className="text-xs text-neutral-400">
                            {milestone}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Leaf size={16} />, end: "500+ TPD", label: "Total capacity target", color: "text-green-400" },
            { icon: <Building2 size={16} />, end: "100+", label: "Institutional partners", color: "text-blue-400" },
            { icon: <Network size={16} />, end: "6+ states", label: "Geographic footprint", color: "text-amber-400" },
            { icon: <Award size={16} />, end: "₹2Cr+/mo", label: "Carbon credit revenue", color: "text-violet-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-5 text-center"
            >
              <div className={`flex justify-center mb-2 ${stat.color}`}>{stat.icon}</div>
              <div className="text-lg font-bold">{stat.end}</div>
              <div className="text-xs text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TractionProgressTrack;
