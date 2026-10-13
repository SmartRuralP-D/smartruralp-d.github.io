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
| `src/assets` | Reserved source-asset directory; landing-page media is served from `public/assets`. | [Source assets](../src/assets) |
| `public` and Pages artifact | Browser-served static files and generated GitHub Pages output under `.output/public/`. | [Export script](../scripts/export-pages.mjs) |

The home route is intentionally content-oriented rather than API-driven. `src/routes/index.tsx` owns route metadata and delegates page composition to `HomePage`. The privacy-policy route owns its document metadata and delegates its policy layout to `PrivacyPolicyPage`; its policy wording remains in the page component so it can be reviewed as one document. The landing sections own their markup and local behavior, while repeated content and media paths live in `src/content/landing.ts`. Local UI state controls the mobile menu, header scroll treatment, and testimonial carousel; this repository does not define authentication, backend requests, or persistent application state.

## Build and publication flow

`vite.config.ts` delegates to `@lovable.dev/vite-tanstack-config` and points TanStack Start at `src/server.ts`. `npm run build` writes the production server and public output under `.output/`. `npm run build:pages` imports the built server, fetches each route at `https://www.smartrural.com.br/`, and writes the home and route HTML into `.output/public/`, including both `privacy-policy.html` and `/privacy-policy/index.html`. The Pages workflow copies the tracked `CNAME` into `.output/public/` and uploads that directory as its deployment artifact; `_headers`, `robots.txt`, favicons, and bundled assets are included from the public build output.

The `.output/` directory is gitignored, so both ordinary build output and the Pages artifact stay out of the source diff. Run `npm run build:pages` and `npm run validate:pages` to refresh and check the deployable artifact.

## Validation boundaries

`npm run lint` checks `src/` and `scripts/`; `npx tsc --noEmit` checks the TypeScript project; and the production build verifies Vite, TanStack Start, SSR, and Nitro integration. `npm run build:pages` generates the server-rendered static artifact, while `npm run validate:pages` checks its expected route files, including the legacy-compatible `privacy-policy.html` file and `/privacy-policy/` directory export. Dev Container contract and runtime checks live under `.devcontainer/tests`; there are no application test files or workflow test suites in this repository at present.

## Sources

- [Vite/TanStack configuration](../vite.config.ts), [router factory](../src/router.tsx), and [generated route tree](../src/routeTree.gen.ts)
- [Start middleware](../src/start.ts), [server entry](../src/server.ts), and [root route](../src/routes/__root.tsx)
- [Home route](../src/routes/index.tsx), [Pages export](../scripts/export-pages.mjs), and [Pages workflow](../.github/workflows/pages.yml)
- [Dev Container validation](../.devcontainer/README.md)
