# ── Baluard Website (baluard.app) ─────────────────────────────
# Local-only build system using Zola. Zero GitHub Actions credits.
# ────────────────────────────────────────────────────────────

default:
	@just --list --unsorted

# Start Zola development server with live reload on http://127.0.0.1:1111
serve:
	cd site && zola serve -p 1111

# Build the site with Zola. Output stays in site/public; the repo root carries sources only.
build:
	test -f site/static/assets/social-card.png || ./scripts/social-card.sh
	test -f site/static/favicon.ico || ./scripts/favicon.sh
	cd site && zola build

# Build locally and publish site/public to the gh-pages branch (branch-based Pages, no Actions)
deploy:
	#!/usr/bin/env bash
	set -euo pipefail
	test -f site/static/assets/social-card.png || ./scripts/social-card.sh
	test -f site/static/favicon.ico || ./scripts/favicon.sh
	cd site && zola build
	touch public/.nojekyll
	cd public
	git init -q -b gh-pages
	git add -A
	git commit -qm "Publish site build"
	git push -qf "$(git -C ../.. config remote.origin.url)" gh-pages

# Regenerate the 1200x630 social card (og:image) into site/static/assets/
social-card:
	./scripts/social-card.sh

# Sync security white paper markdown from the main Baluard repository
sync-paper:
	@printf '+++\ntitle = "Baluard Security White Paper"\ndescription = "How Baluard protects your data: the security white paper."\ntemplate = "security.html"\nslug = "security"\npath = "security"\n+++\n\n' > site/content/security.md
	@cat ../baluard/docs/security/security-white-paper.md >> site/content/security.md
	@just build
	@echo "Security white paper synchronized from ../baluard/docs/security/security-white-paper.md."

# The main repo went public, so external link validation runs in full
check:
	cd site && zola check --skip-external-links

# Clean temporary Zola build cache
clean:
	rm -rf site/public
