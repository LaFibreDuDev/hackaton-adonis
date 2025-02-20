# -- BUILD --
FROM node:23-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# -- CREATION IMAGE --
FROM node:23-alpine
RUN mkdir -p /app
WORKDIR /app
COPY --from=builder /app/build ./
RUN npm ci --omit="dev"
CMD ["node", "bin/server.js"]

