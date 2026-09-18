#!/usr/bin/env bash

set -euo pipefail

bash .devcontainer/tests/test-project-runtime.sh
bash .devcontainer/tests/test-dev-server.sh
bash .devcontainer/tests/test-docker-runtime.sh
