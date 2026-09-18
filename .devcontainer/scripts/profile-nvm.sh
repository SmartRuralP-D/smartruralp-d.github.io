#!/usr/bin/env bash

export NVM_DIR="${NVM_DIR:-/home/vscode/.nvm}"

node_activation_script=/workspace/.devcontainer/scripts/use-node.sh
if [[ ! -r "$node_activation_script" && -n "${LOCAL_WORKSPACE_FOLDER:-}" ]]; then
    node_activation_script="$LOCAL_WORKSPACE_FOLDER/.devcontainer/scripts/use-node.sh"
fi
if [[ -r "$node_activation_script" ]]; then
    # shellcheck disable=SC1090
    source "$node_activation_script"
fi
