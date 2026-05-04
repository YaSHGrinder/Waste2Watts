"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "./Section";

export default function AboutSection() {
  return (
    <Section className="section-tall" bgMesh>
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[2px] h-8 bg-green-400" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-green-400 font-[family-name:var(--font-syne)] font-medium">
              About Us
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[0.95] text-text-heading">
            Turning Food Waste Into{" "}
            <span className="gradient-text">Clean Energy</span>
          </h2>
          <p className="mt-8 text-text-body text-lg leading-relaxed max-w-2xl">
            Waste2Watts is a climate-tech startup launched in 2026 with a bold
            vision — to transform India's massive food waste problem into a
            powerful opportunity for clean energy, sustainable agriculture,
            and carbon reduction.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-green-400 hover:text-green-300 transition-colors font-[family-name:var(--font-syne)]"
          >
            Read our full story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
