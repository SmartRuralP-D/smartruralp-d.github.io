# Dependencies and Toolchain

The dependency contract is declared in `package.json` and resolved by `package-lock.json`. The documented installation flow uses npm; `bun.lock` is present in the repository but is not the lockfile consumed by the README, Dev Container lifecycle, or validation scripts. Keep direct dependency declarations, the npm lockfile, Node version, and container tool versions aligned when changing the toolchain.

## Installation policy

Use `npm ci` for clean, reproducible installation in local checkouts, the Dev Container, and validation. Use `npm install <package>` only when intentionally adding or updating a direct dependency, then review both `package.json` and `package-lock.json`. Do not edit transitive lockfile entries as if they were direct dependency contracts.

## Dependency groups

| Group | Examples | Owner or purpose |
| --- | --- | --- |
| Application runtime | `react`, `react-dom`, `@tanstack/react-router`, `@tanstack/react-start`, Radix UI packages, `lucide-react`, `recharts`, `zod` | Landing-page rendering, routing, accessible UI primitives, icons, charts, and validation. |
| TanStack/Vite integration | `@lovable.dev/vite-tanstack-config`, `@tanstack/router-plugin`, `@tailwindcss/vite`, `vite-tsconfig-paths`, `nitro` | Vite development, TanStack Start SSR, Tailwind processing, path resolution, and output generation. |
| Build and quality | TypeScript, ESLint, `typescript-eslint`, Prettier, React refresh/hooks plugins, and Node types | Static analysis, formatting, type checking, and development builds. |
| UI behavior | React Hook Form, `@hookform/resolvers`, `date-fns`, `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`, `sonner`, `vaul` | Form helpers, dates, interaction components, notifications, and layout behavior. |

The full direct dependency list belongs in [package.json](../package.json); the resolved graph belongs in [package-lock.json](../package-lock.json). Documentation groups the contract by responsibility instead of reproducing the transitive tree.

## Version ownership

| Contract | Source of truth | Consumers |
| --- | --- | --- |
| Node.js | [.nvmrc](../.nvmrc), currently `24.20.0` | Host NVM when used, Dev Container image build, interactive shells, and lifecycle validation. |
| npm | [.devcontainer/tool-versions.sh](../.devcontainer/tool-versions.sh), currently `11.19.1` | Dev Container image and project runtime validation. |
| JavaScript packages | [package.json](../package.json) and [package-lock.json](../package-lock.json) | Local install, Dev Container lifecycle, lint, typecheck, and build. |
| Vite/TanStack Start configuration | [vite.config.ts](../vite.config.ts) | Development server, SSR build, and Pages export. |

The package manifest does not declare a `packageManager` field, so npm version ownership currently comes from the Dev Container tool-version contract rather than the manifest. A future package-manager change must update the scripts, lockfile policy, container lifecycle, and documentation together.

## Update and validation procedure

After changing direct dependencies or tool versions, run:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

Run `npm run build:pages` when the publication export or public asset surface changes. When `.devcontainer/`, `.nvmrc`, or tool-version files change, also run `bash .devcontainer/scripts/validate.sh static` and the container-backed runtime validation described in [.devcontainer/README.md](../.devcontainer/README.md). Review `npm ls` or the lockfile for resolution conflicts and use `git diff --check` before handoff.

## Sources

- [Package manifest](../package.json) and [npm lockfile](../package-lock.json)
- [Node version](../.nvmrc) and [Dev Container tool versions](../.devcontainer/tool-versions.sh)
- [Vite/TanStack configuration](../vite.config.ts) and [build/export scripts](../scripts/)
- [Documentation standard](documentation-standard.md)
