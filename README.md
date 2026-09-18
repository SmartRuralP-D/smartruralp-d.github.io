# SmartRural Landing Page

This repository contains the React/TanStack Start landing page published as `www.smartrural.com.br` through the repository-root GitHub Pages export. The application presents SmartRural's aquaculture and aviculture monitoring proposition as a single responsive page with static content, local assets, and client-side interaction.

## Start here

| Need | Guide |
| --- | --- |
| Understand runtime composition and export flow | [Application architecture](docs/architecture.md) |
| Find code and asset responsibilities | [Repository structure](docs/repository-structure.md) |
| Install or update dependencies safely | [Dependencies and toolchain](docs/dependencies.md) |
| Use the shared development environment | [Dev Container guide](.devcontainer/README.md) |
| Add or change file-based routes | [Route conventions](src/routes/README.md) |
| Write or review technical documentation | [Documentation standard](docs/documentation-standard.md) |

## Prerequisites

Use Node.js `24.20.0` from [.nvmrc](.nvmrc). The Dev Container pins npm `11.19.1` through [.devcontainer/tool-versions.sh](.devcontainer/tool-versions.sh); for a clean local checkout, install dependencies with `npm ci` using a compatible npm release.

## Common commands

Run these commands from the repository root unless a guide states otherwise.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependency graph from `package-lock.json`. |
| `npm run dev -- --host 0.0.0.0` | Start the Vite development server on the forwarded container or local host interface. |
| `npm run lint` | Check application and build-script source with ESLint. |
| `npx tsc --noEmit` | Run the TypeScript compiler without emitting files. |
| `npm run build` | Produce the production `.output` build; its prebuild hook clears the tracked Pages-root export first. |
| `npm run build:pages` | Build, server-render the home route, and refresh the tracked GitHub Pages root. |
| `bash .devcontainer/scripts/validate.sh static` | Validate the Dev Container contract without starting a container. |

The full container-backed validation command is documented in [.devcontainer/README.md](.devcontainer/README.md). Use the [architecture guide](docs/architecture.md) for the distinction between the application build and the Pages export.

## GitHub Pages deployment

GitHub Pages serves the generated root files, including `index.html`, `assets/`, `_headers`, and the public metadata files. `CNAME` keeps the custom domain configured; run `npm run build:pages` when source or public assets change and review the generated root diff before publishing.

## Documentation ownership

The root README owns the repository entrypoint and common commands. Cross-cutting technical references live in [docs/](docs/README.md), route-specific guidance lives beside `src/routes`, and Dev Container behavior remains owned by [.devcontainer/README.md](.devcontainer/README.md). The copied [documentation standard](docs/documentation-standard.md) defines the evidence, structure, and maintenance rules for future technical docs.
