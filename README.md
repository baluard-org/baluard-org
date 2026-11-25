# baluard-org

The official Baluard website: homepage, security white paper, AI instructions, donate, changelog, support, TOS, and privacy pages, built with Zola and published to GitHub Pages at [https://baluard.app](https://baluard.app).

Package repositories (apt, dnf, pacman) and the F-Droid tree live in their own repository, [baluard-packages](https://github.com/baluard-org/baluard-packages), served at [https://packages.baluard.app](https://packages.baluard.app). This repo carries no package bytes.

## Architecture & Layout

- `site/`: Zola static site generator sources (templates, markdown content, and configuration).
- `site/content/`: Content sources (`_index.md`, `security.md`, `ai-instructions.md`, `changelog.md`, `donate.md`, `privacy.md`, `security.md`, `support.md`, `tos.md`, `what-the-git.md`).
- `site/templates/`: Jinja2/Tera templates (`base.html`, `index.html`, `security.html`, `ai-instructions.html`).
- `site/static/`: Static assets synced to root during builds.
- `site/public/`: Zola build output (gitignored; `just deploy` publishes it).
- `scripts/`: social card and site helpers.
- `justfile`: Local-only build system using Zola. Zero GitHub Actions credits consumed.

## Local Development & Build

All build tasks run locally via [`just`](https://github.com/casey/just) and [`zola`](https://www.getzola.org/):

```sh
just serve       # Start local development server on http://127.0.0.1:1111 with live reload
just build       # Build the site with Zola; output stays in site/public
just check       # Validate internal links and templates (external links skipped)
just clean       # Remove the Zola build output
```

## Synchronizing the Security White Paper

The security white paper is authored in the main Baluard repository (`../baluard/docs/security/security-white-paper.md`). To synchronize changes into this website:

```sh
just sync-paper  # Pulls markdown from ../baluard, adds frontmatter, and runs just build
```

## Publishing to GitHub Pages

1. Build locally: `just build`
2. Publish: `just deploy` (builds `site/public`, then commits and force-pushes it to the `gh-pages` branch)
3. GitHub Pages serves the `gh-pages` branch at baluard.app.
