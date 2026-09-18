ARG BASE_IMAGE=ghcr.io/smartruralp-d/base-devcontainer:v1.7.1
FROM ${BASE_IMAGE}

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV DEBIAN_FRONTEND=noninteractive \
    NVM_DIR=/home/vscode/.nvm

COPY .devcontainer/tool-versions.sh /tmp/tool-versions.sh
COPY .nvmrc /tmp/.nvmrc
COPY --chown=vscode:vscode .devcontainer/scripts/profile-nvm.sh /home/vscode/.config/smartrural-nvm.sh
COPY --chown=vscode:vscode .devcontainer/scripts/profile-nvm.zsh /home/vscode/.config/smartrural-nvm.zsh

RUN set -eux; \
    . /tmp/tool-versions.sh; \
    install -d -o vscode -g vscode "$NVM_DIR" /home/vscode/.config/smartrural-zsh; \
    su -s /bin/bash vscode -c "export NVM_DIR='$NVM_DIR'; curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/${DEVCONTAINER_NVM_VERSION}/install.sh | PROFILE=/dev/null bash"; \
    node_version="$(tr -d '[:space:]' < /tmp/.nvmrc)"; \
    case "$node_version" in ''|*[!0-9.]*|*.*.*.*) echo "Invalid Node version: $node_version" >&2; exit 1;; esac; \
    su -s /bin/bash vscode -c "export NVM_DIR='$NVM_DIR'; source \"$NVM_DIR/nvm.sh\"; nvm install '$node_version'; nvm alias default '$node_version'; npm install --global npm@${DEVCONTAINER_NPM_VERSION}; nvm cache clear"; \
    printf '%s\n' 'source /home/vscode/.config/smartrural-nvm.sh' >> /home/vscode/.bashrc; \
    printf '%s\n' 'source /home/vscode/.config/smartrural-nvm.zsh' > /home/vscode/.config/smartrural-zsh/.zshenv; \
    chown vscode:vscode /home/vscode/.config/smartrural-zsh/.zshenv; \
    rm -f /tmp/tool-versions.sh

RUN set -eux; \
    chmod 0644 /home/vscode/.config/smartrural-nvm.sh /home/vscode/.config/smartrural-nvm.zsh /home/vscode/.config/smartrural-zsh/.zshenv; \
    . "$NVM_DIR/nvm.sh"; \
    node_version="$(tr -d '[:space:]' < /tmp/.nvmrc)"; \
    nvm use --silent "$node_version" >/dev/null; \
    node --version; \
    npm --version; \
    rm -f /tmp/.nvmrc
