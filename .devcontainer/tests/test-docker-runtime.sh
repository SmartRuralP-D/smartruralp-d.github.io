#!/usr/bin/env bash

set -euo pipefail

docker --version
docker compose version
docker buildx version
docker info >/dev/null
printf 'PASS inherited Docker runtime validation\n'
