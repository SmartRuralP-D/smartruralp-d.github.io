# Repository Structure

The repository keeps application source, source assets, runtime static files, generated Pages output, build scripts, Dev Container support, and GitHub Actions workflows at the top level. It uses TanStack Start file-based routing rather than a Next.js `app/` or `pages/` tree, and it does not contain a backend, API service, or deployment image definition.

## Top-level layout

```text
src/
  assets/       reserved source-asset directory
  components/   reusable UI primitives
  hooks/        reusable browser hooks
  lib/          error handling, reporting, and shared helpers
  routes/       TanStack Start root and file-based routes
  router.tsx    router factory and QueryClient context
  start.ts      request and CSRF middleware
  server.ts     SSR/server-entry wrapper
public/         browser-served static files and metadata
scripts/        Static Pages export and validation tooling
.devcontainer/  Base Dev Container overlay, host import, and validation
docs/           cross-cutting technical documentation
.output/        gitignored build output and Pages deployment artifact
CNAME           custom domain declaration, copied into the Pages artifact by CI
package.json    scripts and declared direct dependencies
package-lock.json  npm-resolved dependency graph
```

The repository also contains generated or tool-owned files such as `src/routeTree.gen.ts`, build output under `.output/`, the optional Bun lockfile, `components.json`, and TypeScript/Vite/ESLint configuration. The `.output/` directory is gitignored; GitHub Actions uploads `.output/public/` as the Pages artifact.

## Source placement rules

Add URLs and route-level composition under `src/routes`; preserve the root `<Outlet />` and update route metadata with the route that owns it. Put reusable visual primitives under `src/components/ui`, shared browser behavior under `src/hooks`, and cross-cutting error or class-name utilities under `src/lib`. Keep landing-page copy, section structure, and media mappings in `src/routes/index.tsx` unless a new shared boundary is justified by implementation.

Keep browser-served application media in `public/assets`; authored content references those files through the shared asset helper. Do not add generated asset metadata sidecars under `src/assets`. Put other files that must be available directly from the browser, such as robots metadata, in `public`; the Pages export collects them under `.output/public/`. Put repository automation and export behavior in `scripts`; put container lifecycle and validation in `.devcontainer`; put cross-cutting explanations in `docs`.

## Imports and generated artifacts

The `@/*` TypeScript alias maps to `src/*` in [tsconfig.json](../tsconfig.json). Prefer that alias for application imports, as demonstrated by the home route. Do not edit `src/routeTree.gen.ts` manually; regenerate it through the TanStack tooling when route files change. The generated HTML, assets, and metadata under `.output/public/` are publication artifacts; refresh them through `npm run build:pages`, not by hand-editing hashed bundles.

## Non-source areas

`package.json`, `package-lock.json`, `.nvmrc`, and `.devcontainer/tool-versions.sh` define the Node/npm installation contract. `vite.config.ts` delegates shared TanStack/Vite integration to the Lovable configuration package. `CNAME` is the tracked custom-domain declaration; `_headers`, `robots.txt`, favicons, route HTML, and bundled assets are collected in `.output/public/` for deployment. GitHub Actions workflows live under `.github/workflows/`.

## Validation and sources

Run `npm run lint`, `npx tsc --noEmit`, and the relevant production build after source-structure changes. Run `npm run build:pages` and `npm run validate:pages` when the Pages artifact is part of the intended change, and run `.devcontainer/scripts/validate.sh` when container files change. See [Technical Documentation](README.md), [route conventions](../src/routes/README.md), and [Dev Container validation](../.devcontainer/README.md) for the owning procedures.
