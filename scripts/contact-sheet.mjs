import sharp from "sharp";

const IDS = [
  1793035, 1638280, 4110251, 4198019, 1002740, 806361, 6157050, 8844888,
  1435904, 1435735, 5945755, 6153354, 5677794, 4033148, 7469474, 3735207,
  2280549, 1128678, 4198714, 5946071, 3184183, 1640774,
];
const CELL = 300;
const COLS = 5;
const rows = Math.ceil(IDS.length / COLS);

async function fetchThumb(id) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400`;
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  const img = await sharp(buf)
    .resize(CELL, CELL, { fit: "cover" })
    .toBuffer();
  const label = Buffer.from(
    `<svg width="${CELL}" height="40"><rect width="${CELL}" height="40" fill="black" opacity="0.6"/><text x="8" y="27" font-size="24" fill="white" font-family="sans-serif">${id}</text></svg>`
  );
  return sharp(img).composite([{ input: label, gravity: "north" }]).toBuffer();
}

const thumbs = await Promise.all(IDS.map(fetchThumb));
const canvas = sharp({
  create: { width: COLS * CELL, height: rows * CELL, channels: 3, background: "#222" },
});
const composites = thumbs.map((input, i) => ({
  input,
  left: (i % COLS) * CELL,
  top: Math.floor(i / COLS) * CELL,
}));
await canvas.composite(composites).jpeg({ quality: 78 }).toFile("/tmp/contact-sheet.jpg");
console.log("wrote /tmp/contact-sheet.jpg");
