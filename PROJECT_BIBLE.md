# StudentOS - Project Bible

Welcome to the **StudentOS Project Bible**. This document serves as the single source of truth for the system's architecture, directory organization, technical choices, coding guidelines, and future roadmap.

---

## 1. Product Vision & Roadmap

StudentOS is designed as an AI-powered personal operating system for students. The product matures through six clear development stages:

```
StudentOS Foundation ──> Planner ──> AI Planner ──> AI Agent ──> Personal OS ──> Eventually SaaS
```

1. **StudentOS Foundation (Current)**: Monorepo workspace with shared types, local SQLite storage, Express API server, and Vite React frontend with Dark Theme.
2. **Planner**: Classic student productivity suite (timetables, task lists, project managers, goal boards, and calendar displays).
3. **AI Planner**: Intelligence layer introducing heuristics, spaced-repetition study planners, prioritization engines, and conflict detection.
4. **AI Agent**: Autonomy layer utilizing LangGraph for complex task flows, contextual memory pools, tool-use execution, and automatic synchronization with Google/Gmail.
5. **Personal OS**: The ultimate hub consolidating student documentation, dev work streams, notes databases (RAG), and developer workflows.
6. **Eventually SaaS**: Production scaling, multi-tenant databases, authentication, and subscription readiness.

---

## 2. Directory Layout & Architecture

```text
student-os/
├── package.json               # Root monorepo workspace orchestration
├── .gitignore
├── README.md
├── PROJECT_BIBLE.md           # Single source of truth (this document)
├── Dockerfile                 # Root orchestrator build script
├── docker-compose.yml         # Container configuration for client/api/db services
├── .github/
│   └── workflows/
│       └── ci.yml             # Github Actions pipeline (lint and test execution)
├── config/
│   ├── eslint/                # ESLint workspace configs
│   ├── prettier/              # Prettier config overrides
│   └── featureFlags.js        # Global runtime feature switches
├── docs/                      # General project document folders
│   ├── Architecture/          # Architectural decisions & design sheets
│   ├── API/                   # REST/gRPC API contracts
│   ├── Database/              # Schema designs and ER diagrams
│   ├── AI/                    # Agent flows and LLM parameters
│   ├── Roadmap/               # Project milestones
│   └── Meeting Notes/         # Team logs
├── packages/
│   └── shared/                # Core Shared Package (linked via Workspaces)
│       ├── package.json
│       ├── tsconfig.json
│       ├── src/
│       │   ├── types/         # Types/interfaces used by both client & server
│       │   ├── constants/     # Common codes, limits, error templates
│       │   ├── schemas/       # Zod models for client validation & api parsing
│       │   └── utils/         # Basic helpers
│       └── index.ts           # Shared exports entry
├── backend/                   # Backend Express Workspace
│   ├── package.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── .env
│   ├── .env.local
│   ├── server.js              # Entry node process listener
│   ├── prisma/
│   │   ├── schema.prisma      # SQLite configuration
│   │   └── seed.js            # Base metadata seeder
│   ├── database/              # SQLite data directory
│   ├── uploads/               # File upload store
│   ├── logs/                  # Morgan/Winston output directory
│   ├── src/
│   │   ├── app.js             # Express server setup and routing declarations
│   │   ├── controllers/       # HTTP Controller layer
│   │   ├── routes/            # HTTP Route routing layer
│   │   ├── models/            # Domain database records models
│   │   ├── repositories/      # Prisma Data Access layer (Repository pattern)
│   │   ├── services/          # Pure business logic services
│   │   ├── middleware/        # Security, validation, and error interceptors
│   │   ├── config/            # PrismaClient instance config
│   │   ├── utils/             # Express helpers
│   │   ├── agents/            # Multi-agent architecture (future implementation)
│   │   │   ├── planner/       # Timetable scheduling workflows
│   │   │   ├── manager/       # Orchestrator and task router
│   │   │   ├── assistant/     # General conversation interfaces
│   │   │   └── memory/        # Episodic context storage agents
│   │   ├── scheduler/         # Automated cron/timer schedules
│   │   │   ├── algorithms/    # Heuristics (spaced repetition, weight sorting)
│   │   │   ├── constraints/   # Calendar overlap, sleep limits checker
│   │   │   ├── optimizer/     # Constraint Satisfaction Problem (CSP) solvers
│   │   │   └── engine/        # Scheduler runtime orchestrator
│   │   ├── plugins/           # Extendable app integrations
│   │   │   ├── classroom/     # Google Classroom plugin
│   │   │   ├── github/        # GitHub dev syncing plugin
│   │   │   ├── leetcode/      # LeetCode statistics plugin
│   │   │   ├── notion/        # Notion workspace integration plugin
│   │   │   ├── gmail/         # Gmail notification checker plugin
│   │   │   └── college-portal/# Academic portal scrapper/integrator plugin
│   │   └── ...
└── frontend/                  # React + TypeScript Client Workspace
    ├── package.json
    ├── Dockerfile
    ├── tsconfig.json
    ├── vite.config.ts         # Vite configuration with Tailwind CSS v4 and Vitest
    ├── index.html
    └── src/
        ├── main.tsx           # Client bootstrapping
        ├── App.tsx            # Main router and theme container
        ├── index.css          # Tailwind CSS v4 CSS-first config
        ├── assets/            # Global styling resources & vectors
        ├── components/        # Reusable UI component modules
        ├── pages/             # Route-level screens (Dashboard, Calendar, etc.)
        ├── layouts/           # Page Shell Layouts (with Sidebar & topbars)
        ├── hooks/             # Custom React Hooks
        ├── services/          # API query handlers (TanStack Query)
        └── ...
```

---

## 3. Technology Alignment

* **Monorepo Strategy**: Utilizing Node.js `npm workspaces` for workspace orchestration and local package link updates.
* **Shared Logic**: All shared typings, schemas, and common constants are packaged in `packages/shared`. Dependencies are installed by run scripts at root.
- **Frontend Core**:
  * React (Vite-TS scaffolding)
  * React Router v6
  * TanStack React Query v5
  * Tailwind CSS v4 (native CSS configuration, no config javascript required)
  * Lucide React (vector symbols)
- **Backend Core**:
  * Node.js, Express (REST APIs)
  * Prisma ORM
  * SQLite DB (`database/dev.db`)
- **Testing Layer**:
  * Frontend: **Vitest** (Unit/Component tester)
  * Backend: **Jest** (Unit/Route testing environment)
- **Containerization**:
  * Services carry dedicated Docker configs.
  * Root orchestrates dev/prod stacks via Docker Compose.

---

## 4. Scope Exclusions (Out of Scope for Foundation)

To maintain structural elegance and focus on the personal-use product core, the following are **not** created in this setup phase:
1. **Authentication (JWT / OAuth / Login pages)**: No session keys or authorization gates. The application runs immediately as a local workstation.
2. **User Accounts & Multi-tenant models**: Single tenant structure (the active student is the system root user).
3. **Cloud Database / Network persistence**: Strictly localized to SQLite on the storage file system.
4. **Active Agent execution logic**: Folder structures and registration configurations are built, but internal business logic and prompt integrations remain inactive.

---

## 5. Coding Standards & Guidelines

* **TypeScript**: Enforced strictly in Frontend (`frontend/`) and Shared (`packages/shared/`). Use detailed contracts and interfaces over `any`.
* **CSS-First Styling**: In Tailwind CSS v4, customize styling values via standard CSS variables declared in `@theme` in `src/index.css`. Keep components responsive and clean.
* **Separation of Concerns**: Controllers read data, pass payloads to Services, which fetch via Repositories using SQLite/Prisma client.
* **Feature Flags**: Any optional or future integrations (like Gmail sync, Google Calendar, or AI assistant agents) must check flags in `config/featureFlags.js` before executing.
