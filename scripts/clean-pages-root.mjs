import { rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

for (const entry of ["assets", "favicon.png", "robots.txt", "_headers", "index.html"]) {
  await rm(resolve(repositoryRoot, entry), { force: true, recursive: true });
}
