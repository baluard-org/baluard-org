# AGENTS.md — baluard-org

Website and package repo for https://baluard.app, deployed by GitHub Pages from the `main` branch root (no CI, all builds local). Zola static site + committed apt/dnf/F-Droid metadata. Sibling of the product repo at `../baluard`; the `Baluard/` workspace parent is not a git repo.

## Commands

Requires `zola` (0.23.x) and `just`. All tasks go through the justfile:

- `just serve` — dev server with live reload at http://127.0.0.1:1111
- `just build` — `zola build`, then stage generated files to repo root: `index.html`, `<page>/index.html` (security, ai-instructions, support, privacy, tos), `assets/`, `llms.txt`, `favicon.ico`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`
- `just check` — template + internal link validation (`--skip-external-links`, see gotchas)
- `just social-card` — regenerate the 1200x630 og:image via `scripts/social-card.sh`
- `just sync-paper` — rebuild `site/content/security.md` from `../baluard/docs/security/security-white-paper.md`, then build
- `just clean` — remove `site/public`

No test suite exists. `just check` is the only validation gate. Run `just build` before committing content/template changes: the root-level files ARE the deploy artifact.

## Architecture

**Generated vs source is the critical boundary.** Everything Zola writes to the repo root is output — never hand-edit root `index.html`, `security/`, `ai-instructions/`, `support/`, `privacy/`, `tos/`, root `assets/`, `llms.txt`, `favicon.ico`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`. Edit under `site/`, then `just build`.

- `site/config.toml` — Zola config: `base_url`, title, description, `[extra]` (version, github_repo, repo signing fingerprint)
- `site/content/` — markdown pages: `_index.md`, `security.md`, `ai-instructions.md`, `privacy.md`, `support.md`, `tos.md`. Frontmatter must set `title`, `description`, `template`, `slug`, `path` (copy the heredoc in the `sync-paper` recipe)
- `site/templates/` — Tera. `base.html` is the shared shell (head, meta/og tags, i18n bootstrap); `index.html` holds the entire homepage markup; `page.html` is the generic content page; `security.html` and `ai-instructions.html` are page-specific
- `site/static/` — copied verbatim by `zola build`: `assets/` (lock SVGs, Morris Roman fonts, screenshots, `i18n.js`, `social-card.png`), `favicon.ico`, `llms.txt`, `manifest.webmanifest`
- `scripts/` — `social-card.sh`, `favicon.sh` (asset generators invoked by build guards)
- `repo/` — apt (`dists/`, `pool/`) and dnf (`rpms/`) metadata, `SHA256SUMS` + signature, `baluard-release.asc`. Binaries ship via GitHub Releases, never in this tree
- `fdroid/` — F-Droid repo metadata; `*.apk` is gitignored everywhere except `fdroid/repo/`
- `CNAME` — Pages custom domain

Deploy: `just build`, commit, push `main`. Pages publishes the repo root.

## Gotchas

- Tera scoping: guard `{% if page %}` / `{% if section %}` before ANY dotted access. `default()` does not help — section renders have no `page` var and page renders have no `section`; `default()` only fills undefined leaves of a defined root.
- Template asset paths must be root-relative (`./assets/...`) because generated HTML lands at different depths (`/`, `/security/`, ...). i18n: translations live in `site/static/assets/i18n.js`; an inline head script resolves localStorage/navigator language before first paint — keep it inline and `i18n.js` deferred.
- SVG rendering must go through `rsvg-convert`, never ImageMagick directly: its builtin SVG parser drops gradient fills and outputs flat black.
- justfile build order is load-bearing: asset-generation guards (`social-card.png`, `favicon.ico`) run BEFORE `zola build` and before the root `cp` steps, or fresh clones fail.
- `just check` runs the full external link validation: the main repo went public, so its previously-excluded 404s are gone.
- `just sync-paper` clobbers two hand adaptations in `site/content/security.md` — re-apply after running: (1) the ADR cross-reference must be a markdown link to `https://github.com/baluard-org/baluard/tree/main/docs/adr` (the source file uses the repo-relative `../adr/index.md`, which is correct on GitHub but dead on the site); (2) `docs/linux-repositories.md` must read `docs/dev/linux-repositories.md`.
- Crypto claims site-wide: AES-256-GCM with 96-bit nonces. Never write ChaCha20-Poly1305; no ChaCha exists in the product.
- App version shown on the site comes from `[extra].version` in `site/config.toml`; sync it when the product releases.

## Commits

Conventional Commits, lowercase imperative, scoped: `feat(site):`, `fix(site):`, `style(site):`, `docs(site):`, `chore(site):`. Scopes in history: `site`, `hero`, `download`, `i18n`, occasionally unscoped `docs:`. No CONTRIBUTING or PR docs; history is direct pushes to `main`.
