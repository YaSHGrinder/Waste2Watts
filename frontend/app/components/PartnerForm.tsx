"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Send, CheckCircle } from "lucide-react";
import Section from "./Section";
import Button from "./ui/Button";

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    orgName: "",
    orgType: "hostel",
    wastePerDay: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="section-standard" bgMesh>
      <div className="max-w-5xl mx-auto">
        {/* Header - asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[2px] h-8 bg-green-400" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-green-400 font-[family-name:var(--font-syne)] font-medium">
              Get Started
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[0.95] text-text-heading">
            Stop Paying to{" "}
            <span className="gradient-text">Throw Away Food</span>
          </h2>
          <p className="mt-6 text-text-body leading-relaxed">
            We collect your mess waste at zero cost. You get biogas,
            fertilizer, and real-time impact tracking — all for free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Info - no glass, flat surface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-bg-surface border border-white/[0.06] rounded-sm p-6">
              <div className="w-10 h-10 rounded-sm bg-green-400/10 flex items-center justify-center text-green-400 mb-4">
                <Building2 size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-heading mb-4">
                Benefits of Partnering
              </h3>
              <ul className="space-y-3 text-sm text-text-body">
                {[
                  "Reduce waste disposal costs by 60–80%",
                  "Generate ~7 m³ biogas/day (replaces 3–4 LPG cylinders)",
                  "Organic fertilizer for campus grounds",
                  "Earn ₹4,000–8,000/month from carbon credit revenue",
                  "Real-time impact dashboard access",
                  "Automated ESG reports for NAAC/NIRF compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-surface border border-white/[0.06] rounded-sm p-6">
              <h4 className="font-display text-sm font-semibold text-text-heading mb-3">Who should partner?</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "College Hostels (50–200 kg/day)",
                  "PG Accommodations (20–80 kg/day)",
                  "Corporate Cafeterias (100–500 kg/day)",
                  "Hotels & Banquet Halls (200–1000 kg/day)",
                  "Institutional Canteens (30–150 kg/day)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-medium rounded-sm border border-white/[0.08] text-text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form - flat, no glass */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-bg-surface border border-white/[0.06] rounded-sm p-10 text-center">
                <div className="w-16 h-16 rounded-sm bg-green-400/10 flex items-center justify-center text-green-400 mx-auto mb-4">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-heading mb-2">
                  Application Received!
                </h3>
                <p className="text-text-body text-sm">
                  Our team will reach out within 48 hours to discuss your
                  waste management needs.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-bg-surface border border-white/[0.06] rounded-sm p-6 space-y-4"
              >
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">Your Name</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-3 rounded-sm bg-bg-deep border border-white/[0.08] text-sm text-white placeholder:text-text-subtle focus:outline-none focus:border-green-400/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@institution.edu.in"
                    onChange={handleChange}
                    value={form.email}
                    className="w-full px-4 py-3 rounded-sm bg-bg-deep border border-white/[0.08] text-sm text-white placeholder:text-text-subtle focus:outline-none focus:border-green-400/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">Organization Name</label>
                  <input
                    name="orgName"
                    required
                    type="text"
                    placeholder="Greenwood Hostel"
                    onChange={handleChange}
                    value={form.orgName}
                    className="w-full px-4 py-3 rounded-sm bg-bg-deep border border-white/[0.08] text-sm text-white placeholder:text-text-subtle focus:outline-none focus:border-green-400/40 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">Type</label>
                    <select
                      name="orgType"
                      value={form.orgType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm bg-bg-deep border border-white/[0.08] text-sm text-white focus:outline-none focus:border-green-400/40 transition-all appearance-none"
                    >
                      <option value="hostel" className="bg-bg-deep">Hostel</option>
                      <option value="pg" className="bg-bg-deep">PG / Co-living</option>
                      <option value="corporate" className="bg-bg-deep">Corporate Cafeteria</option>
                      <option value="hotel" className="bg-bg-deep">Hotel</option>
                      <option value="institution" className="bg-bg-deep">Institution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">Waste/Day</label>
                    <input
                      name="wastePerDay"
                      type="text"
                      placeholder="50 kg"
                      onChange={handleChange}
                      value={form.wastePerDay}
                      className="w-full px-4 py-3 rounded-sm bg-bg-deep border border-white/[0.08] text-sm text-white placeholder:text-text-subtle focus:outline-none focus:border-green-400/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Tell us about your waste management needs..."
                    className="w-full px-4 py-3 rounded-sm bg-bg-deep border border-white/[0.08] text-sm text-white placeholder:text-text-subtle focus:outline-none focus:border-green-400/40 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold"
                >
                  <Send size={16} />
                  Submit Partnership Request
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
