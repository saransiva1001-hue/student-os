# Shared ESLint Configuration Directory

This directory stores centralized config specifications. Workspaces (frontend, backend, shared) can reference or extend configurations from this folder.

### Core Rules

1. **Strict Types**: Always enforce static typing in TypeScript packages.
2. **Import Ordering**: Keep imports clean and sorted (standard Node libraries, third-party libraries, workspace packages, local relative files).
3. **No Unused Code**: Clean up debug statements and unused local imports before pushes.
