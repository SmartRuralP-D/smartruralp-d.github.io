#!/usr/bin/env bash

set -euo pipefail

repo_root=/workspace
if [[ ! -d "$repo_root" ]]; then
    repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
fi
cd "$repo_root"

source .devcontainer/scripts/use-node.sh
bash .devcontainer/scripts/ensure-project-state.sh

if [[ ! -f package-lock.json ]]; then
    printf 'package-lock.json is required for reproducible Dev Container setup.\n' >&2
    exit 1
fi

npm ci --prefer-offline --no-audit
printf '\nSmartRural landing-page Dev Container post-create completed successfully.\n'
