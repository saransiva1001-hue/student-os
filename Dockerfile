# Multi-stage production build template for monorepo
FROM node:20-alpine AS base
WORKDIR /app

# Copy lockfiles and manifests
COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Install dependencies for all workspaces
RUN npm ci

# Copy full repository source
COPY . .

# Build assets
RUN npm run build --workspaces --if-present

# Development stage (runs all services)
FROM base AS dev
CMD ["npm", "run", "dev"]
