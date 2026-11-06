# Project CLAUDE.md - The Myspace

## Project Overview

A retro Myspace-inspired social profile web app — "2007 called, it wants its Myspace profile back."

## Tech Stack

- **Language:** TypeScript (ESM)
- **Frontend:** React 19, MUI (Material UI) 9, Emotion, React Router 7
- **Backend:** Koa 3 with koa-static, koa-body
- **Bundler:** Webpack 5 with Babel (TS + React presets)
- **Styling:** Sass (SCSS)
- **Linting:** @mikey-pro/eslint-config-react (ESLint + Prettier + Stylelint)

## Architecture

```
client/
  src/
    components/         # React components
    App.tsx             # Root component
    styles.css          # Global styles
  public/               # Static assets
server/
  data/                 # Server data files
  pages/                # Server-rendered pages
  index.ts              # Koa server entry point
server.ts               # Server bootstrap
db/                     # Dummy data + query helpers
local/                  # Local static-serve scripts (client.ts, server.ts)
webpack.config.ts       # Webpack configuration
tsconfig.json           # TypeScript config
eslint.config.js        # ESLint flat config
```

## Commands

```bash
npm run build:dev       # Webpack dev build (watch mode)
npm run build:prod      # Webpack production build
npm run start:client    # Start Koa server (ts-node server.ts)
npm run fix             # ESLint auto-fix all files
```

## Conventions

- ESM (`"type": "module"`)
- React with TypeScript (`.tsx` components)
- Prettier via `mikey-pro/prettier`
- Stylelint via `mikey-pro/stylelint`
- Conventional commits

## Telemetry

Wolfe telemetry standard v1: loader tag in `client/public/index.html`; custom events via `client/src/telemetry.ts`, documented in `docs/reference/analytics-events.md`. No third-party trackers.

## Testing

No tests configured.
