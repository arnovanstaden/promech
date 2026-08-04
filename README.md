# Promech

A website for an engineering firm, showcasing their services and past projects.

**Live site:** [promechengineering.co.za](https://promechengineering.co.za/)

## Getting started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

- **Website:** [http://localhost:3000](http://localhost:3000)
- **Sanity Studio:** [http://localhost:3000/studio](http://localhost:3000/studio)

Both the frontend and CMS run from a single Next.js app. The website uses the Pages Router; Sanity Studio is embedded via the App Router at `/studio`.

## Environment variables

Copy `.env.local.example` to `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=quufujjm
NEXT_PUBLIC_SANITY_DATASET=production
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server (website + studio) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run sanity:typegen` | Generate Sanity TypeScript types from schema |

## Tech stack

- Next.js 16 (Pages Router + App Router)
- React 19
- TypeScript
- SASS
- Sanity v6 (embedded Studio)
- GraphQL (via Apollo Client)

## Project structure

```
app/studio/          # Sanity Studio (App Router)
pages/               # Website pages (Pages Router)
sanity/schemaTypes/  # Sanity content schemas
sanity.config.ts     # Sanity Studio configuration
```
