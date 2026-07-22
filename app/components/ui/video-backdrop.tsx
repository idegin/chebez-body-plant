"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Autoplaying, muted, looped background video with a poster fallback and a
 * tunable overlay. Honors prefers-reduced-motion (shows the poster still,
 * never plays). Video only loads once mounted to keep the critical path lean.
 */
export function VideoBackdrop({
  src,
  poster,
  overlay = "bg-charcoal/45",
  className = "",
}: {
  src: string;
  poster: string;
  overlay?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [reduce]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Poster (LCP-safe, always painted) */}
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {!reduce && (
        <video
          ref={ref}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          poster={poster}
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
