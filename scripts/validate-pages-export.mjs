import { access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publicDirectory = resolve(repositoryRoot, '.output/public')
const expectedFiles = ['index.html', 'privacy-policy.html', 'privacy-policy/index.html', 'aviquality.html', 'aviquality/index.html']

const missingFiles = []

for (const file of expectedFiles) {
    try {
        await access(resolve(publicDirectory, file))
    } catch {
        missingFiles.push(`.output/public/${file}`)
    }
}

if (missingFiles.length > 0) {
    throw new Error(`Pages export is missing expected files:\n${missingFiles.join('\n')}`)
}

console.log(`Validated ${expectedFiles.length} GitHub Pages export files.`)
