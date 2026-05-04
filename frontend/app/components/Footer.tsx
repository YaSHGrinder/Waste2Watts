import { Zap, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Dashboard", href: "/dashboard" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Carbon Credit Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap size={14} className="text-bg" strokeWidth={2.5} />
              </div>
              <span className="text-[17px] font-semibold tracking-tight font-display text-text">
                Waste<span className="text-primary">2</span>Watts
              </span>
            </div>
            <p className="text-sm text-text-dim leading-relaxed max-w-xs">
              Converting bio-waste into energy, fertilizer, and carbon credits
              using AI-powered sensing.
            </p>
            <div className="flex items-center gap-2 mt-4 text-[11px] text-text-muted">
              <span>h</span>
              <span>Building India's decentralized waste infrastructure</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-text uppercase tracking-[0.15em] mb-5 font-display">
              Product
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-dim hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-text uppercase tracking-[0.15em] mb-5 font-display">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-dim hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-text uppercase tracking-[0.15em] mb-5 font-display">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-text-dim">
                <Mail size={14} className="text-primary/60 flex-shrink-0" />
                <a
                  href="mailto:waste2watts.change@gmail.com"
                  className="hover:text-text transition-colors"
                >
                  waste2watts.change@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-dim">
                <Phone size={14} className="text-primary/60 flex-shrink-0" />
                <a
                  href="tel:+919953636923"
                  className="hover:text-text transition-colors"
                >
                  +91 99536 36923
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-dim">
                <MapPin size={14} className="text-primary/60 flex-shrink-0" />
                Solan, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-text-muted">
            &copy; {new Date().getFullYear()} Waste2Watts. All rights reserved.
          </p>
          <p className="text-[11px] text-text-faint">
            Converting waste. Generating impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
