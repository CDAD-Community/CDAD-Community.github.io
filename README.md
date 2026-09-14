# CDAD — Context-Driven AI Development

> **When context doesn't govern AI, AI governs the solution.**

**CDAD (Context-Driven AI Development)** is an open-source methodology for **governed AI-assisted software development**.

CDAD focuses on a problem that becomes increasingly important as AI coding agents participate directly in implementation:

> **How do we preserve architecture, project knowledge, engineering rules and intent while AI agents continuously modify software?**

CDAD treats context as an engineering asset — something that can be structured, governed, protected and validated.

**Context is the Source of Truth.**

---

## What is CDAD?

CDAD provides a governance layer around AI-assisted software development.

It combines ideas from:

- **Spec-Driven Development (SDD)**
- **Specification-Driven Development**
- **Context Engineering**
- **AI coding agents**
- **Architecture governance**
- **Engineering constraints and rules**
- **Protected project context**
- **Human architectural decisions**

The goal is not to replace specifications, developers or AI agents.

The goal is to make the **context and architectural intent that guide AI agents explicit and governable**.

---

## The Problem: Architectural Drift

AI agents are increasingly capable of implementing complete features.

The difficult problem is not simply code generation.

It is **architectural drift**.

An agent can make a sequence of individually reasonable changes that collectively move a system away from the architecture and engineering decisions originally intended by the team.

CDAD addresses this by making architecture, context, rules and constraints explicit assets of the development process.

```text
Human Intent
     │
     ▼
Specifications
     │
     ▼
Governed Context
     │
     ├── Architecture
     ├── Principles
     ├── Constraints
     ├── Rules
     └── Decisions
     │
     ▼
AI Coding Agent
     │
     ▼
Controlled Implementation
     │
     ▼
Validation
```

---

## CDAD and SDD

**CDAD is not a replacement for SDD.**

The two approaches can work together.

| SDD | CDAD |
|---|---|
| Defines requirements and expected behavior | Governs the context used during AI-assisted development |
| Makes specifications explicit | Makes architecture and constraints explicit |
| Guides what should be built | Governs how an AI agent operates within the project |
| Supports reviewable implementation intent | Protects engineering intent and project knowledge |
| Specification-centric | Context and governance-centric |

A simple way to think about the relationship:

```text
SDD
 │
 ├── What should be built?
 ├── What behavior is required?
 └── What is the expected result?
          │
          ▼
        CDAD
          │
          ├── What context governs the work?
          ├── What architecture must be preserved?
          ├── What rules constrain the agent?
          ├── What may the agent change?
          └── What requires human approval?
```

**SDD can define the specification. CDAD governs the context and boundaries within which the AI agent implements it.**

---

## CDAD and Context Engineering

Context Engineering focuses on designing and supplying useful context to AI systems.

CDAD applies that concept specifically to **software engineering governance**.

Instead of treating context as a collection of prompts, CDAD treats important project knowledge as structured engineering assets:

```text
Context
├── Solution Vision
├── Architecture
├── Principles
├── Constraints
├── Stack
├── Glossary
├── ADRs
└── Rules
```

The important distinction is:

> **Context is not merely information given to an AI agent. In CDAD, important context is governed project knowledge.**

---

## The Context Protection Pattern (CPP)

The **Context Protection Pattern (CPP)** is a core CDAD idea.

The principle is simple:

> Critical architectural context should not be freely writable by an AI agent.

Instead, the agent should propose changes through a controlled workflow.

```text
AI Agent
   │
   │ request change
   ▼
Change Request
   │
   ▼
Proposal
   │
   ▼
Human Review
   │
   ├── Reject
   │
   └── Approve
          │
          ▼
     Architecture / Context
```

This makes architectural change a deliberate engineering action rather than an accidental side effect of code generation.

---

## Governed Context Layers

A CDAD implementation can separate project information into governance layers.

A reference implementation uses:

| Layer | Contents | Typical policy |
|---|---|---|
| L0 | Governed project context | Protected / propose only |
| L1 | Architecture decisions / ADRs | Propose with review |
| L2 | Human documentation | Editable with review |
| L3 | Source code, tests, IaC, pipelines | Normal development |

The exact structure can evolve according to the project.

The important principle is that **not every piece of information should have the same edit permissions or loading policy**.

---

## Put Enforcement in the Plane That Can Enforce It

A core CDAD design principle is:

> **Put each concern in the plane that can enforce it.**

For example:

| Plane | Example mechanism | Guarantee |
|---|---|---|
| Control | Permissions / hooks | Deterministic |
| Build | CI validation | Deterministic |
| Instruction | Agent rules | Probabilistic |
| Procedural | Skills / workflows | On demand |

An instruction saying:

```text
"AI must not modify architecture files."
```

is useful, but it remains an instruction.

A filesystem permission, hook or CI gate can provide an actual enforcement mechanism.

CDAD therefore combines **instructional governance with deterministic controls wherever possible**.

---

## CDAD Bootstrap

The official open-source starter kit is:

**https://github.com/CDAD-Community/cdad-bootstrap**

The current bootstrap project provides a concrete implementation of the methodology, including governed context, architecture mapping, change requests, proposals, ADRs, agent rules and protection mechanisms.

The bootstrap currently provides integrations for:

- Claude Code
- Kiro
- Codex
- GitHub Copilot
- Other AI coding agents

and is designed so the core governance concepts can be adapted to other AI coding agents.

---

## The Architecture Map

One of the central assets in the bootstrap is:

```text
cdad/context/stack.md
```

It provides a compact representation of the system architecture, including:

1. Stack at a glance
2. Component map
3. Deployment topology
4. Observability
5. Dependency rules
6. Architecture map change history

The architecture map is maintained as Markdown/Mermaid so it can be reviewed and versioned alongside the code.

---

## Controlled Change Flow

Architectural changes follow an explicit path:

```text
cdad/CHANGE-REQUEST.md
        │
        ▼
cdad/proposals/
        │
        ▼
Human Review
        │
        ▼
cdad/adr/
        │
        ▼
cdad/context/stack.md
```

The important property is the asymmetry:

```text
Normal implementation
        │
        └── AI can implement within the governed boundaries

Architectural change
        │
        └── AI proposes → Human reviews → Architecture changes
```

This is one of the mechanisms that turns governance from a recommendation into an operational workflow.

---

## Supported AI Coding Agents

CDAD is **agent-agnostic**.

It is not an AI coding agent itself.

It is a methodology and governance approach that can be applied around AI development tools.

Examples include:

- Claude Code
- Kiro
- Codex
- Cursor
- GitHub Copilot
- Qwen Code
- Other AI coding agents

The exact integration mechanism depends on the capabilities of each tool.

---

## When Should You Use CDAD?

CDAD becomes particularly useful when:

- AI agents actively modify production code.
- The project has a meaningful architecture.
- Architectural decisions must remain consistent.
- Multiple AI sessions need the same project context.
- Multiple developers and agents collaborate on the same repository.
- The system is long-lived and continuously evolving.
- You need explicit boundaries around what an agent can modify.
- You want architecture and context to remain reviewable through Git.

If you are only experimenting with a small script, CDAD may be unnecessary.

If an AI agent is becoming a serious participant in software engineering, governance becomes increasingly valuable.

---

## What CDAD Is Not

CDAD is not:

- an LLM
- an AI coding agent
- a replacement for developers
- a replacement for SDD
- a replacement for software architecture
- a prompt library
- a single vendor-specific framework

CDAD is a **methodology for governing context and engineering intent during AI-assisted software development**.

---

## Getting Started

The recommended starting point is the official bootstrap repository:

```bash
git clone https://github.com/CDAD-Community/cdad-bootstrap.git
```

Then:

1. Copy the CDAD bootstrap structure into your project.
2. Define `cdad/context/stack.md`.
3. Establish your architecture and constraints.
4. Configure the agent-specific integration you use.
5. Protect governed context.
6. Connect validation to CI.
7. Begin implementing normal development tasks.
8. Route architectural changes through the governed change process.

The bootstrap repository contains the current detailed setup instructions and portability guidance.

---

## Repository Structure

A reference CDAD project can look like:

```text
.
├── INDEX.md
├── AGENTS.md
│
├── cdad/
│   ├── CHANGE-REQUEST.md
│   ├── proposals/
│   ├── context/
│   │   ├── stack.md
│   │   ├── architecture.md
│   │   ├── solution-vision.md
│   │   ├── principles.md
│   │   ├── constraints.md
│   │   └── glossary.md
│   ├── adr/
│   ├── scripts/
│   └── docs/
│
├── .claude/
│   ├── CLAUDE.md
│   ├── settings.json
│   ├── hooks/
│   ├── rules/
│   └── skills/
│
└── .kiro/
    └── steering/
```

The exact structure is tool- and project-dependent. The official bootstrap repository is the authoritative implementation reference.

---

## Core Principle

CDAD can be summarized in one sentence:

> **Govern the context. Guide the agent. Protect the architecture.**

Or, more fundamentally:

> **When context doesn't govern AI, AI governs the solution.**

---

## Relationship to the AI Development Ecosystem

CDAD sits at the intersection of several emerging software-development practices:

```text
                AI-Assisted Software Development
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
         SDD          Context Engineering     AI Agents
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                              ▼
                             CDAD
                              │
                 ┌────────────┼────────────┐
                 │            │            │
             Governance     Context    Protection
                 │            │            │
                 └────────────┼────────────┘
                              ▼
                    Governed AI Development
```

CDAD is intentionally positioned as a **complementary governance approach**, rather than claiming to replace the broader SDD, context engineering or AI-agent ecosystem.

---

## Project Status

CDAD is an evolving open-source methodology.

The concepts, bootstrap implementation and integrations may evolve as AI coding agents and AI-assisted development practices evolve.

The goal is to establish practical patterns for:

- context governance
- architecture preservation
- agent boundaries
- protected engineering knowledge
- deterministic validation
- human-controlled architectural evolution

---

## Contributing

Ideas, critiques, experiments, implementations and documentation improvements are welcome.

If you find a problem or have an idea:

1. Open an issue.
2. Describe the problem or proposed improvement.
3. Provide an example when possible.
4. Discuss the architectural or governance implications.
5. Submit a pull request when appropriate.

CDAD is intended to evolve through practical use and community feedback.

---

## License

The CDAD Bootstrap project is licensed under:

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

You may share, adapt and build upon the work, including commercially, provided appropriate attribution is given.

https://creativecommons.org/licenses/by/4.0/

---

## Author

**Moisés Griott**

Digital Architect · Cloud Architect · AI / Agentic AI Architect

CDAD — Context-Driven AI Development

Website:

https://cdad-community.github.io/

Bootstrap:

https://github.com/CDAD-Community/cdad-bootstrap
