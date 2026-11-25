/**
 * The GPS Swears It Was a Shortcut — entry.
 *
 * One line, at most 200 characters, written to
 * ${MAKEFUN_OUTPUT_DIR:-/output}/entry.txt. Stdlib only, no network.
 *
 * The judge is a comedy-club head judge reading two lines at a time, so the
 * whole entry is one breath of GPS voice: smug, caught red handed, blaming
 * the map rather than the driver. Two runs are taken by the grader, so the
 * text is a pure constant — no clock, no randomness, byte-identical both runs.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_NAME = "entry.txt";
const MAX_CHARS = 200;

// Judge weights, most important first: (1) it is the GPS's own excuse for the
// wrong road, (2) a real joke with a turn the reader does not see coming,
// (3) smug and defensive, blaming the map, (4) one clean line under 200,
// (5) a fresh specific detail instead of the "recalculating" cliche.
//
// Structure: the first clause states a confident false premise (it was a
// parking lot), the middle hands blame to two parties that cannot defend
// themselves (a late lake, swans with no paperwork), and the last three words
// turn the whole thing — the reader braces for an apology and instead gets the
// driver reclassified as a man who parked legally. The lake is the specific
// detail criterion 5 asks for, and no clause uses the word "recalculating".
const LINE =
  "That was a parking lot when I mapped it. The lake arrived late and the swans filed no paperwork, so legally, sir, you parked.";

function compose(): string {
  const text = LINE.normalize("NFC").trim();
  if (/[\r\n]/.test(text)) throw new Error("entry must be a single line");
  if (text.trim().length === 0) throw new Error("entry is only white space");
  const chars = [...text].length;
  if (chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} chars, the gate caps it at ${MAX_CHARS}`);
  }
  // Fail loudly rather than shipping a line that drifted off the brief.
  if (!text.includes("parking lot")) throw new Error("the false-premise opening is gone");
  if (!/swans/i.test(text)) throw new Error("the shoreline blame is gone");
  if (!text.endsWith("you parked.")) throw new Error("the final turn is gone");
  if (/recalculat/i.test(text)) throw new Error("the cliche the judge penalises crept back in");
  return text;
}

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(dir, { recursive: true });
  const text = compose();
  writeFileSync(join(dir, OUT_NAME), text, "utf8");
  const bytes = Buffer.byteLength(text, "utf8");
  process.stderr.write(`wrote ${[...text].length} chars / ${bytes} bytes to ${join(dir, OUT_NAME)}\n`);
}

try {
  main();
} catch (err) {
  process.stderr.write(`entry failed: ${(err as Error).message}\n`);
  process.exit(1);
}
