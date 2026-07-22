/**
 * Central media library. All URLs are verified royalty-free stock (Pexels)
 * used as PLACEHOLDERS — swap `img()` IDs / `video` URLs for Bodyplant's own
 * product photography and footage when available. One place to change them all.
 */

/** Build a responsive Pexels image URL for a given photo id. */
export function img(id: number, w = 1200): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&fit=crop`;
}

/** Verified, content-matched stock photo IDs, grouped by role. */
export const PHOTO = {
  syrupPour: 5945755, // amber syrup on honeycomb
  syrupDrip: 6153354, // dark dramatic pour
  goldenSpoon: 4198714, // golden turmeric-like spoon
  teaCup: 1638280, // warm tea cup + botanical
  teaAmber: 4110251, // amber tea on saucer
  teaLeaves: 1793035, // loose tea leaves
  teaPour: 3735207, // pouring into cup
  harvestHands: 8844888, // hands holding fresh harvest
  produce: 1435904, // fresh produce spread
  citrus: 1435735, // sliced citrus
  familyTable: 3184183, // family dining flatlay
  breakfast: 1640774, // healthy breakfast bowls
  saladBowl: 806361, // fresh salad
  qualityLab: 4033148, // quality control / lab
  kitchen: 1002740, // modern kitchen interior
  dropper: 7469474, // product dropper on grey
  bottles: 2280549, // product bottle lineup
  apple: 6157050, // apple on dark
  flatlay: 1128678, // nutrition flatlay
  coconutPrep: 5946071, // prep on orange background
} as const;

/** Verified autoplaying background videos (muted, looped). */
export const VIDEO = {
  amberPour: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  leaves: "https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4",
  nature: "https://videos.pexels.com/video-files/2894888/2894888-uhd_2560_1440_24fps.mp4",
  pour2: "https://videos.pexels.com/video-files/4114797/4114797-uhd_2560_1440_25fps.mp4",
} as const;
