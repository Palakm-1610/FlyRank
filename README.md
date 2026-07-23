===== OURS (local) =====

# Settings workflow drill

Files are organized into two folders that represent the two branches used in the drill:

- `branch-round1/` GÇö vague prompt implementation
- `branch-round2/` GÇö precise prompt implementation with tests

To create real git branches and push them (run locally):

```bash
git init
git add .
git commit -m "scaffold: add round1 and round2 implementations"
git branch round1
git branch round2
git checkout round1
git add branch-round1
git commit -m "round1: vague settings form"
git checkout round2
git add branch-round2
git commit -m "round2: precise settings form + tests"
git remote add origin <your-remote-url>
git push origin round1
git push origin round2
```

Run tests (after `npm install`):

```bash
npm install
npm test
```

===== THEIRS (origin/main) =====

# FlyRank

FlyRank is a capstone project repository for demonstrating AI-assisted development workflows, Git history discipline, and a clean project starter structure.

## Overview

This repository includes:
- a minimal project scaffold for future development,
- documentation for the toolchain and conventions,
- a Git history that follows Conventional Commits.

## Why this repository exists

This capstone repo is a working example of AI-assisted development in practice: it shows how to initialize a project, document conventions, and maintain a clean Git history while using an AI coding assistant.

## Stack

- Node.js 20 LTS
- Git
- VS Code
- Claude Code or Cursor

## Getting Started

1. Install Node.js 20 LTS and Git.
2. Clone this repository.
3. Run `npm install` if dependencies are added later.
4. Use the project conventions in `CLAUDE.md`.

## AI Workflow

The repository is intended to be used with AI-assisted development tools such as Claude Code or Cursor. The workflow emphasizes small, reviewable changes and clear commit messages.
