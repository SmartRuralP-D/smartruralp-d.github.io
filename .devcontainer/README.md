# SmartRural Landing Page Dev Container

This Dev Container runs the SmartRural landing page on the Base image, adding Node.js, npm, Vite ports, volumes, and validation.

## Base image

This Dev Container extends `ghcr.io/smartruralp-d/base-devcontainer` at the tag pinned in [devcontainer.json](devcontainer.json) and, for an overlay, [Dockerfile](Dockerfile). The Base owns the shells, Git, GitHub CLI, Codex, AGY, the Docker client, shared named volumes, host import, credential sharing, lifecycle repair, and `doctor.sh`; this repository adds only the tooling, state, lifecycle steps, and validation described below. The vendored `host-import.compose.yml`, `.env.example`, and `initializeCommand` follow the Base consumer contract and are not edited locally.

| Topic | Canonical Base document |
| --- | --- |
| Host prerequisites, consumer contract, overlay rules | [devcontainer.md](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/devcontainer.md) |
| Host import, `.devcontainer/.env` overrides, SSH agent forwarding | [host-integration.md](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/host-integration.md) |
| Tool authentication and credential sharing; `doctor.sh` states | [authentication.md](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/authentication.md) |
| GHCR image access | [access.md](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/access.md) |
| Release model and tags | [release.md](https://github.com/SmartRuralP-D/base-devcontainer/blob/main/docs/release.md) |

If the container does not start, follow the linked Base guides for host prerequisites, GHCR access, and host import. Once it runs, `bash /usr/local/share/smartrural/devcontainer/scripts/doctor.sh` reports Base-owned state and `validate-base-contract.sh` in the same directory validates the Base contract. Fix Base defects in the base-devcontainer repository, not in this one.

## Project setup

| Item | Value | Source |
| --- | --- | --- |
| Node.js | `24.20.0`, installed into the image | [.nvmrc](../.nvmrc) |
| NVM, npm | `v0.40.3`, `11.19.1` | [tool-versions.sh](tool-versions.sh) |
| Volumes | `smartruralp-d-github-io-node-modules` at `/workspace/node_modules`; `smartruralp-d-github-io-npm-cache` at `/home/vscode/.npm` | [devcontainer.json](devcontainer.json) |
| Container environment | `NODE_OPTIONS=--dns-result-order=ipv4first`, `SMART_RURAL_LANDING_DEVCONTAINER=1` | [devcontainer.json](devcontainer.json) |
| Ports | `5173` Vite dev server, `4173` Vite preview | [devcontainer.json](devcontainer.json) |

`postCreateCommand` runs [post-create.sh](scripts/post-create.sh) for Node activation, [ensure-project-state.sh](scripts/ensure-project-state.sh), a `package-lock.json` check, and `npm ci --prefer-offline --no-audit`. `postStartCommand` runs [post-start.sh](scripts/post-start.sh) for Node activation and state checks.

Start Vite in the container with `npm run dev -- --host 0.0.0.0`, then open forwarded port `5173`.

## Validation

| Command | Runs in | Checks |
| --- | --- | --- |
| `bash .devcontainer/scripts/validate.sh static` | Host | Shell and `.nvmrc` syntax, Base consumer assets, `devcontainer.json` contract. Needs `zsh`, `node`, `git`. |
| `bash .devcontainer/scripts/validate.sh runtime` | Container | [validate-project.sh](scripts/validate-project.sh): `npm ci`, lint, `tsc`, build, `build:pages`, `validate:pages`, then Node, Vite on `5173`, and Docker checks. |

`validate-project.sh` runs `build:pages`, which rewrites the tracked Pages root in the mounted worktree; review that diff afterwards. CI runs [devcontainer.yml](../.github/workflows/devcontainer.yml) on `.devcontainer/` changes through the reusable [devcontainer-consumer.yml](https://github.com/SmartRuralP-D/workflows/blob/main/docs/devcontainer-consumer.md) workflow, pinned in that file.

## Failure boundaries

- After a missing `.nvmrc` version error, rebuild with `devcontainer up --workspace-folder . --remove-existing-container`, not `nvm install`.
- `ensure-project-state.sh` repairs volume ownership with `sudo` and fails when `sudo` is unavailable.
- If the host cannot reach the page, confirm that Vite listens on container port `5173`.

### Known gaps

- `validate-base-contract.sh` is not invoked by project scripts or workflows.
- `DEVCONTAINER_CLI_VERSION` in `tool-versions.sh` is unused.
- `.github/workflows/README.md` omits `devcontainer.yml`.

## Related documents

- [Documentation index](../docs/README.md)
- [CI/CD workflows](../.github/workflows/README.md)
