import { forwardRef, type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgMesh?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className = "", bgMesh = false }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`relative ${bgMesh ? "mesh-green" : ""} ${className}`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
