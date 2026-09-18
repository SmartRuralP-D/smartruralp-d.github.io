#!/usr/bin/env bash

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ -f /workspace/.nvmrc ]]; then
    repo_root=/workspace
else
    repo_root="$(cd "$script_dir/../.." && pwd)"
fi

nvm_dir="${NVM_DIR:-/home/vscode/.nvm}"
nvm_script="$nvm_dir/nvm.sh"
nvmrc="$repo_root/.nvmrc"

if [[ ! -s "$nvm_script" ]]; then
    printf 'NVM is unavailable: %s\n' "$nvm_script" >&2
    return 1 2>/dev/null || exit 1
fi

if [[ ! -f "$nvmrc" ]]; then
    printf 'Node version file is unavailable: %s\n' "$nvmrc" >&2
    return 1 2>/dev/null || exit 1
fi

# shellcheck disable=SC1090
source "$nvm_script"

expected_version="$(tr -d '[:space:]' < "$nvmrc")"
installed_version="$(nvm version "$expected_version")"
if [[ "$installed_version" != "v$expected_version" ]]; then
    printf 'Node.js %s from %s is not installed in this Dev Container. Rebuild the Dev Container after changing .nvmrc, for example:\n' \
        "$expected_version" "$nvmrc" >&2
    printf '  devcontainer up --workspace-folder . --remove-existing-container\n' >&2
    return 1 2>/dev/null || exit 1
fi

nvm use --silent "$expected_version" >/dev/null
