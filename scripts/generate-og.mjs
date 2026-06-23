/**
 * Rasterize the Open Graph SVG card to PNG.
 *
 * Most social platforms (X/Twitter, Facebook, LinkedIn, Slack, WhatsApp,
 * iMessage) do NOT render SVG OG images — they require a raster format.
 * This script keeps `og-default.png` in sync with `og-default.svg` so the
 * share preview always matches the design.
 *
 * Runs automatically on `npm run build` (via the `prebuild` hook) and on
 * `npm run og`. Requires `sharp` (already present as an Astro dependency).
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = resolve(root, "public/images/og-default.svg");
const pngPath = resolve(root, "public/images/og-default.png");

if (!existsSync(svgPath)) {
  console.warn("[og] SVG source not found, skipping PNG generation.");
  process.exit(0);
}

try {
  const sharp = (await import("sharp")).default;
  const svg = await readFile(svgPath);
  // density bump yields crisper text on the rasterized output
  await sharp(svg, { density: 2 })
    .resize(1200, 630, { fit: "fill" })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(pngPath);
  console.log("[og] generated public/images/og-default.png (1200×630)");
} catch (err) {
  // Non-fatal: the static PNG may already be committed.
  console.warn("[og] could not generate PNG:", err.message);
}
