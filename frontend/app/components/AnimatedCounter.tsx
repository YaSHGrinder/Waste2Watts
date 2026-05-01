"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring } from "framer-motion";

export default function AnimatedCounter({
  target,
  decimals = 0,
  suffix = "",
  duration = 2,
}: {
  target: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useSpring(0, { duration: duration * 1000 });
  const [readout, setReadout] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, motionValue, target]);

  // useTransform doesn't return a React-compatible value directly with useSpring
  useEffect(() => {
    const unsub = motionValue.on("change", () => {
      setReadout(motionValue.get().toFixed(decimals) + suffix);
    });
    return () => unsub();
  }, [motionValue, decimals, suffix]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {inView ? readout : `0${suffix}`}
    </span>
  );
}
