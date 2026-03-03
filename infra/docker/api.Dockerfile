FROM node:20-alpine

WORKDIR /app

# Copy root package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy full project
COPY . .

# Generate Prisma Client
RUN npx prisma generate --schema=apps/api/prisma/schema.prisma

# Build API
RUN npm run build --workspace=apps/api

WORKDIR /app/apps/api

EXPOSE 4000

CMD ["node", "dist/main.js"]