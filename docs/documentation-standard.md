# Documentation Standard

This document defines the format and evidence standard for technical documentation in the SmartRural frontend repository. It applies to architecture, repository structure, dependencies, development, deployment, CI/CD, and domain-specific technical guides.

## Documentation goals

Every document should help a reader answer one practical question quickly:

- What does this part of the repository do?
- Where is the behavior implemented?
- What contract or rule must be preserved?
- How is the behavior validated or operated?

Documents describe the current repository. They are not a changelog, design proposal, or replacement for executable configuration.

## Document ownership and placement

Use the narrowest appropriate location:

| Location                      | Responsibility                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `README.md`                   | Repository entrypoint, essential setup, common commands, and links to deeper guides. |
| `docs/`                       | Cross-cutting technical documentation and focused domain guides.                     |
| `.devcontainer/README.md`     | Dev Container setup, lifecycle, validation, and troubleshooting.                     |
| `.github/workflows/README.md` | Workflow triggers, orchestration, validation boundaries, and CI/CD contracts.        |
| `deployment/README.md`        | Image build, runtime configuration, packaging, and deployment behavior.              |
| A directory README            | Instructions specific to that directory when a standalone guide is useful.           |

Use lowercase kebab-case for new documents, except for a directory README. Add a document to the nearest index or related-docs section when one exists. Do not duplicate canonical commands or contracts across documents; link to the owning guide instead.

## Standard document shape

Use this order unless the subject requires a documented exception:

1. One clear title.
2. A two-to-four sentence summary stating purpose and scope.
3. Current behavior or contract.
4. Structure, flow, or ownership rules.
5. Commands, examples, or operational details only when needed.
6. Validation and failure boundaries.
7. Source references or related documents.

Prefer four to seven sections. Use tables for repeated mappings, short numbered flows for sequences, and diagrams only when they clarify ownership, dependencies, or state transitions better than prose. Keep examples executable and make their required directory, environment, or profile explicit.

## Usage and procedural guides

When a document exists primarily to guide an operation, such as setup, migration, deployment, recovery, or troubleshooting, optimize for safe execution rather than the standard reference-page shape. State prerequisites and execution context first, then present phases or numbered steps in the order they must be performed, with validation checks, stop conditions, and recovery guidance where relevant.

Keep reference material in its canonical document instead of repeating it inside the procedure. A procedural guide may exceed the normal section or size targets when the workflow requires it, but it should remain scoped to one operational goal.

## Size and writing rules

Target 500–900 words for a normal technical document. Treat approximately 1,200 words as the maximum for a single focused page; split a larger subject into linked documents. A runbook may be shorter. A reference table may be longer only when the table replaces repeated prose.

Do not hard-wrap prose in Markdown files. Keep each paragraph on a single physical line. Use blank lines only to separate paragraphs.

Write in concise, objective English:

- state the behavior before explaining its rationale;
- use present tense and concrete file paths;
- name the authoritative source for important contracts;
- describe constraints and failure behavior explicitly;
- avoid marketing language, speculation, and historical detail;
- use the repository’s exact command, environment variable, route, and directory names.

Do not document an intended future architecture as if it already exists. If a behavior is inferred, label it as an inference or verify it in code, configuration, or tests first.

## Evidence and source of truth

Choose evidence according to the claim:

1. Executable code, scripts, tests, and configuration establish current behavior.
2. Manifests and lockfiles establish declared and resolved dependency state.
3. Existing documentation establishes operational intent and user-facing procedure.
4. Commit history provides context, not the current contract.

When sources disagree, do not silently merge them. Identify the authoritative implementation, correct the documentation, and record any unresolved contract in the document’s validation or follow-up section. Every important claim should be traceable to a repository path, command, test, or linked canonical document.

Use relative Markdown links for repository files. Before finishing a documentation change, verify that each referenced file, command, environment variable, and local link still exists or is intentionally described as unavailable.

## Maintenance checklist

Update documentation when a change affects any of the following:

- directory responsibilities or import boundaries;
- public API, route, state, persistence, or runtime configuration contracts;
- direct dependencies, Node/npm versions, build profiles, or lockfile policy;
- commands, scripts, workflows, Dev Container lifecycle, or deployment behavior;
- validation coverage, test locations, or failure handling.

For each update:

- search the repository for stale names and commands;
- compare claims with the implementation and tests;
- preserve one canonical owner for each instruction;
- verify links and code blocks;
- run relevant existing validation and `git diff --check`.

## Acceptance criteria

A technical document is ready when its purpose and scope are obvious, its content matches the current implementation, its key claims have identifiable sources, its commands are executable in the stated context, its local links resolve, and it stays within the target size unless a reference table justifies the exception.
