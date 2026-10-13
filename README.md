# SmartRural Landing Page

This repository contains the React/TanStack Start landing page published as `www.smartrural.com.br` through a GitHub Pages build artifact. The application presents SmartRural's aquaculture and aviculture monitoring proposition as a single responsive page with static content, local assets, and client-side interaction.

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

Use Node.js `24.20.0` from [.nvmrc](.nvmrc). The Dev Container toolchain is described in [.devcontainer/README.md](.devcontainer/README.md); for a clean local checkout, install dependencies with `npm ci` using a compatible npm release.

## Common commands

Run these commands from the repository root unless a guide states otherwise.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependency graph from `package-lock.json`. |
| `npm run dev -- --host 0.0.0.0` | Start the Vite development server on the forwarded container or local host interface. |
| `npm run lint` | Check application and build-script source with ESLint. |
| `npx tsc --noEmit` | Run the TypeScript compiler without emitting files. |
| `npm run build` | Produce the production build under `.output/`. |
| `npm run build:pages` | Build and generate the static GitHub Pages site under `.output/public/`. |

Dev Container setup, lifecycle, and validation are documented in [.devcontainer/README.md](.devcontainer/README.md). Use the [architecture guide](docs/architecture.md) for the distinction between the application build and the Pages export.

## GitHub Pages deployment

The Pages workflow validates and uploads `.output/public/` as its deployment artifact, including `index.html`, route exports, assets, headers, and public metadata. It copies the tracked `CNAME` into that artifact before upload. Run `npm run build:pages` when source or public assets change; generated output stays in the gitignored `.output/` directory.

## Documentation ownership

The root README owns the repository entrypoint and common commands. Cross-cutting technical references live in [docs/](docs/README.md), route-specific guidance lives beside `src/routes`, and Dev Container behavior remains owned by [.devcontainer/README.md](.devcontainer/README.md). The copied [documentation standard](docs/documentation-standard.md) defines the evidence, structure, and maintenance rules for future technical docs.
