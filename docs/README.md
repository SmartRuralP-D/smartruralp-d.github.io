# Technical Documentation

This directory contains the cross-cutting technical documentation for the SmartRural landing page. The pages describe the current TanStack Start runtime, source and generated-file boundaries, dependency contracts, and documentation maintenance rules. The [documentation standard](documentation-standard.md) is copied from the SmartRural frontend repository and is the writing and evidence authority for these guides.

## Start here

| Document | Use it for |
| --- | --- |
| [Application architecture](architecture.md) | Runtime composition, route ownership, error handling, assets, and GitHub Pages export. |
| [Repository structure](repository-structure.md) | Directory responsibilities, generated artifacts, import aliases, and placement rules. |
| [Dependencies and toolchain](dependencies.md) | npm installation, lockfile policy, direct dependency groups, and version ownership. |
| [Documentation standard](documentation-standard.md) | Document shape, evidence, link checks, and maintenance acceptance criteria. |

## Operational documentation

Operational instructions remain with the subsystem that owns them:

- [Dev Container setup and validation](../.devcontainer/README.md)
- [Route conventions](../src/routes/README.md)
- [Repository entrypoint and common commands](../README.md)

This repository has no checked-in `.github/workflows/` or `deployment/` directory. GitHub Pages publication consumes the generated repository-root files; the build and export ownership is described in [Application architecture](architecture.md).

## Documentation ownership

The root README is the short entrypoint and common-command guide. This directory owns cross-cutting references; `.devcontainer/README.md` owns container lifecycle and validation; `src/routes/README.md` owns route placement. Keep one canonical owner for each command or contract and link to it instead of duplicating instructions.

When implementation and documentation disagree, verify executable code, configuration, manifests, and tests first. Correct the affected guide and its index together, then run the relevant validation and link checks described by the documentation standard.
