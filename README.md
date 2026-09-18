# SmartRural landing page

This repository hosts `www.smartrural.com.br` through the existing GitHub Pages
branch-root deployment. The landing page source is the React/TanStack Start
application in `src/`, with its source assets in `public/`.

## Local development

```sh
npm install
npm run dev
```

## GitHub Pages export

GitHub Pages serves the generated files at the repository root. Build and export
the application with:

```sh
npm run build:pages
```

The command builds the application, server-renders the home route, and copies
the generated HTML, JavaScript, CSS, and public assets to the root. `CNAME` is
preserved for the custom domain.
