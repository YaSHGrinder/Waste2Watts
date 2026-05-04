"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-deep/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-sm bg-green-400 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-shadow">
                <span className="text-sm font-bold text-black">W</span>
              </div>
              <span className="text-lg font-semibold tracking-tight font-[family-name:var(--font-syne)]">
                Waste<span className="text-green-400">2</span>Watts
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-text-muted hover:text-white transition-colors rounded-sm hover:bg-white/[0.03] font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/dashboard"
                className="text-sm text-text-muted hover:text-white transition-colors font-medium"
              >
                Dashboard
              </Link>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-black bg-green-400 rounded-sm hover:bg-green-300 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] active:scale-[0.98] font-[family-name:var(--font-syne)]"
              >
                Partner With Us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-deep/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-text-body hover:text-white py-3 transition-colors font-[family-name:var(--font-syne)]"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.05 }}
              className="mt-6"
            >
              <Link
                href="/dashboard"
                className="block text-center w-48 px-6 py-3 text-sm font-semibold text-black bg-green-400 rounded-sm font-[family-name:var(--font-syne)]"
                onClick={() => setMobileOpen(false)}
              >
                Go to Dashboard
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
