#!/usr/bin/env zsh

export NVM_DIR="${NVM_DIR:-/home/vscode/.nvm}"

if [[ -r "$NVM_DIR/nvm.sh" && -r /workspace/.nvmrc ]]; then
    source "$NVM_DIR/nvm.sh"

    expected_version="$(tr -d '[:space:]' < /workspace/.nvmrc)"
    installed_version="$(nvm version "$expected_version")"
    if [[ "$installed_version" != "v$expected_version" ]]; then
        print -u2 -- "Node.js $expected_version from /workspace/.nvmrc is not installed in this Dev Container. Rebuild the Dev Container:"
        print -u2 -- "  devcontainer up --workspace-folder . --remove-existing-container"
        return 1
    fi

    nvm use --silent "$expected_version" >/dev/null
fi
