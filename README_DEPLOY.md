## CradleCare Production Deployment Guide

### 1. Prerequisites
- Node.js 18+ and npm
- A server (VPS, cloud, or Docker host)
- Your domain name (DNS pointed to server IP)
- (Optional) Docker and Docker Compose

### 2. Environment Setup
- Clone the repo: `git clone <repo-url>`
- Install dependencies: `npm install`
- Set up environment variables:
  - `apps/web/.env.production` (set `NEXT_PUBLIC_API_BASE_URL` to your API domain)
  - `apps/api/.env` (set `DATABASE_URL`, `JWT_SECRET`, etc.)

### 3. Build
- Build API: `cd apps/api && npm run build`
- Build Web: `cd apps/web && npm run build`

### 4. Database
- Run migrations: `cd apps/api && npx prisma migrate deploy`
- Seed data (optional): `npm run seed`

### 5. Start Servers
- API: `cd apps/api && npm run start:prod`
- Web: `cd apps/web && npm run start`

### 6. Reverse Proxy (Nginx example)
- Point your domain to the web server (port 3000) and API (port 3001)
- Use Nginx to route traffic and enable HTTPS (see infra/docker/nginx for example configs)

### 7. Updating Production
- Pull latest code: `git pull`
- Rebuild: `npm install && npm run build` in each app
- Restart servers (PM2, systemd, or Docker recommended)

### 8. Zero-downtime/Process Management
- Use PM2 or Docker Compose for process management and easy restarts

### 9. Pushing Future Changes
- Make code changes, commit, and push to your repo
- On server: pull, build, migrate, and restart as above

### 10. Troubleshooting
- Check logs: `npm run start` output, or use PM2 logs
- Ensure all env variables are set for production

---
For Docker/CI/CD, see infra/docker and infra/terraform for advanced deployment.