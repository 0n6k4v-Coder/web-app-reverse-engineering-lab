# Web App Reverse Engineering Lab

Research and recreate modern web applications by inspecting their UI, source code, runtime behavior, animations, and interactions.

## Purpose

This repository is used to:

* Reverse-engineer web applications.
* Recreate UI and interactions as accurately as possible.
* Record research, measurements, and implementation findings.
* Store reusable tools, scripts, and techniques.
* Keep a history of lessons learned from each project.

## Structure

```text
.
├── apps/           # Application-specific clones and research
├── docs/           # General documentation and notes
├── methodology/    # Reverse-engineering methods and workflows
├── tooling/        # Reusable scripts and utilities
└── README.md
```

## Workflow

```text
Inspect → Research → Measure → Recreate → Validate → Document
```

## Projects

Each application should contain its own clone source code and research notes.

Example:

```text
web-app-reverse-engineering-lab/
├── README.md
├── apps/
│   ├── mtioon/
│   │   ├── clone/
│   │   │   └── index.html
│   │   ├── research/
│   │   │   ├── runtime.md
│   │   │   ├── source-analysis.md
│   │   │   ├── measurements.md
│   │   │   └── screenshots/
│   │   └── README.md
│   │
│   └── future-app/
│
├── methodology/
│   ├── chrome-devtools.md
│   ├── source-inspection.md
│   ├── animation-analysis.md
│   └── visual-validation.md
│
├── tooling/
│   ├── scripts/
│   └── snippets/
│
└── docs/
    ├── discoveries.md
    └── lessons-learned.md
```

## Principles

* Prefer evidence over assumptions.
* Recreate behavior, not just appearance.
* Keep implementations simple and maintainable.
* Record important discoveries and measurements.
* Use official documentation and authoritative sources when researching technical behavior.

## Status

Experimental and continuously evolving.
