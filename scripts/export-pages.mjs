import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publicDirectory = resolve(repositoryRoot, '.output/public')
const serverEntry = resolve(repositoryRoot, '.output/server/index.mjs')
const staticRoutes = JSON.parse(await readFile(resolve(repositoryRoot, 'scripts/pages-routes.json'), 'utf8'))

const server = (await import(pathToFileURL(serverEntry))).default
await mkdir(publicDirectory, { recursive: true })

for (const route of staticRoutes) {
    const response = await server.fetch(new Request(`https://www.smartrural.com.br${route}`), {}, { waitUntil() {} })

    if (!response.ok) {
        throw new Error(`Static export failed for ${route} with HTTP ${response.status}.`)
    }

    const html = await response.text()

    if (route === '/') {
        await writeFile(resolve(publicDirectory, 'index.html'), html)
        continue
    }

    const routeName = route.slice(1)
    await writeFile(resolve(publicDirectory, `${routeName}.html`), html)
    await mkdir(resolve(publicDirectory, routeName), { recursive: true })
    await writeFile(resolve(publicDirectory, routeName, 'index.html'), html)
}

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

for (const entry of await readdir(publicDirectory)) {
    await cp(resolve(publicDirectory, entry), resolve(repositoryRoot, entry), {
        recursive: true,
        force: true
    })
}

console.log('Exported the SmartRural landing page to the GitHub Pages root.')
