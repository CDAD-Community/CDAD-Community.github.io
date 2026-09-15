# CDAD V2.1 --- Quick User Manual

> **Human First. AI Accelerated.**
>
> **When context does not govern AI, AI governs the solution.**
>
> **Golden rule:** AI may analyze, propose and execute. Authority over
> governed decisions remains human. CDAD may intentionally introduce
> friction into rapid development to guide users toward compliance with
> the project's standards, rules and governance requirements.

## 1. Before You Start

CDAD is based on a simple rule:

**You define what you want to build. CDAD protects that intent. AI
accelerates the implementation.**

Before incorporating CDAD, prepare an **initial design document** for
your application/product. At a minimum, include:

-   application/product vision;
-   objective;
-   main functionality;
-   proposed architecture, if already defined;
-   technology stack;
-   known constraints and decisions.

The document does not have to be perfect, but it must represent clearly
enough what you want to build.

## 2. Incorporate CDAD into the Project

Give the ADE the CDAD Bootstrap URL:

`https://github.com/CDAD-Community/cdad-bootstrap`

Then tell it:

``` text
Clone/incorporate CDAD Bootstrap into this project.
Inspect the project and use my initial design document
as the source for performing the CDAD Bootstrap.
Do not invent decisions; if information is missing, ask me.
```

The ADE must:

1.  inspect the project;
2.  identify the design document;
3.  detect conflicts;
4.  avoid guessing missing information;
5.  map the design into the corresponding CDAD artifacts;
6.  generate the CDAD context;
7.  show you the result for review.

### Important

CDAD deliberately **hides much of the governance complexity from the
user**.

This is intentional: the user should focus on **what is being built and
the decisions that matter**, while CDAD handles the structure,
traceability, protection, and enforcement mechanisms behind the scenes.

This does **not** remove human authority. Quite the opposite: CDAD makes
human authority explicit while reducing the amount of governance
mechanics the user has to manage manually.

## 3. First Confirmation: The Design

The ADE must ask you to confirm that the initial design document
actually represents what you want to build.

-   **Yes:** confirm.
-   **No:** correct the design and review again.

This confirmation answers:

> **"Is this what I want to build?"**

## 4. Second Confirmation: The CDAD Context

After the mapping, review the generated CDAD artifacts.

Confirm that they correctly represent:

-   vision;

-   architecture;

-   technology stack;

-   principles;

-   constraints;

-   glossary and relevant terminology.

-   **Yes:** confirm.

-   **No:** request corrections.

This confirmation answers:

> **"Did CDAD correctly represent what I want to build?"**

**These are two different confirmations, and both matter.**

## 5. Freeze

Once the context has been confirmed:

``` text
cdad/scripts/cdad-freeze.sh
```

The project enters the governed regime.

From this point forward, the agent must use the governed context as the
source of truth and must not directly modify protected decisions.

## 6. What You Normally Do

During normal development, your job is simple:

**Define → Delegate → Review → Accept/Reject**

You do not need to manually maintain every CDAD artifact.

Ask the ADE to implement functionality within the governed context.

Example:

``` text
Implement the next approved functionality according to the
governed CDAD context. Do not change architectural decisions.
```

The ADE performs the implementation while respecting the established
context.

## 7. When You Want a Normal Implementation Change

Not every code change requires a CDAD Change Request.

For routine implementation work, simply delegate the task.

Examples:

-   fix a bug;
-   add a unit test;
-   implement an already-defined endpoint;
-   refactor code without changing a governed decision;
-   improve logging within the existing architecture.

Use the normal development workflow.

## 8. When a Change Affects a Governed Decision

Use `CHANGE-REQUEST.md` when the requested change affects an
architectural or otherwise governed decision.

Typical examples:

-   changing the database;
-   changing the cloud platform;
-   changing the main framework;
-   changing an architectural pattern;
-   introducing a new major component;
-   changing an established integration;
-   changing a security or deployment decision.

Flow:

``` text
CHANGE-REQUEST.md
        ↓
cdad/proposals/
        ↓
Review
        ↓
Approval
        ↓
ADR / Context Update
        ↓
Implementation
```

## 9. Proposals

The ADE may create a proposal under:

``` text
cdad/proposals/
```

A proposal is **not automatically a decision**.

The proposal normally explains:

-   current decision;
-   requested/suggested change;
-   reason;
-   trigger;
-   scope;
-   impact;
-   risks;
-   alternatives;
-   affected architecture/context elements.

### Your job

Read the proposal and decide:

-   **Accept** → the change may proceed through the governed process.
-   **Reject** → the proposal is not applied.
-   **Request changes** → ask the ADE to revise the proposal.

**Never treat a proposal as an approved decision.**

## 10. ADRs

An ADR records an architectural decision.

The general relationship is:

``` text
User Intent
    ↓
Proposal
    ↓
Human Decision
    ↓
ADR
    ↓
Governed Context
    ↓
Implementation
```

The AI can analyze and propose.

**The human owns the architectural decision.**

## 11. The Architecture Map

The main architecture map is:

``` text
cdad/context/stack.md
```

It provides a quick view of the governed architecture and its main
technology choices.

Normally, **do not edit it manually**.

When a governed decision changes, let the CDAD process update the
corresponding artifacts.

## 12. Protected Context

After Freeze, the governed context is protected.

Do not simply edit a context file because you want to change something.

If the change affects a governed decision:

1.  state the intent;
2.  create/use `CHANGE-REQUEST.md`;
3.  let the ADE prepare a proposal;
4.  review it;
5.  accept or reject it;
6.  update the governed artifacts through the process;
7.  implement the approved change.

This preserves traceability.

## 13. The Two Files You Should Know

Most users only need to know two main input points:

### `SOURCE-BRIEF.*`

Your **original design**.

It captures what you initially want to build.

Normally, you provide it once as the initial source.

### `CHANGE-REQUEST.md`

The **front door for governed changes**.

Use it when you want to change an established architectural or governed
decision.

Think of it as:

``` text
SOURCE-BRIEF
    = What I initially want to build

CHANGE-REQUEST
    = What I want to change later
```

## 14. The Complete V2.1 Flow

``` text
1. Write the initial design
          ↓
2. Give the ADE the CDAD Bootstrap URL
          ↓
3. ADE clones/incorporates CDAD
          ↓
4. ADE inspects the project
          ↓
5. ADE identifies the design document
          ↓
6. ADE maps the design into CDAD
          ↓
7. User confirms the design
          ↓
8. User confirms the generated CDAD context
          ↓
9. Freeze
          ↓
10. Governed AI development
          ↓
11. Routine work → delegate directly
          ↓
12. Governed change → Change Request
          ↓
13. Proposal → Human approval/rejection
          ↓
14. ADR / Context update
          ↓
15. Implementation
```

## 15. Quick Reference

  -----------------------------------------------------------------------
  Situation                           What you do
  ----------------------------------- -----------------------------------
  Starting a new project              Prepare the initial design

  Adding CDAD                         Give the ADE the Bootstrap URL

  Mapping the design                  Ask the ADE to perform the CDAD
                                      Bootstrap

  Design confirmation                 Confirm or correct

  Context confirmation                Confirm or request corrections

  Normal coding                       Delegate

  Bug fix                             Delegate

  Unit tests                          Delegate

  Architectural change                Use `CHANGE-REQUEST.md`

  Proposal received                   Review it

  Proposal accepted                   Proceed through the governed
                                      process

  Proposal rejected                   Do not apply it

  Architecture decision               Human approves

  Context after Freeze                Do not edit directly

  Need to change a decision           Change Request → Proposal →
                                      Approval → Update
  -----------------------------------------------------------------------

## 16. The Rule to Remember

You do **not** need to become a CDAD administrator.

Your role is to:

> **Define the intent.\
> Confirm the context.\
> Make the decisions.\
> Delegate the implementation.\
> Review the result.**

CDAD takes care of the governance structure around those decisions.

**AI participates in the development process.\
AI does not become the authority over the architecture.**

------------------------------------------------------------------------

# 17. How to Use Epics, Stories and Backlog

> **📋 Epics, Stories & Backlog**
>
> You can provide Epics and Stories inside the initial design document
> or in a separate requirements/backlog document. CDAD analyzes both
> sources during Bootstrap and incorporates them into
> `cdad/backlog.md`. You do not need to prepare that file manually.

## 17.1. Two Ways to Provide the Backlog

### Option A — Everything is in the initial document

The user may provide one design document containing:

-   product vision;
-   objectives;
-   architecture;
-   technology stack;
-   constraints;
-   Epics;
-   Stories.

``` text
Design Document
│
├── Product Vision
├── Architecture
├── Technology Stack
├── Constraints
├── EPIC-001: User Management
│   ├── STORY-001: Register user
│   ├── STORY-002: Login
│   └── STORY-003: Reset password
│
└── EPIC-002: Notifications
    ├── STORY-004: Email notification
    └── STORY-005: WhatsApp notification
```

The user provides this document to the ADE during Bootstrap.

The ADE must:

-   identify Epics and Stories;
-   validate that they are complete;
-   detect inconsistencies;
-   avoid inventing Stories;
-   map them to the CDAD backlog;
-   ask for clarification when information is missing;
-   present the result for confirmation.

### Option B — Design and backlog are separate

It is also valid to provide:

``` text
design.md
backlog.md
```

or:

``` text
architecture.md
product-requirements.md
epics-and-stories.md
```

The Epics and Stories document is a requirements source. The ADE must
analyze it rather than simply copy it. It must check:

-   Epics;
-   Stories;
-   IDs;
-   duplicates;
-   relationships;
-   scope;
-   consistency with the vision;
-   consistency with the architecture.

If it finds contradictions, it must ask the user.

## 17.2. What CDAD Does With It

The confirmed result must be stored in:

``` text
cdad/backlog.md
```

This file becomes the governed development line.

``` text
SOURCE-BRIEF / Design Document
              +
      Epics & Stories
              ↓
        CDAD Bootstrap
              ↓
       cdad/backlog.md
```

The backlog answers:

> **What are we going to build and what comes next?**

The context answers:

> **Within which architecture and decisions are we going to build it?**

## 17.3. CDAD Does Not Invent the Backlog

If the user provides:

``` text
EPIC-001
  STORY-001
  STORY-002
```

the agent must not magically create `STORY-003`, `STORY-004` or
`STORY-005` merely because they seem necessary.

If it detects a gap, it should ask:

``` text
I detected that completing EPIC-001 may require a Story
related to X. Would you like to add it?
```

The decision remains with the user. This preserves traceability between
intent and backlog.

## 17.4. What Happens After Bootstrap?

Once the context and backlog are confirmed:

``` text
Design
   ↓
Epics
   ↓
Stories
   ↓
Human Confirmation
   ↓
Freeze
   ↓
Development
```

Before starting work, the agent must inspect the backlog and determine
which Epic and Story apply:

``` text
I will implement STORY-003 — Reset password.
```

It then works within:

``` text
Governed Context
        +
ADR
        +
Epic
        +
Story
        ↓
Implementation
```

## 17.5. Adding an Epic After Freeze

If the user wants to add `EPIC-003` after Freeze and the change is
structural or material, it must use the governed change mechanism:

``` text
CHANGE-REQUEST.md
        ↓
Proposal
        ↓
Human Review
        ↓
Approval
        ↓
Promotion
        ↓
cdad/backlog.md
```

With the V2.1 promotion improvement:

``` text
Proposal
   +
Promotion .sh
        ↓
Human reviews
        ↓
bash cdad/proposals/apply-....sh
        ↓
Backlog promoted
```

## 17.6. Simple Rule

``` text
WHAT I WANT TO BUILD
        ↓
Design + Epics + Stories
        ↓
       CDAD
        ↓
GOVERNED CONTEXT + BACKLOG
        ↓
       AI
        ↓
IMPLEMENTATION
```

Once confirmed, `cdad/backlog.md` becomes the project's governed
development line.
