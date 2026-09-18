# Repository Structure

The repository keeps application source, source assets, runtime static files, generated Pages output, build scripts, and Dev Container support at the top level. It uses TanStack Start file-based routing rather than a Next.js `app/` or `pages/` tree, and it does not contain a backend, API service, workflow directory, or deployment image definition.

## Top-level layout

```text
src/
  assets/       source images and asset metadata
  components/   reusable UI primitives
  hooks/        reusable browser hooks
  lib/          error handling, reporting, and shared helpers
  routes/       TanStack Start root and file-based routes
  router.tsx    router factory and QueryClient context
  start.ts      request and CSRF middleware
  server.ts     SSR/server-entry wrapper
public/         browser-served source assets and metadata
scripts/        Pages-root cleanup and static export tooling
.devcontainer/  Base Dev Container overlay, host import, and validation
docs/           cross-cutting technical documentation
assets/         generated GitHub Pages assets
index.html      generated GitHub Pages home document
CNAME           custom domain declaration
_headers        generated Pages cache headers
package.json    scripts and declared direct dependencies
package-lock.json  npm-resolved dependency graph
```

The repository also contains generated or tool-owned files such as `src/routeTree.gen.ts`, `dist`-like build output under `.output/`, the optional Bun lockfile, `components.json`, and TypeScript/Vite/ESLint configuration. Generated Pages-root files are tracked because GitHub Pages serves the repository root directly.

## Source placement rules

Add URLs and route-level composition under `src/routes`; preserve the root `<Outlet />` and update route metadata with the route that owns it. Put reusable visual primitives under `src/components/ui`, shared browser behavior under `src/hooks`, and cross-cutting error or class-name utilities under `src/lib`. Keep landing-page copy, section structure, and media mappings in `src/routes/index.tsx` unless a new shared boundary is justified by implementation.

Keep source-managed images and asset metadata in `src/assets`. Put files that must be available directly from the browser in `public`; the Pages export copies the resulting public output into the generated root. Put repository automation and export behavior in `scripts`; put container lifecycle and validation in `.devcontainer`; put cross-cutting explanations in `docs`.

## Imports and generated artifacts

The `@/*` TypeScript alias maps to `src/*` in [tsconfig.json](../tsconfig.json). Prefer that alias for application imports, as demonstrated by the home route. Do not edit `src/routeTree.gen.ts` manually; regenerate it through the TanStack tooling when route files change. The generated root assets and `index.html` are publication artifacts; update them through `npm run build:pages`, not by hand-editing hashed bundles.

## Non-source areas

`package.json`, `package-lock.json`, `.nvmrc`, and `.devcontainer/tool-versions.sh` define the Node/npm installation contract. `vite.config.ts` delegates shared TanStack/Vite integration to the Lovable configuration package. `CNAME`, `_headers`, `robots.txt`, `favicon.png`, and the root `assets/` directory belong to the GitHub Pages publication surface. There is currently no `.github/workflows/` or `deployment/` directory; do not document those as active subsystems until they exist.

## Validation and sources

Run `npm run lint`, `npx tsc --noEmit`, and the relevant production build after source-structure changes. Run `npm run build:pages` when the generated Pages root is part of the intended change, and run `.devcontainer/scripts/validate.sh` when container files change. See [Technical Documentation](README.md), [route conventions](../src/routes/README.md), and [Dev Container validation](../.devcontainer/README.md) for the owning procedures.
