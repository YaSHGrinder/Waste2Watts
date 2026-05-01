"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Turning Food Waste Into{" "}
            <span className="gradient-text">Clean Energy</span>
          </h2>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            Waste2Watts is a climate-tech startup founded in 2026 with a bold
            vision — to transform India&apos;s massive food waste problem into a
            powerful opportunity for clean energy, sustainable agriculture,
            and carbon reduction.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
          >
            Read our full story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
