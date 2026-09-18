#!/usr/bin/env bash

set -euo pipefail

repo_root=/workspace
if [[ ! -d "$repo_root" ]]; then
    repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
fi
cd "$repo_root"

source .devcontainer/scripts/use-node.sh
bash .devcontainer/scripts/ensure-project-state.sh
printf 'SmartRural landing-page Dev Container post-start completed successfully.\n'
