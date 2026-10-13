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

npm run build

printf 'PASS landing-page project runtime validation\n'
