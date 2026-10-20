# jeff-portfolio

Jeff's portfolio site: Next.js with TypeScript.

Status: active. Next step is to add the set-down case study as a Live Project card once the case study is finished. Tracked on the project board in the second-brain vault (`pages/ai-workflows/project-board.md`).

## Run it
- `npm run dev` starts the dev server; `npm run build` builds; `npm start` serves the build.
- `.claude/launch.json` holds the preview server config.
- There is no test script and no README yet.

## Where things are
- `app/` pages and components, `public/` static assets, `docs/specs/` component specs (the WorkCard spec is the reference for how specs are written and reviewed).

## Rules
- Accessibility is a stated goal: recent work shortened accessible names and moved links onto card titles. Keep link text short and meaningful, and check keyboard and screen-reader behavior on any card or link change.
- Work through pull requests; the recent history is a numbered PR series.
- Write specs in `docs/specs/` before building a new component, and record review decisions in the spec's log.
