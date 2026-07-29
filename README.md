# Thomas Jutinico — Portfolio

A recruiter-agent-styled portfolio built with [Astro](https://astro.build): the page renders as an AI agent's tool-call trace (`fetch_profile`, `list_projects`, `scan_skills`, `verify_wins`, `recommend`) walking through Thomas's profile, projects, skills and achievements.

## Project structure

```text
/
├── public/                  # favicons, static assets
├── src/
│   ├── assets/               # optimized images (processed by Astro)
│   ├── components/
│   │   └── agent-trace/      # the trace step components
│   ├── data/                 # site content (site.ts)
│   ├── layouts/              # BaseLayout.astro (SEO, fonts, global styles)
│   ├── pages/                # index.astro
│   └── styles/                # global.css (design tokens)
└── astro.config.mjs
```

## Commands

| Command             | Action                                      |
| :------------------- | :------------------------------------------- |
| `npm install`         | Install dependencies                         |
| `npm run dev`          | Start local dev server at `localhost:4321`   |
| `npm run build`        | Build the production site to `./dist/`       |
| `npm run preview`      | Preview the production build locally         |
| `npm run astro check`  | Type-check `.astro` files                    |

## Deploying

Set `site` in `astro.config.mjs` to your deployed URL once you have one — it powers the canonical link and Open Graph tags in `src/layouts/BaseLayout.astro`.
