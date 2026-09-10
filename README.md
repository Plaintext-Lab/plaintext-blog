# plaintextlab.com

Source for [plaintextlab.com](https://plaintextlab.com), a blog about building software with coding agents.

## Stack

- [Next.js](https://nextjs.org) with the App Router, exported as static files.
- [Astryx](https://astryx.atmeta.com), Meta's open-source design system, for every component and layout.
- [StyleX](https://stylexjs.com) for the site's own styles, compiled at build time.
- [Vitest](https://vitest.dev) and Testing Library for unit tests.
- GitHub Actions builds the site and publishes it to GitHub Pages on every push to `main`.

## Local development

Requires Node.js 22.18 or newer.

```sh
npm ci
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Checks

```sh
npm run check
```

That runs lint, typecheck and the unit tests, the same way CI does.
`npm run build` writes the static site to `out/`; run it once on a fresh clone before `npm run typecheck`, because the build generates `next-env.d.ts`.
Husky runs the same checks on every commit.

## Publishing

Merging a pull request into `main` triggers [`deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `out/` to GitHub Pages at [plaintextlab.com](https://plaintextlab.com).
Nothing is published from a branch; pull requests only run the checks.

## Working with coding agents

[`AGENTS.md`](AGENTS.md) holds the repository rules for Codex, Claude Code and other agents; `CLAUDE.md` points at it.
The Astryx CLI is available as `npm run astryx -- <command>`.

## License

Posts and other written content are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
The site's code is licensed under the [MIT License](LICENSE).
See [LICENSE](LICENSE) for both.
