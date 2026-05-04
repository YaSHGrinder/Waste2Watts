"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Send, CheckCircle } from "lucide-react";
import Section from "./Section";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact-form" className="section-standard mesh-green">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[18px] h-[2px] bg-primary" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-semibold font-display">
              Partner With Us
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[0.95] text-text">
            Ready to Turn Waste
            <br />
            <span className="gradient-text">Into Revenue?</span>
          </h2>
          <p className="mt-5 text-text-dim leading-relaxed">
            We collect your mess waste at zero cost. Fill out the form below
            and our team will reach out within 48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="surface-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-4">
                <Building2 size={18} />
              </div>
              <h3 className="font-display text-base font-semibold text-text mb-4">
                Benefits of Partnering
              </h3>
              <ul className="space-y-2.5 text-sm text-text-dim">
                {[
                  "Reduce waste disposal costs by 60–80%",
                  "Generate ~7 m³ biogas/day (3–4 LPG cylinders)",
                  "Organic fertilizer for campus grounds",
                  "₹4,000–8,000/month from carbon credit revenue",
                  "Real-time impact dashboard access",
                  "Automated ESG reports for NAAC/NIRF compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card rounded-2xl p-6">
              <h4 className="font-display text-xs font-semibold text-text uppercase tracking-[0.12em] mb-3">
                Who Should Partner?
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "College Hostels",
                  "PG Accommodations",
                  "Corporate Cafeterias",
                  "Hotels & Banquets",
                  "Institutional Canteens",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-medium rounded-lg bg-white/[0.03] border border-border text-text-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
            id="partner-form"
          >
            {submitted ? (
              <div className="surface-card rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center text-success mx-auto mb-4">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-2">
                  Application Received!
                </h3>
                <p className="text-text-dim text-sm">
                  Our team will reach out within 48 hours to discuss your
                  waste management needs.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="surface-card rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 font-medium">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="you@institution.edu.in"
                      onChange={handleChange}
                      value={form.email}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-primary/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 font-medium">
                      Organization
                    </label>
                    <input
                      name="orgName"
                      required
                      type="text"
                      placeholder="Greenwood Hostel"
                      onChange={handleChange}
                      value={form.orgName}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 font-medium">
                      Type
                    </label>
                    <select
                      name="orgType"
                      value={form.orgType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text focus:outline-none focus:border-primary/30 transition-all appearance-none"
                    >
                      <option value="hostel">Hostel</option>
                      <option value="pg">PG / Co-living</option>
                      <option value="corporate">Corporate Cafeteria</option>
                      <option value="hotel">Hotel</option>
                      <option value="institution">Institution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 font-medium">
                    Waste/Day (approx.)
                  </label>
                  <input
                    name="wastePerDay"
                    type="text"
                    placeholder="50 kg"
                    onChange={handleChange}
                    value={form.wastePerDay}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 font-medium">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Tell us about your waste management needs..."
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-primary/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-bg bg-primary rounded-xl hover:bg-primary-dim transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,230,118,0.25)] active:scale-[0.97]"
                >
                  <Send size={15} />
                  Submit Partnership Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
