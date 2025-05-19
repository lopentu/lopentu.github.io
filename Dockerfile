#syntax=docker/dockerfile:1
FROM node:23-alpine AS base

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using BuildKit cache mount for pnpm store
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the Vite port (default is 5173)
EXPOSE 5173

# Start the development server
CMD ["pnpm", "run", "dev", "--host"]
