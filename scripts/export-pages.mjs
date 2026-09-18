import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = resolve(repositoryRoot, ".output/public");
const serverEntry = resolve(repositoryRoot, ".output/server/index.mjs");

const server = (await import(pathToFileURL(serverEntry))).default;
const response = await server.fetch(
  new Request("https://www.smartrural.com.br/"),
  {},
  { waitUntil() {} },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}.`);
}

await mkdir(publicDirectory, { recursive: true });
await writeFile(resolve(publicDirectory, "index.html"), await response.text());

for (const entry of ["assets", "favicon.png", "robots.txt", "_headers", "index.html"]) {
  await rm(resolve(repositoryRoot, entry), { force: true, recursive: true });
}

for (const entry of await readdir(publicDirectory)) {
  await cp(resolve(publicDirectory, entry), resolve(repositoryRoot, entry), {
    recursive: true,
    force: true,
  });
}

console.log("Exported the SmartRural landing page to the GitHub Pages root.");
