#!/usr/bin/env bash

set -euo pipefail

cd /workspace
log_file="$(mktemp)"
server_pid=''
cleanup() {
    if [[ -n "$server_pid" ]]; then
        kill "$server_pid" >/dev/null 2>&1 || true
        wait "$server_pid" >/dev/null 2>&1 || true
    fi
    rm -f "$log_file"
}
trap cleanup EXIT

npm run dev -- --host 127.0.0.1 --port 5173 >"$log_file" 2>&1 &
server_pid=$!

for _ in {1..30}; do
    if curl --fail --silent --show-error http://127.0.0.1:5173/ >/dev/null 2>&1; then
        printf 'PASS Vite dev server runtime validation\n'
        exit 0
    fi
    sleep 1
done

cat "$log_file" >&2
printf 'Vite dev server did not become ready on port 5173.\n' >&2
exit 1
