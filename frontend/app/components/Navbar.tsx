"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/70 backdrop-blur-2xl border-b border-border shadow-[0_1px_0_rgba(255,255,255,0.03)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-[0_0_24px_rgba(0,230,118,0.3)] transition-shadow duration-300">
                <Zap size={16} className="text-bg" strokeWidth={2.5} />
              </div>
              <span className="text-[17px] font-semibold tracking-tight font-display text-text">
                Waste<span className="text-primary">2</span>Watts
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium text-text-dim hover:text-text transition-colors duration-200 rounded-lg hover:bg-white/[0.03]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/dashboard"
                className="text-[13px] font-medium text-text-dim hover:text-text transition-colors"
              >
                Dashboard
              </Link>
              <a
                href="#contact"
                className="px-5 py-2.5 text-[13px] font-semibold text-bg bg-primary rounded-lg hover:bg-primary-dim transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,230,118,0.25)] active:scale-[0.97]"
              >
                Partner With Us
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-dim hover:text-text transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-1 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-text hover:text-primary py-3 transition-colors font-display"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 + 0.05 }}
              className="mt-8"
            >
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block px-8 py-3.5 text-sm font-semibold text-bg bg-primary rounded-lg"
              >
                Partner With Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
