import { mkdir, readFile, writeFile } from 'node:fs/promises'
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

console.log('Exported the SmartRural landing page to .output/public.')
