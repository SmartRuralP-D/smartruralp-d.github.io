#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$repo_root"

mode="${1:-auto}"

case "$mode" in
    auto)
        bash .devcontainer/tests/test-static-validation.sh
        if [[ "${SMART_RURAL_LANDING_DEVCONTAINER:-0}" == "1" ]]; then
            bash .devcontainer/scripts/validate-project.sh
        else
            printf 'Static Dev Container validation passed. Run this command inside the Dev Container for runtime validation.\n'
        fi
        ;;
    static)
        bash .devcontainer/tests/test-static-validation.sh
        ;;
    runtime)
        bash .devcontainer/scripts/validate-project.sh
        ;;
    *)
        printf 'Unsupported validation mode: %s\n' "$mode" >&2
        printf 'Supported validation modes: auto, static, runtime\n' >&2
        exit 1
        ;;
esac
