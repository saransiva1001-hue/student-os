FROM node:20-alpine
WORKDIR /app

# Copy lockfiles and manifests
COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY backend/package*.json ./backend/

# Install backend dependencies
RUN npm ci -w backend -w packages/shared

# Copy repository contents
COPY . .

# Generate Prisma Client
WORKDIR /app/backend
RUN npx prisma generate

EXPOSE 5000
CMD ["npm", "start"]
