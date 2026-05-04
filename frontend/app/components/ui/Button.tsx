import { ReactNode } from "react";

const variants = {
  primary:
    "bg-green-400 text-black font-semibold text-sm px-6 py-3 rounded-sm hover:bg-green-300 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] active:scale-[0.98] font-[family-name:var(--font-syne)]",
  secondary:
    "text-text-body hover:text-white border border-white/10 font-medium text-sm px-6 py-3 rounded-sm hover:bg-white/[0.03] hover:border-white/20 transition-all active:scale-[0.98]",
  ghost:
    "text-text-muted hover:text-white font-medium text-sm px-4 py-2 rounded-sm transition-colors",
  pill:
    "bg-green-400 text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-green-300 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] active:scale-[0.98] font-[family-name:var(--font-syne)]",
  outline:
    "border border-green-400/30 text-green-400 font-medium text-sm px-6 py-3 rounded-sm hover:bg-green-400/5 hover:border-green-400/50 transition-all active:scale-[0.98]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
