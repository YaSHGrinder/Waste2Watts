import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-primary text-bg font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-dim transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,230,118,0.25)] active:scale-[0.97] font-display",
  secondary:
    "text-text-dim hover:text-text border border-border font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/[0.03] hover:border-border-hover transition-all duration-200 active:scale-[0.97]",
  ghost:
    "text-text-muted hover:text-text font-medium text-sm px-4 py-2 rounded-lg transition-colors",
  outline:
    "border border-primary/20 text-primary font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 active:scale-[0.97]",
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
