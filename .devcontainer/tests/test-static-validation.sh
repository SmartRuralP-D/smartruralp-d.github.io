#!/usr/bin/env bash

set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

test -s .nvmrc
grep -Eq '^[0-9]+\.[0-9]+\.[0-9]+$' .nvmrc

shell_files=(
    .devcontainer/scripts/*.sh
    .devcontainer/tests/*.sh
)
for shell_file in "${shell_files[@]}"; do
    bash -n "$shell_file"
done
zsh -n .devcontainer/scripts/profile-nvm.zsh

for asset in .devcontainer/host-import.compose.yml .devcontainer/.env.example .devcontainer/contract.json; do
    test -s "$asset" || { printf 'Missing Base consumer asset: %s\n' "$asset" >&2; exit 1; }
done

if grep -nE 'nvm[[:space:]]+install' .devcontainer/scripts/use-node.sh .devcontainer/scripts/post-create.sh .devcontainer/scripts/post-start.sh; then
    printf 'Runtime lifecycle must not install Node with nvm.\n' >&2
    exit 1
fi

if grep -nE 'docker\.sock|docker-outside-of-docker|/var/run/docker' .devcontainer/Dockerfile .devcontainer/devcontainer.json; then
    printf 'Consumer overlay must inherit Docker support from Base.\n' >&2
    exit 1
fi

node <<'EOF'
const fs = require('node:fs')
const config = JSON.parse(fs.readFileSync('.devcontainer/devcontainer.json', 'utf8'))
const contract = JSON.parse(fs.readFileSync('.devcontainer/contract.json', 'utf8'))
const expectedInitializeCommand = [
  'docker', 'compose', '-p', 'smartrural-host-import-${devcontainerId}',
  '--project-directory', '${localWorkspaceFolder}/.devcontainer', '-f',
  '${localWorkspaceFolder}/.devcontainer/host-import.compose.yml', 'run', '--rm', '--no-deps', 'host-import'
]
const baseEnvs = ['CODEX_HOME', 'AGY_CLI_DISABLE_AUTO_UPDATE', 'AGY_STATE_DIR', 'DOCKER_CONFIG', 'GH_CONFIG_DIR', 'GIT_CONFIG_GLOBAL', 'LANG', 'LC_ALL', 'LOCAL_WORKSPACE_FOLDER', 'SMART_RURAL_DEVCONTAINER_HOME', 'TZ', 'ZDOTDIR']
const baseTargets = ['/commandhistory', '/home/vscode/.codex', '/home/vscode/.gemini', '/home/vscode/.config/gh', '/home/vscode/.config/git', '/home/vscode/.docker', '/home/vscode/.ssh', '/mnt/smartrural-import']
if (JSON.stringify(config.initializeCommand) !== JSON.stringify(expectedInitializeCommand)) throw new Error('initializeCommand must match the Base consumer contract')
if (JSON.stringify(contract.initializeCommand) !== JSON.stringify(expectedInitializeCommand)) throw new Error('contract.json initializeCommand drifted')
if ('remoteUser' in config) throw new Error('remoteUser must be inherited from Base metadata')
for (const key of baseEnvs) if (key in config.containerEnv) throw new Error(`Base env must not be duplicated: ${key}`)
for (const target of baseTargets) if (config.mounts.some((mount) => mount.includes(`target=${target},`))) throw new Error(`Base mount must not be duplicated: ${target}`)
for (const mount of ['source=smartruralp-d-github-io-node-modules,target=/workspace/node_modules,type=volume', 'source=smartruralp-d-github-io-npm-cache,target=/home/vscode/.npm,type=volume']) if (!config.mounts.includes(mount)) throw new Error(`Missing landing-page mount: ${mount}`)
if (!config.forwardPorts.includes(5173) || !config.forwardPorts.includes(4173)) throw new Error('Missing Vite ports')
if (!config.containerEnv.SMART_RURAL_LANDING_DEVCONTAINER) throw new Error('Missing project runtime marker')
EOF

printf 'PASS landing-page static Dev Container contract\n'
