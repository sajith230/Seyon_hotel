"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  /** Root margin for IntersectionObserver (e.g. "0px 0px -60px 0px" to trigger a bit early) */
  rootMargin?: string;
  /** Minimum fraction of element visible to trigger (0–1) */
  threshold?: number;
  /** Run animation only once (stay visible after first trigger) */
  once?: boolean;
}

export default function AnimateInView({
  children,
  className,
  rootMargin = "0px 0px -40px 0px",
  threshold = 0.05,
  once = true,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return (
    <div
      ref={ref}
      className={cn("animate-in-view", inView && "in-view", className)}
    >
      {children}
    </div>
  );
}
