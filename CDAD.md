# CDAD Community Website — v2.1 Content & Documentation Specification

## Purpose

This document is the content blueprint for updating the CDAD website from its current personal site presentation into the **public, canonical documentation site for CDAD Community**.

The immediate target is **CDAD 2.1**, while documenting the planned evolution toward **CDAD v3 and v3.1** without presenting planned functionality as already implemented.

The website must preserve the strongest conceptual content of the existing site:

- Problem
- Approach
- Ecosystem
- Context Protection Pattern (CPP)
- Agents
- SDD
- FAQ

and extend it into a technically strong documentation system.

---

# 1. CDAD Identity

## Canonical name

**CDAD — Context-Driven AI Development**

## Canonical definition

> **CDAD (Context-Driven AI Development) is an open-source software development methodology for governing the context, architecture, specifications, rules and constraints that guide AI coding agents throughout the development lifecycle.**

Short form:

> **CDAD is an open-source methodology for governed, context-driven software development with AI coding agents.**

Conceptual message:

> **SDD defines what to build; CDAD governs the context and boundaries that guide AI agents while building it.**

## Positioning

CDAD is a **methodology**, not an AI model, coding agent, RAG framework, or vendor-specific product.

CDAD may be implemented through tools, templates, adapters and a reference implementation, but the methodology itself is independent of any particular AI coding environment.

---

# 2. Public Identity and Community Ownership

The website should be presented as part of **CDAD Community**.

The intended relationship is:

```text
CDAD
│
├── Methodology
├── Specification
├── Documentation
├── Reference Implementation
│   └── cdad-bootstrap
├── Examples
└── Community
```

The historical authorship must remain explicit:

```text
CDAD
  ↓
Created / authored by
  ↓
Moisés Griott
  ↓
Maintained by
  ↓
CDAD Community
```

Do not present CDAD as an established industry standard or claim adoption that has not occurred.

CDAD should be described honestly as an **open-source methodology/proposal in evolution**.

---

# 3. Relationship Between Website, Methodology and Bootstrap

The public documentation must clearly distinguish:

### CDAD

The methodology and conceptual framework.

### CDAD Specification

The formal description of the methodology, its concepts, principles, artifacts, governance rules and contracts.

### cdad-bootstrap

The reference implementation used to introduce CDAD structure and governance into a software project.

Current reference repository:

`https://github.com/CDAD-Community/cdad-bootstrap`

The bootstrap must never be described as being synonymous with CDAD itself.

---

# 4. Existing Homepage Content to Preserve

The current site contains valuable conceptual material. Preserve and improve the following sections rather than removing them.

## Problem

Explain that AI coding agents can generate software rapidly but depend heavily on the quality and governance of the context they receive.

Problems include:

- context loss
- incorrect interpretation of requirements
- violation of architectural decisions
- inconsistent implementation
- divergence from specifications
- unauthorized assumptions
- changes that contradict existing rules
- architectural drift
- loss of coherence between development sessions
- difficulty maintaining consistency across different agents and environments

The fundamental problem is not simply that agents generate incorrect code.

The deeper problem is that **agents operate on context**, and that context can be incomplete, inconsistent, stale, ambiguous or uncontrolled.

---

# 5. Approach

CDAD addresses the problem by establishing **governed context** around AI-assisted software development.

Conceptual model:

```text
Software Development
        +
AI Coding Agents
        +
Governed Context
        ↓
Context-Driven AI Development
```

The methodology combines:

- context governance
- architecture
- specifications
- rules
- constraints
- traceability
- preservation of architectural intent
- protection of critical context
- mechanisms to detect and prevent architectural drift

The website must explain that CDAD does not attempt to make the AI "smarter".

Instead, CDAD establishes a more reliable **development environment and context contract** around the agent.

---

# 6. Ecosystem

CDAD operates at the intersection of:

```text
Software Architecture
        +
Specification / SDD
        +
Context Engineering
        +
AI Coding Agents
        +
Governance
        ↓
      CDAD
```

CDAD should be presented as complementary to related disciplines.

It does not replace:

- software architecture
- specification-driven development
- context engineering
- RAG
- prompt engineering
- testing
- CI/CD
- version control

It provides a methodology for governing the context and boundaries within which AI-assisted software development occurs.

---

# 7. Core Vocabulary

The website must establish canonical terminology and use it consistently.

## CDAD

Context-Driven AI Development.

## Governed Context

Context that is explicitly structured, maintained and governed so that AI agents can use it reliably during software development.

## Context Governance

The practices used to define, maintain, protect and control governed context.

## Context Protection Pattern (CPP)

A pattern for protecting critical development context from being lost, altered or bypassed by AI-assisted development workflows.

## Architectural Intent

The intended architectural properties, decisions and constraints that should remain preserved throughout implementation.

## Architectural Drift

Deviation of the implementation from the intended architecture or governed design.

## Context Layer

A defined layer of contextual information with a specific purpose, authority and lifecycle.

## Context Artifact

A documented artifact that participates in the governed development context.

## Specification

An explicit definition of expected behavior, outcome or system property.

## Rule

A directive that an agent must follow.

## Constraint

A restriction that limits implementation or architectural decisions.

## AI Coding Agent

An AI system that actively participates in software development by inspecting, reasoning about, modifying or generating project artifacts.

---

# 8. Context Protection Pattern (CPP)

CPP must remain a first-class concept on the website.

The explanation should communicate:

```text
Context can be:
    lost
    altered
    misinterpreted
    bypassed
        ↓
Context Protection Pattern
        ↓
Preservation of:
    intent
    architecture
    rules
    constraints
```

CPP should be explained as a methodological pattern rather than as a particular software product.

---

# 9. Agents and ADEs

CDAD is intended to be portable across AI coding environments.

The current reference implementation explicitly documents support for:

- Claude Code
- Kiro
- Codex

These should be presented as the current/reference integrations.

Other AI coding agents may be described as potential or compatible environments, but must not be called officially supported unless an actual adapter or documented integration exists.

The site must avoid defining CDAD through commercial product names.

The methodology remains independent from vendors.

---

# 10. CDAD 2.1 — Current Reference Implementation

The site must have a dedicated section:

# CDAD 2.1

This section describes what exists today.

Suggested definition:

> **CDAD 2.1 is the current reference implementation of Context-Driven AI Development, providing a governed project workspace in which project context, architectural decisions, constraints and agent instructions are explicitly structured, protected and traceable.**

The current bootstrap establishes a CDAD workspace containing governance and context artifacts such as:

```text
/
├── AGENTS.md
├── CDAD-COMPLETION.md
├── CHANGE-REQUEST.md
├── INDEX.md
│
├── cdad/
│   ├── README.md
│   ├── adr/
│   ├── context/
│   ├── docs/
│   ├── proposals/
│   └── scripts/
│
├── .claude/
└── .kiro/
```

The exact repository structure should always be synchronized with the current `CDAD-Community/cdad-bootstrap` implementation.

---

# 11. CDAD Workspace Model

Explain that CDAD introduces a governed workspace rather than merely installing a library.

Conceptually:

```text
Project
   ↓
CDAD Bootstrap
   ↓
Governed Workspace
   ├── Context
   ├── Architecture
   ├── Decisions
   ├── Rules
   ├── Constraints
   ├── Proposals
   ├── Change Requests
   └── Governance Scripts
```

CDAD should be described as a development governance structure that lives alongside the project.

---

# 12. Context Layers

The website should document the current conceptual layer model.

```text
L0 — Governed Context
│
├── architecture
├── stack
├── constraints
├── principles
├── solution vision
└── glossary

L1 — Decisions
│
└── ADRs

L2 — Documentation
│
└── Human reference

L3 — Implementation
│
├── source
├── tests
├── infrastructure
└── pipelines
```

The exact current implementation must be checked against the bootstrap repository before publication.

The key idea is that different artifacts have different authority and lifecycle.

---

# 13. Freeze

Freeze is a central governance mechanism.

The site should explain that freeze establishes a ratified state of the governed design.

Freeze is not simply a Git operation.

It is the point at which governed context and architectural decisions become the authoritative baseline for implementation.

The documentation should explain:

```text
THINK
  ↓
Decision / Context
  ↓
Human ratification
  ↓
FREEZE
  ↓
WORK
```

Do not imply that freeze means that no future change is possible.

Changes after freeze follow a governed change process.

---

# 14. Change Requests

The website should explain the relationship:

```text
Frozen Context
      ↓
New requirement / discovery
      ↓
CHANGE REQUEST
      ↓
Impact Analysis
      ↓
Decision
      ↓
Updated governed context
      ↓
NEW FREEZE
```

A change request is not permission to bypass governance.

---

# 15. ADRs

Architecture Decision Records should be presented as the durable record of important architectural decisions.

Explain that:

- decisions should be explicit
- decisions should be traceable
- decisions should not exist only in conversation
- important changes should leave a durable record
- the governed context should remain coherent with the decision history

---

# 16. Drift Detection and Deterministic Enforcement

CDAD 2.1 should document the deterministic mechanisms already present in the reference implementation.

The important principle is:

> Governance should not depend entirely on another AI agent reviewing the output of the first AI agent.

Where possible, structural governance should be enforced deterministically through scripts and gates.

Examples include:

- checking expected artifacts
- checking references
- checking governance structure
- detecting drift
- enforcing freeze conditions
- CI validation

The website should distinguish:

```text
Deterministic verification
        vs.
Semantic architectural judgment
```

A script can determine whether a required artifact or reference exists.

A human must still determine whether the architecture is actually correct.

---

# 17. CDAD vs SDD

Preserve the existing SDD section and strengthen it.

Core distinction:

```text
SDD
└── Defines what should be built

CDAD
└── Governs the context and boundaries
    that guide the AI agent while building it
```

They are complementary.

A project may use SDD specifications inside a CDAD-governed development environment.

Do not claim CDAD is a replacement for SDD.

---

# 18. CDAD vs Context Engineering

Context Engineering focuses on designing and managing context for AI systems.

CDAD applies this concern specifically to software development with AI coding agents and combines it with:

- software architecture
- specifications
- governance
- rules
- constraints
- traceability
- architectural intent
- architectural drift prevention

Conceptual relationship:

```text
Context Engineering
        +
Software Architecture
        +
Specifications
        +
Governance
        +
AI Coding Agents
        ↓
      CDAD
```

---

# 19. CDAD vs RAG

CDAD must not be confused with RAG.

RAG is a retrieval technique/architecture.

CDAD is a software development methodology.

A CDAD implementation may use RAG or another retrieval mechanism, but retrieval itself is not CDAD.

```text
RAG
└── Retrieval mechanism

CDAD
└── Development methodology
    ├── Context governance
    ├── Architecture
    ├── Specifications
    ├── Rules
    ├── Constraints
    └── Agent interaction
```

---

# 20. CDAD vs Prompt Engineering

Prompt Engineering asks:

> How should instructions be formulated?

CDAD asks:

> How should the development context itself be structured, governed, protected and maintained when AI agents build software?

CDAD must not be positioned as "prompt engineering with another name".

---

# 21. What CDAD Is NOT

Create a dedicated section.

CDAD is not:

- an LLM
- an AI coding agent
- a RAG framework
- a prompt engineering technique
- a vendor-specific development environment
- a replacement for SDD
- a replacement for software architecture
- a replacement for testing or CI/CD

CDAD is:

- a software development methodology
- a context governance model
- a framework for governed AI-assisted development
- a set of principles and artifacts
- a portable methodology across AI coding environments
- an approach for preserving architectural intent and reducing architectural drift

---

# 22. Getting Started

Create a practical documentation area.

## Installation

The current reference implementation should be used as the source of truth for commands.

Repository:

`https://github.com/CDAD-Community/cdad-bootstrap`

Explain that CDAD is incorporated into a project through the bootstrap rather than installed as a traditional runtime library.

Conceptual flow:

```text
Clone / obtain bootstrap
        ↓
Initialize project
        ↓
Inspect project / establish context
        ↓
Populate governed context
        ↓
Review
        ↓
Freeze
        ↓
Work under governance
```

Do not invent commands. Commands and procedures must be copied/verified against the current bootstrap.

---

# 23. Typical CDAD Workflow

Document the current conceptual workflow:

```text
Project
   ↓
Context / Requirements
   ↓
Architecture
   ↓
Governed Context
   ↓
Decisions / ADRs
   ↓
Human Ratification
   ↓
Freeze
   ↓
AI-assisted Work
   ↓
Verification
   ↓
Drift Detection
```

For changes:

```text
WORK
 ↓
Discovery
 ↓
CHANGE REQUEST
 ↓
Impact Analysis
 ↓
THINK
 ↓
Human Decision
 ↓
New Freeze
 ↓
WORK
```

---

# 24. CDAD v3 — Planned Evolution

This section must be explicitly marked:

**PROPOSED / UNDER DEVELOPMENT**

Do not describe v3 features as current CDAD 2.1 capabilities.

The major proposed evolution is the **Evidence Boundary**.

Concept:

```text
AUTHORIZED SOURCES
        ↓
GROUNDING
        ↓
EVIDENCE DOSSIER
        ↓
THINK / WORKERS
        ↓
MARKED PROPOSALS
        ↓
HUMAN
        ↓
FREEZE
```

The key rule:

> Reasoning agents must not receive raw source material directly. They reason over the evidence dossier produced by the grounding layer.

This creates a physical separation between:

- evidence retrieval
- reasoning
- human decision
- freeze

The goal is to make unsupported generation recognizable by construction.

---

# 25. Evidence Provenance

Proposed v3 provenance markers:

```text
[FUENTE]
[VACÍO]
[CONFLICTO]
[PROPUESTA]
```

Meaning:

### [FUENTE]

The statement comes from cited evidence.

### [VACÍO]

The sources do not provide the required information.

### [CONFLICTO]

Sources disagree; both claims and citations must be exposed.

### [PROPUESTA]

The reasoning worker introduced new content that was not directly established by the evidence.

An unmarked assertion is not automatically treated as sourced.

This is part of the proposed v3 evidence-governance model.

---

# 26. BLOCKING and OPEN

Proposed v3 vocabulary:

```text
BLOCKING
    ↓
A missing decision that prevents freeze.

OPEN
    ↓
A known unresolved decision that does not
prevent the current freeze.
```

OPEN does not mean "authorized to change the architecture".

Resolving an OPEN item is a new decision and follows the normal change path.

Conceptually:

```text
FREEZE
  ↓
WORK
  ↓
OPEN discovered
  ↓
CHANGE REQUEST
  ↓
DECISION
  ↓
NEW FREEZE
```

---

# 27. THINK Is a Mode, Not a Phase

The v3 model should describe THINK as a **mode**.

It may occur before the initial freeze and may be re-entered after a freeze.

```text
CHANGE REQUEST
      ↓
IMPACT ANALYSIS
      ↓
THINK
      ↓
HUMAN DECISION
      ↓
NEW FREEZE
      ↓
WORK
```

The same conceptual actors can participate under different write permissions and evidence regimes.

---

# 28. Three Entry Modes Proposed for v3

The proposed v3 model accommodates three starting situations.

## Prompt-only

No authoritative material exists.

```text
Elicitation
   ↓
Dialogue
   ↓
SOURCE-BRIEF.md
   ↓
Grounding
```

The conversation itself should not become governed context automatically.

The elicitation process materializes the required source artifact.

## Design document

A completed authoritative document exists.

Grounding can use it directly.

## Professional methodology

Multiple discovery / requirements / design documents exist.

A source manifest is required to establish:

- versions
- authority
- precedence
- source identity

The purpose is to expose conflicts rather than allow document-reading order to determine authority accidentally.

---

# 29. No Unfreeze

The proposed v3 model explicitly rejects an `unfreeze` mechanism.

There should be no:

```text
cdad unfreeze
```

Instead:

```text
Change Request
      ↓
Impact Analysis
      ↓
THINK
      ↓
Human Decision
      ↓
New Freeze
```

The rationale is to prevent a temporary bypass from becoming a permanent governance hole.

---

# 30. Human Decision Boundary

CDAD is not intended to delegate architectural authority entirely to agents.

The proposed model establishes:

```text
GROUNDING
    retrieves evidence

WORKERS
    reason and propose

HUMAN
    decides

FREEZE
    establishes authority
```

The website must clearly communicate that AI agents can propose and analyze, but architectural authority remains governed.

---

# 31. CDAD v3.1 — Session Continuity

This section must also be marked:

**PROPOSED / UNDER DEVELOPMENT**

The identified gap is continuity between development sessions.

Technical terminology:

- Session handoff
- Session handoff brief
- Context resumption
- Session continuity
- Episodic memory
- Checkpointing / warm start

For CDAD, the preferred conceptual name is:

> **Session Handoff Brief**

The purpose is to help a later session understand:

- where work stopped
- what is currently active
- what changed
- what remains
- what should happen next

However, the handoff must never become an alternative source of truth.

It must not be treated as governed evidence.

A proposed `cdad status` capability should derive session state from actual project artifacts rather than trusting free-form agent-written history.

Potential sources include:

- Git history since last freeze
- proposals
- change request state
- freeze state
- OPEN items
- ADR references
- governance artifacts

The agent may optionally add clearly marked contextual notes, but these are not authoritative.

---

# 32. Future Session Preferences

Also proposed for v3.1 is the concept of **working preferences**.

Two possible scopes:

```text
user
team
```

Important rules:

- preferences are not governed context
- preferences are excluded from grounding
- preferences never override L0
- the agent must not write its own preferences
- a preference that contradicts governed context is null
- team agreements that deserve authoritative status should become governed constraints instead
- user-level preferences should remain local / non-versioned where appropriate

Potential artifacts:

```text
.cdad/preferences.local.md
```

for user-level preferences.

Team-level working agreements may live in documentation, but must not silently become L0 authority.

The distinction is:

```text
Handoff
    = state / what happened

Preferences
    = directives / how to work
```

They should not be merged into a single authoritative artifact.

---

# 33. Documentation Architecture

The website should evolve into a documentation system.

Recommended information architecture:

```text
CDAD Community
│
├── Home
│
├── Learn
│   ├── What is CDAD?
│   ├── Problem
│   ├── Approach
│   ├── Ecosystem
│   ├── Governed Context
│   ├── Context Layers
│   ├── CPP
│   ├── Architectural Intent
│   └── Architectural Drift
│
├── Methodology
│   ├── Governance Model
│   ├── Agent Interaction
│   ├── Change Management
│   ├── Freeze
│   ├── Evidence & Provenance
│   └── Human Decision Boundary
│
├── CDAD 2.1
│   ├── Overview
│   ├── Workspace
│   ├── Installation
│   ├── Bootstrap
│   ├── ADR
│   ├── Change Requests
│   ├── Freeze
│   ├── Drift Detection
│   └── Audit
│
├── Agents
│   ├── Claude Code
│   ├── Kiro
│   ├── Codex
│   └── Portability
│
├── Comparisons
│   ├── CDAD vs SDD
│   ├── CDAD vs Context Engineering
│   ├── CDAD vs RAG
│   └── CDAD vs Prompt Engineering
│
├── Reference
│   ├── Specification
│   ├── Vocabulary
│   ├── Artifacts
│   ├── Glossary
│   └── FAQ
│
├── Evolution
│   ├── CDAD 2.x
│   ├── CDAD v3
│   └── CDAD v3.1
│
└── Community
    ├── Contributing
    ├── Governance
    └── Roadmap
```

---

# 34. Homepage Structure

The homepage should retain the current conceptual flow:

1. What is CDAD?
2. Problem
3. Approach
4. Ecosystem
5. CPP
6. Agents
7. SDD
8. FAQ

Add strong calls to:

- CDAD 2.1
- Getting Started
- Methodology
- Specification
- Reference Implementation
- Evolution / Roadmap

The homepage should act as an entry point, not attempt to contain every technical detail.

---

# 35. Reference Implementation

Clearly identify:

> **Reference Implementation: CDAD Bootstrap**

Repository:

`https://github.com/CDAD-Community/cdad-bootstrap`

The website should link to the repository and explain that the repository is where users can inspect and use the current implementation.

The implementation and website should not contradict each other.

When implementation details change, the website documentation must be updated.

---

# 36. Machine-Readable Documentation

The site should prepare for AI discoverability.

Recommended public artifacts:

```text
llms.txt
SPECIFICATION.md
INDEX.md
GLOSSARY.md
FAQ.md
```

Potential structured artifacts:

```text
cdad.schema.json
cdad.concepts.json
```

These should complement, not replace, human documentation.

The website should have stable URLs for important concepts.

---

# 37. AI Discoverability Requirements

The site must be structured so that search engines and AI retrieval systems can clearly identify:

- what CDAD is
- what CDAD stands for
- what problem it solves
- who created it
- who maintains it
- its official website
- its reference implementation
- its core concepts
- its relationship to SDD
- its relationship to Context Engineering
- its current version
- its future roadmap

Use consistent terminology across the site and GitHub.

Do not use keyword stuffing or artificial claims.

The goal is not to make AI systems mention CDAD artificially.

The goal is to create enough high-quality public evidence that systems can discover, understand and correctly cite CDAD when relevant.

---

# 38. SEO / Technical Discoverability

Prepare the site for:

- canonical URLs
- meaningful page titles
- meta descriptions
- Open Graph metadata
- sitemap.xml
- robots.txt
- JSON-LD
- llms.txt
- stable concept URLs

Recommended semantic identity:

```text
CDAD
Context-Driven AI Development
software-development-methodology
AI coding agents
governed context
context governance
architectural intent
architectural drift
Context Protection Pattern
```

Do not make structured-data claims that are not visible in the actual documentation.

---

# 39. FAQ

Preserve and expand the existing FAQ.

Minimum questions:

### What is CDAD?

Answer using the canonical definition.

### What does CDAD stand for?

Context-Driven AI Development.

### What problem does CDAD solve?

Explain context loss, uncontrolled agent behavior and architectural drift.

### Is CDAD open source?

Yes, CDAD is an open-source methodology with an open reference implementation.

### Who created CDAD?

Moisés Griott.

### Who maintains CDAD?

CDAD Community.

### What is cdad-bootstrap?

The reference implementation.

### Is CDAD an AI coding agent?

No.

### Is CDAD RAG?

No.

### Is CDAD prompt engineering?

No.

### Is CDAD a replacement for SDD?

No. They are complementary.

### Can CDAD work with Claude Code?

Yes, the current reference implementation documents Claude Code integration.

### Can CDAD work with Kiro?

Yes, current reference documentation includes Kiro.

### Can CDAD work with Codex?

Yes, current reference documentation includes Codex.

### Can CDAD work with other agents?

The methodology is designed to be portable; official support must be based on actual documented adapters/integrations.

---

# 40. Documentation Rules for Claude / AI Updating the Site

When implementing this specification:

1. Do not invent CDAD functionality.
2. Do not present v3 or v3.1 proposals as current functionality.
3. Use CDAD 2.1 as the current version unless the bootstrap repository proves otherwise.
4. Treat `CDAD-Community/cdad-bootstrap` as the source of truth for current implementation details.
5. Preserve the strongest existing content of Problem, Approach, Ecosystem, CPP, Agents, SDD and FAQ.
6. Expand rather than unnecessarily rewrite those conceptual sections.
7. Keep methodology separate from implementation.
8. Keep current functionality separate from roadmap.
9. Clearly label proposed v3/v3.1 content.
10. Do not claim official support for an AI agent without an actual implementation/integration.
11. Do not describe CDAD as an industry standard.
12. Do not make exaggerated adoption or authority claims.
13. Keep Moisés Griott as historical author/creator.
14. Present CDAD Community as the community/maintenance identity.
15. Use canonical CDAD terminology consistently.
16. Avoid duplicate definitions with subtle variations.
17. Create stable documentation URLs for important concepts.
18. Prefer documentation depth over decorative content.
19. Keep the site understandable for newcomers while providing deep technical reference.
20. Do not remove the existing conceptual narrative merely because a new documentation structure is being introduced.

---

# 41. Migration Preparation

The current website is:

`https://mgriott.github.io/cdad-site/`

The intended repository ownership is:

`CDAD-Community/cdad-site`

The existing repository should first be transferred from the personal GitHub account to the CDAD Community organization.

After transfer:

```bash
git remote set-url origin https://github.com/CDAD-Community/cdad-site.git
```

GitHub Pages must then be verified under the new repository.

Do not change or remove the old publication until the new publication is verified.

The new canonical domain/URL should be decided during the publication phase.

Potential future domain:

`https://cdad.community/`

This is a future option, not a current assumption.

---

# 42. Final Narrative

The entire site should converge on the following conceptual story:

```text
AI Coding Agents
       ↓
Depend on Context
       ↓
Context can be lost, altered or misinterpreted
       ↓
Architectural Intent can drift
       ↓
Governed Context
       ↓
Context-Driven AI Development
       ↓
CDAD
       ↓
Architecture
Specifications
Rules
Constraints
Decisions
Protection
Traceability
       ↓
Consistent AI-assisted Software Development
```

The deeper evolution is:

```text
CDAD 2.1
   ↓
Governed workspace
   ↓
Explicit context
   ↓
Decisions
   ↓
Freeze
   ↓
Deterministic governance
   ↓
CDAD v3
   ↓
Evidence Boundary
   ↓
Provenance
   ↓
Grounding
   ↓
Human decision boundary
   ↓
CDAD v3.1
   ↓
Session continuity
   ↓
Deterministic session handoff
```

The core principle remains:

> **Context is the Source of Truth.**

And the public documentation should make clear that CDAD's purpose is not to make an AI say "CDAD".

Its purpose is to provide a technically coherent, public and inspectable methodology for governing the context, decisions, architecture, rules and constraints that surround AI-assisted software development.

---

# 43. Implementation Priority

Implement in this order:

## P0 — Current CDAD 2.1

- Homepage
- What is CDAD?
- Problem
- Approach
- Ecosystem
- CPP
- Agents
- SDD
- CDAD 2.1
- Installation
- Workspace
- Context Layers
- Freeze
- Change Requests
- ADRs
- Drift Detection
- FAQ

## P1 — Reference Documentation

- Methodology
- Specification
- Vocabulary
- Glossary
- Artifacts
- What CDAD is NOT
- Comparisons
- Reference implementation

## P2 — Evolution

- CDAD v3 — clearly marked proposed
- Evidence Boundary
- Grounding
- Evidence Dossier
- Provenance
- BLOCKING / OPEN
- Re-entrant THINK
- Three entry modes
- No Unfreeze

## P3 — Future

- CDAD v3.1
- Session Handoff Brief
- `cdad status`
- Session continuity
- Working preferences

## P4 — Discoverability

- llms.txt
- sitemap.xml
- robots.txt
- canonical URLs
- metadata
- JSON-LD
- machine-readable indexes

---

# 44. Definition of Done for the Website Update

The website update is considered complete when:

- CDAD 2.1 is clearly identified as the current version.
- The current implementation matches `CDAD-Community/cdad-bootstrap`.
- Existing conceptual sections remain available.
- New documentation provides practical installation and usage guidance.
- Methodology and implementation are clearly separated.
- Current functionality and future roadmap are clearly separated.
- v3 and v3.1 are explicitly marked as proposed.
- CDAD Community is the public community identity.
- Moisés Griott remains identified as creator/author.
- Claude Code, Kiro and Codex are represented according to actual current support.
- SDD, Context Engineering, RAG and Prompt Engineering are clearly differentiated.
- Core terminology is consistent.
- The website provides a strong canonical source for both humans and AI retrieval systems.
- The site is technically prepared for AI discoverability.
- No unsupported claims or invented functionality are introduced.

---

## Source of Truth Hierarchy

When updating content, use this priority:

```text
1. Current CDAD-Community/cdad-bootstrap implementation
                ↓
2. Current CDAD methodology/specification documents
                ↓
3. Existing CDAD website conceptual content
                ↓
4. CDAD roadmap / proposed evolution
```

If there is a conflict, do not silently invent a resolution.

Flag the discrepancy for review.

The website must represent what CDAD actually is, not what we wish it already were.
