import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Leaf,
  Zap,
  Recycle,
  BarChart3,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Waste2Watts",
  description:
    "Transforming India's food waste into clean energy, organic fertilizer, and verified carbon credits.",
};

const roadmapSteps = [
  {
    step: "01",
    title: "Phase 1 — Pilot",
    description:
      "A single 1 TPD anaerobic digestion plant serving 4 hostels in Solan, HP. Validate waste collection workflows, digestion efficiency (~92%), biogas and fertilizer yields, and the real-time impact tracking dashboard. Target: process 300 kg/day by Q2 2026. Budget: ₹8–12L capex per plant.",
    icon: <Lightbulb size={24} />,
  },
  {
    step: "02",
    title: "Phase 2 — Cluster Expansion",
    description:
      "3 × 5 TPD plants forming clusters across institutional hotspots in Noida, Gurugram, and Chandigarh. Each cluster serves 5–10 hostels within a 10 km radius. Target: 15 hostels, 15 TPD, ₹12–18L monthly revenue.",
    icon: <MapPin size={24} />,
  },
  {
    step: "03",
    title: "Phase 3 — Scale Beyond Hostels",
    description:
      "Expand sourcing into grocery retail chains, banquet halls, hotels, and institutional cafeterias. 10+ plant clusters across 3 states. Target: 50+ TPD, ₹50L+/mo carbon revenue from Gold Standard / VERRA certified credits.",
    icon: <BarChart3 size={24} />,
  },
  {
    step: "04",
    title: "Phase 4 — National Network",
    description:
      "A nationwide network of decentralized waste-to-energy clusters. 100+ partners across 6+ states. Standardized modular plant design enabling rapid deployment in any city. Carbon credits trading at scale.",
    icon: <Zap size={24} />,
  },
];

const whyItems = [
  { icon: <Leaf size={18} />, text: "Tackles India's growing food waste crisis" },
  { icon: <Zap size={18} />, text: "Produces clean, renewable energy" },
  { icon: <Recycle size={18} />, text: "Generates eco-friendly organic fertilizer" },
  { icon: <BarChart3 size={18} />, text: "Creates measurable carbon credit value" },
  { icon: <Users size={18} />, text: "Enables real-time impact tracking through a digital platform" },
];

export default function AboutPage() {
  return (
    <div className="relative pt-24 pb-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
              About Waste2Watts
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.95] text-text font-display">
              Building India&apos;s Waste{" "}
              <span className="gradient-text">Infrastructure</span>
            </h1>
            <p className="mt-6 text-text-dim text-lg leading-relaxed">
              Waste2Watts is a climate-tech startup founded in 2026 with a bold
              vision — to transform India&apos;s massive food waste problem into a
              powerful opportunity for clean energy, sustainable agriculture,
              and carbon reduction.
            </p>
            <p className="mt-4 text-text-dim text-lg leading-relaxed">
              We convert hostel and institutional food waste into{" "}
              <span className="text-text font-medium">biogas (clean energy)</span>,{" "}
              <span className="text-text font-medium">organic fertilizer</span>, and{" "}
              <span className="text-text font-medium">verified carbon credits</span>{" "}
              through decentralized anaerobic digestion systems.
            </p>
            <p className="mt-4 text-text-dim text-lg leading-relaxed">
              India generates millions of tons of food waste every year, much of
              which ends up in landfills, emitting methane and contributing to
              climate change. Waste2Watts addresses this gap by building a{" "}
              <span className="text-text font-medium">
                structured, tech-enabled waste-to-energy ecosystem
              </span>
              , where institutions can track their waste contribution, monitor
              output generation, and visualize their environmental impact in real
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="surface-elevated rounded-2xl p-8 lg:p-10">
              <h3 className="text-lg font-bold mb-3 text-text font-display">Our Mission</h3>
              <p className="text-text-dim leading-relaxed">
                To convert food waste into valuable resources while enabling
                institutions to actively participate in building a cleaner,
                greener future.
              </p>
            </div>
            <div className="surface-elevated rounded-2xl p-8 lg:p-10">
              <h3 className="text-lg font-bold mb-3 text-text font-display">Our Vision</h3>
              <p className="text-text-dim leading-relaxed">
                To build India&apos;s largest decentralized food waste-to-energy
                network, reducing landfill dependency and accelerating the
                transition toward a circular economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
            Roadmap to Scale
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-text font-display">
            From Pilot to Nationwide Scale
          </h2>
          <p className="mt-4 text-text-dim max-w-2xl text-base">
            What begins as a single pilot plant will evolve into a nationwide
            ecosystem of decentralized waste-to-energy clusters.
          </p>

          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

            <div className="space-y-10">
              {roadmapSteps.map((r, i) => (
                <div
                  key={r.step}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,230,118,0.3)] -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="surface-elevated rounded-2xl p-6 lg:p-8 group hover:bg-card-hover transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] tracking-[0.15em] uppercase text-primary font-bold font-display">
                          Step {r.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-text font-display">{r.title}</h3>
                      <p className="text-text-dim leading-relaxed text-sm">
                        {r.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-text font-display">
            Meet the Team
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <div className="surface-elevated rounded-2xl p-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center text-xl font-bold text-bg mb-5 font-display">
                YP
              </div>
              <h3 className="text-lg font-bold text-text font-display">Yash Panchal</h3>
              <span className="text-sm text-primary font-medium">
                CEO & Founder
              </span>
              <p className="text-text-dim text-sm leading-relaxed mt-4">
                Building infrastructure to solve India&apos;s food waste crisis.
                Currently leading pilot deployment in Solan, HP — focused on
                validating plant economics, operational workflows, and the impact
                tracking platform. Goal: prove the unit economics at pilot scale,
                then replicate across India&apos;s 50,000+ hostels and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Waste2Watts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="surface-elevated rounded-2xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-6 text-text font-display">Why Waste2Watts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyItems.map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-text-dim"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary flex-shrink-0">
                    {w.icon}
                  </div>
                  {w.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="surface-elevated rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-text font-display">The Future</h2>
            <p className="text-text-dim leading-relaxed">
              What begins today as a single 1 TPD pilot plant will evolve into a{" "}
              <span className="text-text font-medium">
                nationwide ecosystem of decentralized waste-to-energy clusters
              </span>
              .
            </p>
            <p className="text-text-dim leading-relaxed mt-4">
              Waste2Watts is not just managing waste — it is redefining how
              India converts waste into value, building a future that is{" "}
              <span className="text-text font-medium">
                sustainable, scalable, and energy-efficient
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-bg bg-primary rounded-xl hover:bg-primary-dim transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,230,118,0.25)] active:scale-[0.97]"
          >
            Partner With Us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
