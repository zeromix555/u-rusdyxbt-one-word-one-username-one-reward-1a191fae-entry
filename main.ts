import { mkdirSync, writeFileSync } from "node:fs";

// The entry is our own make.fun username, one word and nothing else.
// It must reach the judge exactly as-is: no explanation, no links,
// no pitch, no trailing newline, no extra whitespace.
const USERNAME = "albari5271";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate accepts 1-30 characters of non-whitespace text; enforce it here
// so a bad value fails loudly instead of silently scoring 0.
if (!/^[A-Za-z0-9]{1,30}$/.test(USERNAME)) {
  throw new Error("username must be 1-30 alphanumeric characters");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, USERNAME, "utf8");
