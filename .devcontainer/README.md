# SmartRural Landing Page Dev Container

This repository is an overlay consumer of the [SmartRural Base Dev Container contract](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/devcontainer.md). Base owns Git, GitHub CLI, Codex, AGY, Bash/Zsh, Docker outside Docker, shared state volumes, host-state import, and the common lifecycle; this overlay adds only Node/npm, Vite ports, and landing-page dependency state.

## Prerequisites

The normal startup path requires Docker Engine or Docker Desktop, Docker Compose v2.24 or newer, a Dev Containers client, and access to the private Base image in GHCR. Host NVM is optional because Node `24.20.0` is installed into the image from [.nvmrc](../.nvmrc); authenticate Docker to GHCR before the first build when the image is not already available locally.

## Current contract

| Concern | Owner | Consumer behavior |
| --- | --- | --- |
| Shared tooling, credentials, shell state, Docker, and lifecycle | Base image metadata | Inherited from `ghcr.io/smartruralp-d/base-devcontainer:v1.7.1`; this repository does not duplicate the Base mounts or Docker feature. |
| Portable host state | [host-import.compose.yml](host-import.compose.yml) and [contract.json](contract.json) | Staged through the canonical `initializeCommand`; `.env` is optional and must not contain secrets. |
| Node/npm | [Dockerfile](Dockerfile), [.nvmrc](../.nvmrc), and [tool-versions.sh](tool-versions.sh) | Installed at image build time and activated for Bash, Zsh, and lifecycle commands. |
| Project dependencies | [devcontainer.json](devcontainer.json) | Stored in the repo-scoped `node_modules` and npm-cache named volumes. |
| Project validation | [validate.sh](scripts/validate.sh) and [tests/](tests/) | Runs static contract checks on the host and application/runtime checks inside the container. |

## Startup and lifecycle

From the repository root, build or recreate the environment with:

```bash
devcontainer up --workspace-folder . --remove-existing-container
```

The client first runs the shell-free Compose host-import bridge, then builds the overlay image if necessary, starts the workspace at `/workspace`, runs Base post-create and post-start lifecycle, and finally installs dependencies with `npm ci`. The consumer lifecycle validates that the exact `.nvmrc` version is already installed; it never downloads Node at runtime. The canonical host-import contract is copied from the Base repository and should be updated atomically if the Base contract changes.

Start the landing page inside the container with:

```bash
npm run dev -- --host 0.0.0.0
```

Open forwarded port `5173` for Vite development or use port `4173` for `npm run preview`. The container owns project dependency state; Base-owned Git, GH, Codex, AGY, Docker, SSH, and shell-history volumes are shared according to the Base contract.

## Validation

Run static validation from the host:

```bash
bash .devcontainer/scripts/validate.sh static
```

Inside a running container, validate the inherited Base contract and then the project:

```bash
bash .devcontainer/scripts/validate-base-contract.sh
bash .devcontainer/scripts/validate.sh runtime
```

Runtime validation covers npm installation, ESLint, TypeScript, the production build in an isolated checkout, Vite startup, and Docker/Compose/Buildx reachability. ESLint currently reports six existing non-fatal Fast Refresh warnings in UI components; they do not fail the command.

## Troubleshooting and failure boundaries

If Node activation reports that the `.nvmrc` version is missing, rebuild the container instead of running `nvm install` in a lifecycle hook. If the host cannot reach the forwarded page, first verify that Vite is listening on container port `5173`; the container's internal IP is not the host URL. If GH, AGY, or SSH diagnostics report degraded authentication, distinguish portable imported configuration from live credentials and follow the Base troubleshooting guide.

## Sources

- [Consumer configuration](devcontainer.json), [overlay image](Dockerfile), and [tool versions](tool-versions.sh)
- [Project validation entrypoint](scripts/validate.sh) and [runtime tests](tests/)
- [Base Dev Container contract](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/devcontainer.md)
- [Documentation standard](../docs/documentation-standard.md)
