import Image from "next/image";

/**
 * Full-bleed image background with a tunable overlay — the wide-container
 * counterpart to <VideoBackdrop>. Use for hero/section backgrounds where a
 * horizontal (h-) brand image belongs. A slow Ken-Burns drift is applied via
 * CSS so the still image still feels alive (disabled under reduced-motion).
 */
export function ImageBackdrop({
  src,
  overlay = "bg-charcoal/45",
  className = "",
  priority = false,
  animate = true,
}: {
  src: string;
  overlay?: string;
  className?: string;
  priority?: boolean;
  animate?: boolean;
}) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={`object-cover ${animate ? "animate-kenburns" : ""}`}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
