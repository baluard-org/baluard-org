# ── Baluard Website (baluard.app) ─────────────────────────────
# Local-only build system using Zola. Zero GitHub Actions credits.
# ────────────────────────────────────────────────────────────

default:
	@just --list --unsorted

# Start Zola development server with live reload on http://127.0.0.1:1111
serve:
	cd site && zola serve -p 1111

# Build the site with Zola and stage static files to repository root for GitHub Pages
build:
	test -f site/static/assets/social-card.png || ./scripts/social-card.sh
	test -f site/static/favicon.ico || ./scripts/favicon.sh
	cd site && zola build
	cp site/public/index.html ./index.html
	for page in security ai-instructions support privacy tos; do \
		mkdir -p "./$page"; \
		cp "site/public/$page/index.html" "./$page/index.html"; \
	done
	cp site/public/llms.txt ./llms.txt
	cp site/public/favicon.ico ./favicon.ico
	cp site/public/manifest.webmanifest ./manifest.webmanifest
	cp site/public/robots.txt ./robots.txt
	cp site/public/sitemap.xml ./sitemap.xml
	mkdir -p ./assets
	rsync -a site/public/assets/ ./assets/
	@echo "Build complete: index.html, content pages, llms.txt, and assets/ updated."

# Regenerate the 1200x630 social card (og:image) into site/static/assets/
social-card:
	./scripts/social-card.sh

# Sync security white paper markdown from the main Baluard repository
sync-paper:
	python3 -c '\
	fm = """+++\n\
	title = "Baluard Security White Paper"\n\
	description = "How Baluard protects your data: the security white paper."\n\
	template = "security.html"\n\
	slug = "security"\n\
	path = "security"\n\
	+++\n\n"""; \
	with open("../baluard/docs/security/security-white-paper.md") as src, open("site/content/security.md", "w") as dst: \
	    dst.write(fm + src.read())'
	@just build
	@echo "Security white paper synchronized from ../baluard/docs/security/security-white-paper.md."

# External links are skipped: ai-instructions.md targets the main repo, which stays private until launch
check:
	cd site && zola check --skip-external-links

# Clean temporary Zola build cache
clean:
	rm -rf site/public
