import sharp from "sharp";
import { mkdirSync } from "node:fs";

const LOGO = "app/brand/body-plant-logo.png";
const CREAM = { r: 255, g: 248, b: 241, alpha: 1 };
const DEEP_GREEN = { r: 13, g: 150, b: 70, alpha: 1 };

mkdirSync("public", { recursive: true });

/* rounded-rect mask svg */
const roundedRect = (w, h, r) =>
  Buffer.from(
    `<svg width="${w}" height="${h}"><rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}"/></svg>`
  );

/* ---------- 1) Favicon: full logo on cream rounded square ---------- */
async function favicon(size, out, bg) {
  const pad = Math.round(size * 0.16);
  const inner = size - pad * 2;
  const logo = await sharp(LOGO)
    .resize({ width: inner, height: inner, fit: "inside" })
    .toBuffer();
  const base = sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  }).composite([
    { input: roundedRect(size, size, Math.round(size * 0.22)), blend: "dest-in" },
    { input: logo, gravity: "center" },
  ]);
  await base.png().toFile(out);
  console.log("wrote", out);
}

/* ---------- 2) Badge: full logo on cream rounded card (for OG/social) ---------- */
async function badge() {
  const w = 900;
  const h = 360;
  const logo = await sharp(LOGO)
    .resize({ width: Math.round(w * 0.8), fit: "inside" })
    .toBuffer();
  await sharp({
    create: { width: w, height: h, channels: 4, background: CREAM },
  })
    .composite([
      { input: roundedRect(w, h, 48), blend: "dest-in" },
      { input: logo, gravity: "center" },
    ])
    .png()
    .toFile("public/logo-badge.png");
  console.log("wrote public/logo-badge.png");
}

await favicon(512, "app/icon.png", CREAM);
await favicon(180, "app/apple-icon.png", CREAM);
await badge();
console.log("done");
