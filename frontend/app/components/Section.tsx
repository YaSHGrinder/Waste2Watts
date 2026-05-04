import { forwardRef, ReactNode } from "react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
