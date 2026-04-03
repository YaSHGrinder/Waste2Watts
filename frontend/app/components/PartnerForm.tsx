"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Send, CheckCircle } from "lucide-react";

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
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-green-400 font-semibold">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Partner{" "}
            <span className="gradient-text">With Us</span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Whether you&apos;re a hostel, institution, or investor — let&apos;s
            build sustainable infrastructure together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Benefits of Partnering
              </h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                {[
                  "Zero waste disposal costs for your hostel",
                  "Free biogas for kitchen operations",
                  "Organic fertilizer for campus gardens",
                  "Carbon revenue shared with your institution",
                  "Real-time impact dashboard access",
                  "ESG compliance reporting automation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-0.5 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Who should partner?</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "College Hostels",
                  "Paying Guest Accommodations",
                  "Corporate Cafeterias",
                  "Hotels",
                  "Institutional Canteens",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/[0.08] text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Application Received!
                </h3>
                <p className="text-neutral-500 text-sm">
                  Our team will reach out within 48 hours to discuss your
                  waste management needs.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@institution.edu.in"
                    onChange={handleChange}
                    value={form.email}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Organization Name
                  </label>
                  <input
                    name="orgName"
                    required
                    type="text"
                    placeholder="Greenwood Hostel"
                    onChange={handleChange}
                    value={form.orgName}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Organization Type
                    </label>
                    <select
                      name="orgType"
                      value={form.orgType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-green-500/40 transition-all appearance-none"
                    >
                      <option value="hostel" className="bg-neutral-900">
                        Hostel
                      </option>
                      <option value="pg" className="bg-neutral-900">
                        PG / Co-living
                      </option>
                      <option value="corporate" className="bg-neutral-900">
                        Corporate Cafeteria
                      </option>
                      <option value="hotel" className="bg-neutral-900">
                        Hotel
                      </option>
                      <option value="institution" className="bg-neutral-900">
                        Institution
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Waste / Day (approx)
                    </label>
                    <input
                      name="wastePerDay"
                      type="text"
                      placeholder="50 kg"
                      onChange={handleChange}
                      value={form.wastePerDay}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Tell us about your waste management needs..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/40 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-xl hover:from-green-300 hover:to-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20"
                >
                  <Send size={16} />
                  Submit Partnership Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
