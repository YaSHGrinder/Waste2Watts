import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "Carbon Credits", href: "#carbon" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Carbon Credit Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-sm font-bold text-black">W</span>
              </div>
              <span className="text-lg font-semibold">
                Waste<span className="text-green-400">2</span>Watts
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Turning hostel food waste into clean energy, organic fertilizer,
              and verified carbon credits.
            </p>
            <div className="flex items-center gap-1 mt-4 text-xs text-neutral-600">
              <Leaf size={12} className="text-green-500" />
              <span>Building India&apos;s decentralized waste infrastructure</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-neutral-500">
                <Mail size={14} className="text-green-500 flex-shrink-0" />
                <a href="mailto:Waste2Watts.change@gmail.com" className="hover:text-white transition-colors">
                  Waste2Watts.change@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-500">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                <a href="tel:+919953636923" className="hover:text-white transition-colors">
                  +91 99536 36923
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-500">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                <a href="tel:+918305059528" className="hover:text-white transition-colors">
                  +91 83050 59528
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-500">
                <MapPin size={14} className="text-green-500 flex-shrink-0" />
                Solan, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Waste2Watts. All rights
            reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Converting waste. Generating impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
