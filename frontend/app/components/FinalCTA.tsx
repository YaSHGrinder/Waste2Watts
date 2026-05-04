"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="section-tall relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 glow-primary-sm"
          >
            <Zap size={28} className="text-primary" strokeWidth={1.5} />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold tracking-[-0.04em] leading-[0.95] text-text">
            Stop Paying to
            <br />
            <span className="gradient-text">Throw Away Food.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-text-dim max-w-xl mx-auto leading-relaxed">
            We collect your mess waste at zero cost. You get biogas,
            fertilizer, and real-time impact tracking — all for free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-[14px] font-semibold text-bg bg-primary rounded-xl hover:bg-primary-dim transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,230,118,0.3)] active:scale-[0.97]"
            >
              Start Generating Value
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 text-[14px] font-medium text-text-dim border border-border rounded-xl hover:border-border-hover hover:text-text transition-all duration-200 active:scale-[0.97]"
            >
              Learn More
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { value: "4+", label: "Partners" },
              { value: "1,200+", label: "kg Processed" },
              { value: "48 m³", label: "Biogas" },
              { value: "12 t", label: "CO₂ Avoided" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-lg font-bold text-text">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
