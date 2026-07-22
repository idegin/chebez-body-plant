import Image from "next/image";

/**
 * Full-bleed image background with a tunable overlay — the wide-container
 * counterpart to <VideoBackdrop>. Use for hero/section backgrounds where a
 * horizontal (h-) brand image belongs. A slow Ken-Burns drift is applied via
 * CSS so the still image still feels alive (disabled under reduced-motion).
 *
 * Pass `unoptimized` for animated GIFs (e.g. the horizontal brand loop) so
 * next/image serves the raw file and the animation plays; Ken-Burns is skipped
 * since the asset already moves.
 */
export function ImageBackdrop({
  src,
  overlay = "bg-charcoal/45",
  className = "",
  priority = false,
  animate = true,
  unoptimized = false,
}: {
  src: string;
  overlay?: string;
  className?: string;
  priority?: boolean;
  animate?: boolean;
  unoptimized?: boolean;
}) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        unoptimized={unoptimized}
        sizes="100vw"
        className={`object-cover ${animate && !unoptimized ? "animate-kenburns" : ""}`}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
