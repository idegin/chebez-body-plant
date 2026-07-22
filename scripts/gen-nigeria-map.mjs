import { readFileSync, writeFileSync } from "node:fs";

const path = readFileSync("/tmp/ng_path.txt", "utf8").trim();
const d = JSON.stringify(path);

const file = `"use client";

import { motion, useReducedMotion } from "motion/react";

// Accurate Nigeria outline (potrace) rendered in a 1024×1024 viewBox via the
// translate/scale transform below. Source: mapsicon (public domain).
const NG_PATH = ${d};

// Coverage points positioned over major cities in the 1024×1024 viewBox.
const CITIES = [
  { x: 235, y: 735, name: "Lagos" },
  { x: 300, y: 690, name: "Ibadan" },
  { x: 430, y: 735, name: "Benin City" },
  { x: 545, y: 560, name: "Abuja" },
  { x: 560, y: 430, name: "Kaduna" },
  { x: 615, y: 320, name: "Kano" },
  { x: 645, y: 690, name: "Enugu" },
  { x: 575, y: 815, name: "Port Harcourt" },
  { x: 660, y: 480, name: "Jos" },
  { x: 865, y: 335, name: "Maiduguri" },
];

export function NigeriaMap() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="relative mt-6 w-full"
      role="img"
      aria-label="Map of Nigeria showing Bodyplant distribution coverage across major cities"
    >
      <g transform="translate(0,1024) scale(0.1,-0.1)">
        <path
          d={NG_PATH}
          fill="rgba(255,248,241,0.10)"
          stroke="rgba(155,197,61,0.65)"
          strokeWidth="18"
          strokeLinejoin="round"
        />
      </g>

      {CITIES.map((c, i) => (
        <g key={c.name}>
          {!reduce && (
            <motion.circle
              cx={c.x}
              cy={c.y}
              r={9}
              fill="none"
              stroke="#9BC53D"
              strokeWidth="3"
              initial={{ scale: 0.5, opacity: 0.7 }}
              animate={{ scale: [0.5, 3], opacity: [0.7, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: (i % 5) * 0.4, ease: "easeOut" }}
              style={{ transformOrigin: \`\${c.x}px \${c.y}px\` }}
            />
          )}
          <motion.circle
            cx={c.x}
            cy={c.y}
            r={7}
            fill="#DFA44B"
            stroke="#FFF8F1"
            strokeWidth="2"
            initial={reduce ? undefined : { scale: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.07 }}
            style={{ transformOrigin: \`\${c.x}px \${c.y}px\` }}
          />
        </g>
      ))}
    </svg>
  );
}
`;

writeFileSync("app/distribution/_components/nigeria-map.tsx", file);
console.log("wrote app/distribution/_components/nigeria-map.tsx (" + file.length + " bytes)");
