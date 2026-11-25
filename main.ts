// Worst Fix Ever — one commit message for a fix that made everything worse.
// Judge criteria, in order: (1) reads as a one-line commit message about a
// fix that backfired — a typo fix whose "repair" deleted the whole database,
// the very thing that produced the message being fixed; (2) the joke is the
// absurd escalation: the tiniest possible fix, the largest possible damage;
// (3) the irony is specific and self-sealing — fixing the words of an error
// message by destroying the thing that made it; (4) short, plain,
// imperative, the kind a tired engineer types at the end of a bad day;
// (5) a fresh angle — no revert, no testing in production, no
// "broke everything".
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line =
  "fix typo in the error message by deleting the database that made it";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
