import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "/about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Carbon Credit Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-green-400 flex items-center justify-center">
                <span className="text-sm font-bold text-black">W</span>
              </div>
              <span className="text-lg font-semibold tracking-tight font-[family-name:var(--font-syne)]">
                Waste<span className="text-green-400">2</span>Watts
              </span>
            </div>
            <p className="text-sm text-text-body leading-relaxed">
              Turning hostel food waste into clean energy, organic fertilizer,
              and verified carbon credits.
            </p>
            <div className="flex items-center gap-1 mt-4 text-[11px] text-text-muted">
              <Leaf size={12} className="text-green-500" />
              <span>Building India's decentralized waste infrastructure</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4 font-[family-name:var(--font-syne)]">
              Product
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-body hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4 font-[family-name:var(--font-syne)]">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-body hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4 font-[family-name:var(--font-syne)]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-body">
                <Mail size={14} className="text-green-500 flex-shrink-0" />
                <a href="mailto:waste2watts.change@gmail.com" className="hover:text-white transition-colors">
                  waste2watts.change@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-body">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                <a href="tel:+919953636923" className="hover:text-white transition-colors">
                  +91 99536 36923
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-body">
                <MapPin size={14} className="text-green-500 flex-shrink-0" />
                Solan, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-text-muted">
            &copy; {new Date().getFullYear()} Waste2Watts. All rights reserved.
          </p>
          <p className="text-[11px] text-text-subtle">
            Converting waste. Generating impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
