import sharp from "sharp";
import { readdirSync } from "node:fs";

const dir = "public/images";
const files = readdirSync(dir).sort();
const CW = 360, CH = 270, COLS = 4;
const rows = Math.ceil(files.length / COLS);

const cells = await Promise.all(
  files.map(async (f) => {
    const img = await sharp(`${dir}/${f}`).resize(CW, CH, { fit: "cover" }).toBuffer();
    const label = Buffer.from(
      `<svg width="${CW}" height="34"><rect width="${CW}" height="34" fill="black" opacity="0.65"/><text x="6" y="23" font-size="18" fill="white" font-family="sans-serif">${f.replace("Gemini_Generated_Image_", "").slice(0, 34)}</text></svg>`
    );
    return sharp(img).composite([{ input: label, gravity: "north" }]).toBuffer();
  })
);

await sharp({ create: { width: COLS * CW, height: rows * CH, channels: 3, background: "#222" } })
  .composite(cells.map((input, i) => ({ input, left: (i % COLS) * CW, top: Math.floor(i / COLS) * CH })))
  .jpeg({ quality: 80 })
  .toFile("/tmp/local-sheet.jpg");
console.log("wrote /tmp/local-sheet.jpg");
