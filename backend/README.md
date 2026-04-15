# ISG360 Backend (NestJS + Prisma + PostgreSQL)

## Setup

1. Start PostgreSQL with Docker (from project root):

```bash
cd ..
docker compose up -d postgres
```

2. Install dependencies:

```bash
npm install
```

3. Create env file:

```bash
cp .env.example .env
```

Set at least:
- `DATABASE_URL`
- `JWT_SECRET`
- `CORS_ORIGIN` (default `http://localhost:3000`)

Default Docker DB URL:

```bash
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5433/isg360"
```

4. Generate Prisma client:

```bash
npm run prisma:generate
```

5. Run migrations:

```bash
npm run prisma:migrate -- --name init
```

6. Start backend:

```bash
npm run start:dev
```

API base URL: `http://localhost:4000/api`

## Core endpoints

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (JWT)
- `GET|POST|PATCH|DELETE /api/companies` (JWT)
- `GET|POST|PATCH|DELETE /api/employees` (JWT)

## Docker DB helpers

From project root (`/Users/velikalkan/ISG360`):

```bash
docker compose up -d postgres
docker compose ps
docker compose logs -f postgres
docker compose down
```
