# CradleCare

Premium medical‑commerce ecosystem (Pregnancy → 5 Years), led by an MBBS Doctor.

## Apps

- `apps/api`: NestJS + Prisma (Postgres) + Redis (planned)
- `apps/web`: Next.js (App Router, SSR)
- `apps/mobile`: React Native (Expo)

## Prerequisites

- Node.js (LTS)
- Docker Desktop (recommended) for local Postgres/Redis

## Quick start (local)

1) Install dependencies

```bash
cd c:\Users\minis\OneDrive\Desktop\CradleCare
npm install
```

2) Start Postgres + Redis

```bash
docker compose up -d
```

If `docker compose` doesn’t work, try:

```bash
docker-compose up -d
```

3) Run DB migrations (API)

```bash
cd apps\api
npx prisma generate
npx prisma migrate dev --name init_schema
```

4) Start API + Web

```bash
cd ..\..
npm run dev:api
```

In another terminal:

```bash
npm run dev:web
```

## URLs

- API health: `http://localhost:3001/health`
- API products: `http://localhost:3001/products`
- Web: `http://localhost:3000`

