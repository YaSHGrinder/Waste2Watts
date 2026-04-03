import type { Metadata } from "next";
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
    title: "Pilot — 2 TPD Plant",
    description:
      "We begin with a 2 tons per day pilot plant, focused on nearby hostels. This phase serves as a real-world validation of our model — testing waste collection systems, digestion efficiency, output conversion, and digital tracking.",
    icon: <Lightbulb size={24} />,
  },
  {
    step: "02",
    title: "Cluster Expansion — 5 TPD Plants",
    description:
      "We scale by building multiple 5 TPD plants, forming localized clusters serving 5–10 institutional hostels each, ensuring efficient logistics and operations.",
    icon: <MapPin size={24} />,
  },
  {
    step: "03",
    title: "Nationwide Network",
    description:
      "We expand into a nationwide network of decentralized plants, creating a connected ecosystem for large-scale food waste management.",
    icon: <BarChart3 size={24} />,
  },
  {
    step: "04",
    title: "Carbon Credits & Supply Chain",
    description:
      "We target unused food across the supply chain and enter large-scale carbon credit agreements, strengthening our position in the food waste management market.",
    icon: <Zap size={24} />,
  },
];

const why = [
  { icon: <Leaf size={20} />, text: "Tackles India's growing food waste crisis" },
  { icon: <Zap size={20} />, text: "Produces clean, renewable energy" },
  { icon: <Recycle size={20} />, text: "Generates eco-friendly organic fertilizer" },
  { icon: <BarChart3 size={20} />, text: "Creates measurable carbon credit value" },
  { icon: <Users size={20} />, text: "Enables real-time impact tracking through a digital platform" },
];

export default function AboutPage() {
  return (
    <div className="relative pt-24 pb-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
              About Waste2Watts
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Turning Food Waste Into{" "}
              <span className="gradient-text">Clean Energy</span>
            </h1>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Waste2Watts is a climate-tech startup founded in 2026 with a bold
              vision — to transform India's massive food waste problem into a
              powerful opportunity for clean energy, sustainable agriculture,
              and carbon reduction.
            </p>
            <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
              We convert hostel and institutional food waste into{" "}
              <span className="text-white font-medium">biogas (clean energy)</span>
              ,{" "}
              <span className="text-white font-medium">organic fertilizer</span>,
              and{" "}
              <span className="text-white font-medium">
                verified carbon credits
              </span>{" "}
              through decentralized anaerobic digestion systems. Our approach
              combines sustainability with scalability, creating a model that is
              both environmentally impactful and economically viable.
            </p>
            <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
              India generates millions of tons of food waste every year, much of
              which ends up in landfills, emitting methane and contributing to
              climate change. Waste2Watts addresses this gap by building a{" "}
              <span className="text-white font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-400 leading-relaxed">
                To convert food waste into valuable resources while enabling
                institutions to actively participate in building a cleaner,
                greener future.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-400 leading-relaxed">
                To build India's largest decentralized food waste-to-energy
                network, reducing landfill dependency and accelerating the
                transition toward a circular economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            Roadmap to Scale
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            From Pilot to Nationwide Scale
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-lg">
            What begins as a single pilot plant will evolve into a nationwide
            ecosystem of decentralized waste-to-energy clusters.
          </p>

          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/40 via-green-500/20 to-transparent" />

            <div className="space-y-12">
              {roadmapSteps.map((r, i) => (
                <div
                  key={r.step}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-500/30 -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass rounded-2xl p-6 lg:p-8 group hover:bg-white/[0.04] transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs tracking-[0.15em] uppercase text-green-400 font-bold">
                          Step {r.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                      <p className="text-neutral-400 leading-relaxed text-sm">
                        {r.description}
                      </p>
                    </div>
                  </div>
                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Meet the Team
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="glass rounded-2xl p-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xl font-bold text-black mb-5">
                YP
              </div>
              <h3 className="text-lg font-bold">Yash Panchal</h3>
              <span className="text-sm text-green-400 font-medium">
                CEO & Founder
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                Based in Narela, Delhi, Yash is the visionary behind Waste2Watts.
                Currently pursuing B.Tech in Computer Science with a
                specialization in Artificial Intelligence, he focuses on building
                scalable, technology-driven solutions for real-world
                environmental challenges. His goal is to create a nationwide
                impact by integrating clean energy systems with intelligent
                tracking platforms.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xl font-bold text-black mb-5">
                AD
              </div>
              <h3 className="text-lg font-bold">Aditya Dixit</h3>
              <span className="text-sm text-green-400 font-medium">
                Co-Founder
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                Based in Gwalior, Aditya plays a key role in shaping the
                strategic and operational direction of Waste2Watts. He
                contributes to business development, partnerships, and scaling
                strategies, ensuring the company evolves into a large-scale,
                impactful venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Waste2Watts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-6">Why Waste2Watts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {why.map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-neutral-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 lg:p-12 gradient-border text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Future</h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              What begins today as a single 2 TPD pilot plant will evolve into a{" "}
              <span className="text-white font-medium">
                nationwide ecosystem of decentralized waste-to-energy clusters
              </span>
              .
            </p>
            <p className="text-neutral-400 leading-relaxed mt-4 text-lg">
              Waste2Watts is not just managing waste — it is redefining how
              India converts waste into value, building a future that is{" "}
              <span className="text-white font-medium">
                sustainable, scalable, and energy-efficient
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all"
          >
            Partner With Us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
