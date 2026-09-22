import { readFile, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const staticRoutes = JSON.parse(await readFile(resolve(repositoryRoot, 'scripts/pages-routes.json'), 'utf8'))

for (const entry of [
    'assets',
    'favicon.png',
    'favicon.svg',
    'robots.txt',
    '_headers',
    'index.html',
    ...staticRoutes.filter((route) => route !== '/').flatMap((route) => [`${route.slice(1)}.html`, route.slice(1)])
]) {
    await rm(resolve(repositoryRoot, entry), { force: true, recursive: true })
}
