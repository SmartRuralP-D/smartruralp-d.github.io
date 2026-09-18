#!/usr/bin/env bash

set -euo pipefail

cd /workspace
source .devcontainer/scripts/use-node.sh

test "$(node --version)" = "v$(tr -d '[:space:]' < .nvmrc)"
test -x "$(command -v node)"
test -x "$(command -v npm)"
test -d node_modules
npm ci --prefer-offline --no-audit
npm run lint
npx tsc --noEmit

# The documented build intentionally removes the tracked Pages-root export.
# Run it in an isolated checkout so validation leaves the mounted worktree
# unchanged while still exercising the real build command.
build_workspace="$(mktemp -d)"
cleanup() {
    rm -rf "$build_workspace"
}
trap cleanup EXIT
rsync -a --exclude=node_modules --exclude=.output --exclude=.wrangler ./ "$build_workspace/"
ln -s /workspace/node_modules "$build_workspace/node_modules"
(cd "$build_workspace" && npm run build)

printf 'PASS landing-page project runtime validation\n'
