# CI/CD Workflows

This repository uses GitHub Actions to validate the React/TanStack Start landing page before changes reach `dev` or `main`.

## Workflow map

| Workflow | Trigger                                                         | Responsibility                                                                                                                            |
| -------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `ci.yml` | Pull requests and pushes for `dev`/`main`, plus manual dispatch | Selects a suitable runner, installs the locked npm dependency graph, runs ESLint, runs TypeScript validation, and builds the application. |

The CI workflow first calls the shared SmartRural runner selector at `v1.12.0`, preferring a self-hosted Linux x64 runner with the labels `self-hosted`, `Linux`, and `X64`, then falling back according to the selector’s `prefer-self-hosted` policy. It reads the Node.js version from [`.nvmrc`](../../.nvmrc), uses npm caching through `actions/setup-node`, and scopes obsolete pull-request runs through a concurrency group. GitHub Pages deployment is handled by [pages.yml](pages.yml), which builds and validates `.output/public/`, copies in `CNAME`, and uploads that directory as the Pages artifact. The CI workflow validates the application build.

The selector requires the repository variable `RUNNER_SELECTOR_APP_CLIENT_ID` and secret `RUNNER_SELECTOR_APP_PRIVATE_KEY`. These credentials are passed only to the reusable selector workflow; the selected `runs-on` value is then consumed by the validation job.
