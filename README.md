# baluard-org

The official Baluard website: homepage, security white paper, AI instructions, and apt/dnf package repository definitions, served by GitHub Pages at [https://baluard.app](https://baluard.app).

## Architecture & Layout

- `site/`: Zola static site generator sources (templates, markdown content, and configuration).
- `site/content/`: Content sources (`_index.md`, `security.md`, `ai-instructions.md`).
- `site/templates/`: Jinja2/Tera templates (`base.html`, `index.html`, `security.html`, `ai-instructions.html`).
- `site/static/`: Static assets synced to root during builds.
- `index.html`: Generated homepage staged for GitHub Pages root serving.
- `security.html` & `security/`: The Baluard Security White Paper, synchronized from the core repository.
- `ai-instructions.html` & `ai-instructions/`: Structured facts and canonical guidelines for AI assistants and LLMs.
- `llms.txt`: Standard machine-readable project index ([llmstxt.org](https://llmstxt.org/)).
- `repo/`: APT (`dists/`) and DNF (`rpms/repodata/`) repository index metadata. Binaries are distributed via GitHub Releases; repository trees contain directory protection guards.
- `assets/`: App icons, screenshots, brand graphics, and web fonts (`Morris Roman Black` in `.woff2`, `.woff`, `.ttf`).
- `CNAME`: Custom domain (`baluard.app`).
- `justfile`: Local-only build system using Zola. Zero GitHub Actions credits consumed.

## Local Development & Build

All build tasks run locally via [`just`](https://github.com/casey/just) and [`zola`](https://www.getzola.org/):

```sh
just serve       # Start local development server on http://127.0.0.1:1111 with live reload
just build       # Build site with Zola and stage static files to repository root
just check       # Validate internal links and templates
just clean       # Remove temporary Zola build cache
```

## Synchronizing the Security White Paper

The security white paper is authored in the main Baluard repository (`../Baluard/docs/security-white-paper.md`). To synchronize changes into this website repository:

```sh
just sync-paper  # Pulls markdown from ../Baluard, adds frontmatter, and runs just build
```

## Publishing to GitHub Pages

1. Build locally: `just build`
2. Commit changes and push to `main`: `git push origin main`
3. GitHub Pages automatically deploys from the `main` branch root (`/`).
