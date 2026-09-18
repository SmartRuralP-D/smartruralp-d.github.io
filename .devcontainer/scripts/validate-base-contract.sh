#!/usr/bin/env bash

set -euo pipefail

validator="${SMART_RURAL_DEVCONTAINER_HOME:-/usr/local/share/smartrural/devcontainer}/scripts/validate-base-contract.sh"
if [[ ! -x "$validator" ]]; then
    printf 'SmartRural base validator is unavailable: %s\n' "$validator" >&2
    exit 1
fi

exec bash "$validator"
