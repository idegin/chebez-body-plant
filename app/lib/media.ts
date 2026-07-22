/**
 * Central media library — Bodyplant's own branded assets in /public.
 *   h-*  = horizontal (1376×768)  → wide backgrounds, banners, 16:9 panels
 *   v-*  = vertical  (896×1195)   → portrait panels, insets
 *   videos are vertical → used only in portrait/near-square containers
 */

/** next/image resolves these local paths; the width arg is accepted for
 *  call-site compatibility but sizing is handled by next/image itself. */
export function img(src: string, _w = 1200): string {
  return src;
}

// Horizontal (16:9) — real branded lifestyle & retail scenes
const H = {
  retail: "/images/h-Gemini_Generated_Image_4d7x7b4d7x7b4d7x.png", // stocked retail shelf of Bodyplant products
  delivery: "/images/h-Gemini_Generated_Image_aypo4eaypo4eaypo.png", // branded delivery truck + logistics
  family: "/images/h-Gemini_Generated_Image_deulnedeulnedeul.png", // family at the table with products
  calm: "/images/h-Gemini_Generated_Image_oonf9xoonf9xoonf.png", // relaxed lifestyle moment
  nutrition: "/images/h-Gemini_Generated_Image_r430qfr430qfr430.png", // wholesome spread with dates
  stocking: "/images/h-Gemini_Generated_Image_uugwipuugwipuugw.png", // stocking shelves in-store
  lounge: "/images/h-Gemini_Generated_Image_54yvhx54yvhx54yv.png", // family enjoying Date Seed Infusion together
} as const;

// Vertical (3:4) — production & retail, portrait
const V = {
  factory: "/images/v-factory.png", // quality inspection on the line
  factory2: "/images/v-factory-2.png", // production / packaging line
  packing: "/images/v-stores.png", // packing boxes for dispatch
  shelf: "/images/v-stores-2.png", // stocking a product shelf
  truck: "/images/v-stores-3.png", // delivery van + team
  storeBoxes: "/images/v-stores-4.png", // in-store with cartons
  stocking: "/images/v-stores-5.png", // arranging products on shelves
} as const;

/**
 * Semantic photo roles used across the site. Values are real asset paths.
 * Keys are unchanged from the previous library so every `img(PHOTO.x)` call
 * keeps working — only the underlying asset changed.
 */
export const PHOTO = {
  // product / nutrition (horizontal lifestyle)
  syrupPour: H.nutrition,
  syrupDrip: H.nutrition,
  goldenSpoon: H.family,
  teaCup: H.lounge,
  teaAmber: H.lounge,
  teaLeaves: H.family,
  teaPour: H.lounge,
  // sourcing / nutrition
  harvestHands: H.nutrition,
  produce: H.nutrition,
  citrus: H.family,
  familyTable: H.lounge,
  breakfast: H.nutrition,
  saladBowl: H.family,
  flatlay: H.family,
  apple: H.nutrition,
  dropper: H.nutrition,
  coconutPrep: H.nutrition,
  // business / retail / manufacturing
  qualityLab: V.factory,
  kitchen: H.retail,
  bottles: H.retail,

  // portrait roles (use vertical assets)
  vShelf: V.shelf,
  vStore: V.storeBoxes,
  vStocking: V.stocking,
  vFactory: V.factory,
  vFactory2: V.factory2,
  vPacking: V.packing,
  vTruck: V.truck,

  // horizontal roles (explicit)
  hRetail: H.retail,
  hDelivery: H.delivery,
  hFamily: H.family,
  hCalm: H.calm,
  hNutrition: H.nutrition,
  hStocking: H.stocking,
  hLounge: H.lounge,
} as const;

/** Vertical brand videos — only for portrait / near-square containers. */
export const VIDEO = {
  hero: "/videos/body-plant-4.mp4",
  feature: "/videos/body-plant-7.mp4",
  gif: "/videos/body-plant.gif",
  gifH: "/videos/h-body-plant.gif", // horizontal animated brand loop (wide backgrounds)
  gifH1: "/videos/h-body-plan-1.gif", // second horizontal animated brand loop
  // legacy aliases (kept so any remaining references resolve to a real asset)
  amberPour: "/videos/body-plant-4.mp4",
  leaves: "/videos/body-plant-7.mp4",
  nature: "/videos/body-plant-4.mp4",
  pour2: "/videos/body-plant-7.mp4",
} as const;
