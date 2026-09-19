# Application Architecture

The repository is a small React/TanStack Start landing page built by Vite and published as a static GitHub Pages export. The runtime has one root shell, a home route, and a privacy-policy route, with server-rendered HTML generated during the build and client-side interaction for navigation, scroll state, and testimonial selection. The authoritative implementation is in `src/`, `vite.config.ts`, and the two Pages export scripts.

## Runtime composition

The request and build flow is:

```text
Vite/TanStack Start configuration (`vite.config.ts`)
    ↓
TanStack router factory (`src/router.tsx`)
    ↓
generated route tree (`src/routeTree.gen.ts`)
    ├─ root shell (`src/routes/__root.tsx`)
    │   ├─ document metadata and global stylesheet
    │   ├─ QueryClientProvider
    │   └─ nested route outlet
    ├─ home route (`src/routes/index.tsx`)
    │   ├─ `HomePage` composition
    │   ├─ shared site components (`src/components/site`)
    │   ├─ landing sections (`src/components/landing`)
    │   └─ typed static content/media (`src/content/landing.ts`)
    └─ privacy-policy route (`src/routes/privacy-policy.tsx`)
        └─ policy page composition (`src/components/legal/privacy-policy-page.tsx`)
```

`src/start.ts` registers the TanStack Start request middleware. It preserves HTTP status errors, renders the repository error page for unexpected failures, and applies CSRF protection to server functions. `src/server.ts` loads the TanStack server entry lazily, normalizes h3's swallowed catastrophic SSR response, and returns the HTML error page when server handling fails. `src/lib/error-capture.ts` and `src/lib/lovable-error-reporting.ts` provide the error capture and development reporting boundaries used by the application.

## Application boundaries

| Boundary | Responsibility | Source |
| --- | --- | --- |
| `src/routes` | File-based route modules, document metadata, page composition, and route-level error UI. | [Route guide](../src/routes/README.md) |
| `src/components/landing` | SmartRural landing-page sections and section-local interactions. | Home-page section components |
| `src/components/site` | Shared landing shell pieces such as the header, footer, brand, labels, and text links. | Site components |
| `src/content` | Typed local content, navigation, media paths, and repeated landing-page data. | `landing.ts` |
| `src/components/ui` | Reusable Radix-based UI primitives and presentation helpers. | [UI components](../src/components/ui) |
| `src/hooks` | Small reusable browser hooks, currently including responsive viewport behavior. | [Hooks](../src/hooks) |
| `src/lib` | Error handling, Lovable reporting, error-page rendering, and class-name utilities. | [Library helpers](../src/lib) |
| `src/assets` | Source-managed images and asset metadata consumed by the application. | [Source assets](../src/assets) |
| `public` and root export | Browser-served static files and generated GitHub Pages output. | [Export script](../scripts/export-pages.mjs) |

The home route is intentionally content-oriented rather than API-driven. `src/routes/index.tsx` owns route metadata and delegates page composition to `HomePage`. The privacy-policy route owns its document metadata and delegates its policy layout to `PrivacyPolicyPage`; its policy wording remains in the page component so it can be reviewed as one document. The landing sections own their markup and local behavior, while repeated content and media paths live in `src/content/landing.ts`. Local UI state controls the mobile menu, header scroll treatment, and testimonial carousel; this repository does not define authentication, backend requests, or persistent application state.

## Build and publication flow

`vite.config.ts` delegates to `@lovable.dev/vite-tanstack-config` and points TanStack Start at `src/server.ts`. `npm run build` executes `scripts/clean-pages-root.mjs` first, then writes the production server and public output under `.output/`. `npm run build:pages` imports the built server, fetches the home route at `https://www.smartrural.com.br/`, exports the privacy-policy route both as `privacy-policy.html` and `/privacy-policy/index.html`, and copies the public output to the repository root. `CNAME` remains at the root for the custom domain; `_headers`, `robots.txt`, `favicon.png`, and `assets/` are part of the generated publication surface.

The cleanup step is deliberate and destructive to the generated root export. Run `npm run build:pages` when the goal is a refreshed Pages tree; run the ordinary production build in an isolated checkout when validation must leave the tracked root unchanged, as the Dev Container runtime test does.

## Validation boundaries

`npm run lint` checks `src/` and `scripts/`; `npx tsc --noEmit` checks the TypeScript project; and the production build verifies Vite, TanStack Start, SSR, and Nitro integration. `npm run build:pages` additionally verifies the server-rendered static export and generated root files, including the legacy-compatible `privacy-policy.html` file and `/privacy-policy/` directory export. Dev Container contract and runtime checks live under `.devcontainer/tests`; there are no application test files or workflow test suites in this repository at present.

## Sources

- [Vite/TanStack configuration](../vite.config.ts), [router factory](../src/router.tsx), and [generated route tree](../src/routeTree.gen.ts)
- [Start middleware](../src/start.ts), [server entry](../src/server.ts), and [root route](../src/routes/__root.tsx)
- [Home route](../src/routes/index.tsx), [production cleanup](../scripts/clean-pages-root.mjs), and [Pages export](../scripts/export-pages.mjs)
- [Dev Container validation](../.devcontainer/README.md)
