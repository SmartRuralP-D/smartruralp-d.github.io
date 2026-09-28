#!/usr/bin/env bash

set -euo pipefail

source .devcontainer/scripts/use-node.sh
npm ci --prefer-offline --no-audit
npm run lint
npx tsc --noEmit
npm run build
npm run build:pages
npm run validate:pages

bash .devcontainer/tests/test-project-runtime.sh
bash .devcontainer/tests/test-dev-server.sh
bash .devcontainer/tests/test-docker-runtime.sh
