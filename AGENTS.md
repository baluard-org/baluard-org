# AGENTS.md — baluard-org

Website repo for https://baluard.app, served by GitHub Pages from the `gh-pages` branch (no Actions, all builds local). Zola static site; sources live in `site/`, `main` carries no build output. Sibling of the product repo at `../baluard`; the `Baluard/` workspace parent is not a git repo.

## Commands

Requires `zola` (0.23.x) and `just`. All tasks go through the justfile:

- `just serve` — dev server with live reload at http://127.0.0.1:1111
- `just build` — `zola build` into `site/public` (guards regenerate the social card and favicon first)
- `just deploy` — build and force-push `site/public` to the `gh-pages` branch (`CNAME` + `.nojekyll` included)
- `just check` — template + internal link validation (`--skip-external-links`, see gotchas)
- `just social-card` — regenerate the 1200x630 og:image via `scripts/social-card.sh`
- `just sync-paper` — rebuild `site/content/security.md` from `../baluard/docs/security/security-white-paper.md`, then build
- `just clean` — remove `site/public`

No test suite exists. `just check` is the only validation gate.

**Local CI: always build before you push, no exceptions.** There is no CI to catch problems, so the pushed tree must already be verified locally: run `just check` and `just build` and confirm both are green before every commit and push. Never push and wait for CI to find out. Publishing is a separate step: `just deploy` builds and force-pushes `site/public` to the `gh-pages` branch (branch-based Pages, no Actions). gh-pages is a build-artifact branch, so its force-push is expected. Pushing `main` never deploys: the live site updates only through `just deploy`; a stale baluard.app almost always means undeployed `main` commits.

## Architecture

**Generated vs source is the critical boundary.** `site/public/` is generated output: never commit it, never edit it. `main` carries sources only; the published artifact lives on `gh-pages` and is replaced wholesale by `just deploy`. Edit under `site/`, then `just build`.

- `site/config.toml` — Zola config: `base_url`, title, description, `[extra]` (version, github_repo, repo signing fingerprint)
- `site/content/` — markdown pages: `_index.md`, `ai-instructions.md`, `changelog.md`, `donate.md`, `privacy.md`, `security.md`, `support.md`, `tos.md`, `what-the-git.md`. Frontmatter must set `title`, `description`, `template`, `slug`, `path` (copy the heredoc in the `sync-paper` recipe)
- `site/templates/` — Tera. `base.html` is the shared shell (head, meta/og tags, i18n bootstrap); `index.html` holds the entire homepage markup; `page.html` is the generic content page; `security.html` and `ai-instructions.html` are page-specific
- `site/static/` — copied verbatim by `zola build`: `assets/` (lock SVGs, Morris Roman fonts, screenshots, `i18n.js`, `social-card.png`), `favicon.ico`, `llms.txt`, `manifest.webmanifest`
- `scripts/` — `social-card.sh`, `favicon.sh` (asset generators invoked by build guards)
- `site/static/CNAME` — Pages custom domain; must ship in the artifact or the domain detaches from the site
- Package repos live elsewhere: apt/dnf/pacman and F-Droid moved to the sibling `baluard-packages` repo (`packages.baluard.app`); this tree carries no package bytes

Deploy: `just deploy` — see the Local CI rule above.

## Gotchas

- Tera scoping: guard `{% if page %}` / `{% if section %}` before ANY dotted access. `default()` does not help — section renders have no `page` var and page renders have no `section`; `default()` only fills undefined leaves of a defined root.
- Template asset paths must be root-relative (`./assets/...`) because generated HTML lands at different depths (`/`, `/security/`, ...). i18n: translations live in `site/static/assets/i18n.js`; an inline head script resolves localStorage/navigator language before first paint — keep it inline and `i18n.js` deferred. When the dictionary changes, bump the script URL's `?v=` to the change's unix timestamp (cache-bust; stale dictionaries have rewritten button labels before).
- SVG rendering must go through `rsvg-convert`, never ImageMagick directly: its builtin SVG parser drops gradient fills and outputs flat black.
- justfile build order is load-bearing: asset-generation guards (`social-card.png`, `favicon.ico`) run BEFORE `zola build` and before the root `cp` steps, or fresh clones fail.
- `just check` skips external link validation (`--skip-external-links`); broken relative links that Zola cannot resolve (no `@/` prefix) also escape it, so verify rendered output for new link patterns.
- `just sync-paper` copies the white paper verbatim from `../baluard/docs/security/security-white-paper.md`; the site-specific adaptations (GitHub links for ADRs and internal docs, the `docs/dev/` path) live in the source file now, so nothing needs re-applying after a sync.
- Crypto claims site-wide: AES-256-GCM with 96-bit nonces. Never write ChaCha20-Poly1305; no ChaCha exists in the product.
- App version shown on the site comes from `[extra].version` in `site/config.toml`; sync it when the product releases.

## Commits

Conventional Commits, lowercase imperative, scoped: `feat(site):`, `fix(site):`, `style(site):`, `docs(site):`, `chore(site):`. Scopes in history: `site`, `hero`, `download`, `i18n`, occasionally unscoped `docs:`. No CONTRIBUTING or PR docs; history is direct pushes to `main`.
