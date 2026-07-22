import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** logo badge embedded as data URI so Satori can render it. */
let logoDataUri = "";
try {
  const buf = readFileSync(join(process.cwd(), "public", "logo-badge.png"));
  logoDataUri = `data:image/png;base64,${buf.toString("base64")}`;
} catch {
  logoDataUri = "";
}

/** Brand-styled Open Graph image. Reused by every route's opengraph-image. */
export function renderOg({
  title,
  eyebrow = "Bodyplant Nature Resources",
}: {
  title: string;
  eyebrow?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0d9646 0%, #0a5c2c 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* ambient blobs */}
        <div style={{ position: "absolute", top: -120, right: -80, width: 420, height: 420, borderRadius: "50%", background: "rgba(155,197,61,0.35)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: -140, left: -100, width: 460, height: 460, borderRadius: "50%", background: "rgba(223,164,75,0.25)", filter: "blur(40px)" }} />

        <div style={{ display: "flex", alignItems: "center" }}>
          {logoDataUri ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoDataUri} width={300} height={120} alt="" style={{ borderRadius: 20, objectFit: "contain", background: "#FFF8F1", padding: "10px 20px" }} />
          ) : (
            <div style={{ fontSize: 44, fontWeight: 800, color: "#FFF8F1" }}>Bodyplant</div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#9BC53D", fontWeight: 700 }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 74, lineHeight: 1.05, color: "#FFF8F1", fontWeight: 800, marginTop: 16, maxWidth: 980 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["NAFDAC", "SON", "HALAL", "Made in Nigeria"].map((c) => (
            <div key={c} style={{ display: "flex", background: "rgba(255,248,241,0.14)", border: "1px solid rgba(255,255,255,0.25)", color: "#FFF8F1", padding: "10px 22px", borderRadius: 999, fontSize: 24, fontWeight: 700 }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}

export const OG_ALT = `${SITE.name} — Premium Plant-Based Nutrition`;
