#!/usr/bin/env bash

set -euo pipefail

node_modules_dir="${SMART_RURAL_LANDING_NODE_MODULES_DIR:-/workspace/node_modules}"
npm_cache_dir="${SMART_RURAL_LANDING_NPM_CACHE_DIR:-/home/vscode/.npm}"

ensure_sudo() {
    if ! command -v sudo >/dev/null 2>&1 || ! sudo -n true >/dev/null 2>&1; then
        printf 'Cannot repair landing-page Dev Container state: sudo is unavailable.\n' >&2
        exit 1
    fi
}

probe_writable_dir() {
    local dir="$1"
    local probe="$dir/.devcontainer-write-check.$$"

    if touch "$probe" 2>/dev/null; then
        rm -f "$probe"
        return 0
    fi
    return 1
}

repair_dir() {
    local dir="$1"

    mkdir -p "$dir"
    if probe_writable_dir "$dir"; then
        return 0
    fi

    ensure_sudo
    if sudo chown vscode:vscode "$dir" && probe_writable_dir "$dir"; then
        printf 'Repaired landing-page state directory ownership: %s\n' "$dir"
        return 0
    fi
    if sudo chown -R vscode:vscode "$dir" && probe_writable_dir "$dir"; then
        printf 'Recursively repaired landing-page state directory ownership: %s\n' "$dir"
        return 0
    fi

    printf 'Landing-page state directory is not writable by vscode: %s\n' "$dir" >&2
    exit 1
}

repair_dir "$node_modules_dir"
repair_dir "$npm_cache_dir"
printf 'SmartRural landing-page state is ready.\n'
