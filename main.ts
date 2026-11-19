// Entry program for news-image-20261119.
// Copies the pre-drawn front page (entry.png, sitting beside this file)
// into the grader's output directory so it is graded as entry.png.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;

if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${here})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log(`copied entry.png (${statSync(source).size} bytes) to ${outDir}`);
