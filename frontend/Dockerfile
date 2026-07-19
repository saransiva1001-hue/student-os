FROM node:20-alpine
WORKDIR /app

# Copy lockfiles and manifests
COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY frontend/package*.json ./frontend/

# Install frontend dependencies
RUN npm ci -w frontend -w packages/shared

# Copy repository contents
COPY . .

WORKDIR /app/frontend
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
