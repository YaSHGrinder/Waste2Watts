"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Hotel, UtensilsCrossed, Factory, TreePine } from "lucide-react";
import Section from "./Section";

const useCases = [
  {
    icon: GraduationCap,
    title: "College Hostels",
    stats: "50–200 kg/day",
    description:
      "Daily mess waste converted into biogas for campus kitchens. Students see their waste become energy.",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Building2,
    title: "PG & Co-living",
    stats: "20–80 kg/day",
    description:
      "Compact digesters for shared living spaces. Reduce waste costs while generating community energy.",
    color: "text-success",
    bg: "bg-success/8",
  },
  {
    icon: UtensilsCrossed,
    title: "Corporate Cafeterias",
    stats: "100–500 kg/day",
    description:
      "Enterprise-scale waste processing with automated ESG reporting. Perfect for CSR mandates.",
    color: "text-warning",
    bg: "bg-warning/8",
  },
  {
    icon: Hotel,
    title: "Hotels & Banquets",
    stats: "200–1000 kg/day",
    description:
      "Turn event and kitchen waste into hotel energy. Guests love the sustainability story.",
    color: "text-accent",
    bg: "bg-accent/8",
  },
  {
    icon: Factory,
    title: "Industrial Canteens",
    stats: "100–300 kg/day",
    description:
      "Factory floor waste processed on-site. Measurable ESG impact for manufacturing units.",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: TreePine,
    title: "Municipal Communities",
    stats: "500+ kg/day",
    description:
      "Decentralized waste processing for neighborhoods. Community-owned clean energy infrastructure.",
    color: "text-success",
    bg: "bg-success/8",
  },
];

export default function UseCases() {
  return (
    <Section id="use-cases" className="section-standard mesh-violet">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[18px] h-[2px] bg-primary" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
              Use Cases
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[0.95] text-text">
            Every Waste Stream
            <br />
            <span className="gradient-text">Is an Opportunity.</span>
          </h2>
          <p className="mt-5 text-text-dim leading-relaxed">
            From hostels to hotels, our platform scales to any institution
            generating organic waste.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {useCases.map((uc, i) => {
          const Icon = uc.icon;
          return (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="surface-card rounded-2xl p-6 sm:p-7 hover:bg-card-hover hover:border-border-hover transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-10 h-10 rounded-xl ${uc.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={18} className={uc.color} />
                </div>
                <span className="text-[10px] font-semibold text-text-muted bg-white/[0.04] px-2.5 py-1 rounded-full">
                  {uc.stats}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold text-text mb-2">
                {uc.title}
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {uc.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
