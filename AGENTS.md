# AGENTS.md

Repository rules for coding agents working on plaintextlab.com.
Global rules live in the maintainer's own agent configuration; this file holds only what is specific to this repository.

## What this is

The source of [plaintextlab.com](https://plaintextlab.com), a blog about building software with coding agents.
It is a fully static site: Next.js exports plain HTML, CSS and JavaScript into `out/`, and GitHub Pages serves that folder.
There is no server, no database and no runtime environment variable.

## Stack

- Next.js (App Router, `output: 'export'`, Turbopack) on React 19.
- Astryx (`@astryxdesign/core`) is the design system and owns every layout, spacing and text decision.
- StyleX compiles this repository's own styles at build time through `babel.config.js` and `postcss.config.js`; both read `stylex.config.js`.
- Vitest with Testing Library runs the unit tests in jsdom; `vitest.config.mts` compiles StyleX with the same options as the build.
- ESLint (`eslint-config-next`) and Prettier enforce style; Husky runs them on every commit.

## Commands

| Command          | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `npm run dev`    | Local dev server                                   |
| `npm run build`  | Static export into `out/`                          |
| `npm run check`  | Lint, typecheck and tests, exactly as CI runs them |
| `npm test`       | Unit tests only                                    |
| `npm run astryx` | Astryx CLI (`npm run astryx -- component Button`)  |

Run `npm run build` before `npm run typecheck` on a fresh clone: the build generates `next-env.d.ts`.

## Conventions

- Feature branches and pull requests only; never commit to `main`.
- Conventional commit subjects: `type(scope): description`.
- Every pull request adds a line under `[Unreleased]` in `CHANGELOG.md`.
- Markdown uses semantic line breaks: one sentence per line.
- Site-wide facts (name, URL, author, time zone) live in `src/config/site.ts`; navigation lives in `src/config/navigation.ts`; width budgets live in `src/config/layout.ts`. Never repeat those values elsewhere.
- Dates are formatted in the configured site time zone, never derived from UTC.
- Merging to `main` publishes the site within a few minutes through `.github/workflows/deploy.yml`.

## Astryx

The block below is maintained by `npx astryx init --features agents`; edit it through that command, not by hand.

<!-- prettier-ignore-start -->
<!-- ASTRYX:START -->
Astryx v0.5.4 · 163 components
CLI: run every command as `npx astryx <cmd>` (shown below as `astryx ...`).

SETUP (once, in your app entry e.g. main.tsx) — without these, components render unstyled:
  import "@astryxdesign/core/reset.css";
  import "@astryxdesign/core/astryx.css";

WORKFLOW — discover, don't guess. Before writing UI:
1. `astryx build "<idea>"` — START HERE: returns a kit (closest [page] + [block]s + [component]s). No args = full playbook.
2. `astryx template <name> [--skeleton]` — scaffold the [page]/[block]s it named, or study their layout. Templates are reference code.
3. `astryx component <Name>` — props + examples for every component you use.

RULES:
- No <div> — components do all layout/spacing, page frame included.
- Frame first: read `astryx docs layout` before writing any page or screen — page frame, region widths, breakpoint behavior.
- Dense data = rows (Table, List/Item), never Card-wrapped list items; Card is for standalone widgets. Status = StatusDot/Token; Badge = counts only.
- Custom styling: component props first; else the xstyle prop / StyleX tokens (@astryxdesign/core/theme/tokens.stylex). No raw hex/px.
- Tokens for every value (`astryx docs tokens`). Brand/accent belongs in the theme (`astryx theme list` / `theme add <slug>`, or `astryx theme template` for a custom one) — never override --color-* in :root.
- SELF-CHECK before you finish: re-read the file and replace any className=, style={{…}}, raw <div>/<span> layout, imported .css/@apply, or hardcoded #hex/px with the component or the xstyle prop + a token. If unsure a component/prop exists, run `astryx component <Name>` / `astryx search "<thing>"`; don't hand-roll CSS.

MORE CLI:
  search "<query>"   find any component / hook / doc / template / block
  component --list   163 components by category
  template --list    page + block recipes
  docs <topic>       browser-support, cli-integrations, color, elevation, getting-started, icons, illustrations, internationalization, layout, migration, motion, principles, shape, spacing, styling-libraries, styling, theme, tokens, typography, working-with-ai
  swizzle <Name>     eject component source for deep customization
  upgrade --apply    run after any @astryxdesign/core bump
<!-- ASTRYX:END -->
<!-- prettier-ignore-end -->
