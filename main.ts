import * as fs from "node:fs";
import * as path from "node:path";

// The dying phone's final text: a confession, a boast, and a farewell
// to the charger — all on its last percent of battery.
const text =
  "I'm at 1% so I'll be brief: I spent my final percent on this text instead of calling for help. I died with 47 tabs open and I regret none of them. Tell the charger I said hi.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, text, "utf8");
fs.chmodSync(outPath, 0o644);
