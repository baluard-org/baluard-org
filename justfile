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
	cd site && zola build
	cp site/public/index.html ./index.html
	mkdir -p ./security
	cp site/public/security/index.html ./security.html
	cp site/public/security/index.html ./security/index.html
	mkdir -p ./ai-instructions
	cp site/public/ai-instructions/index.html ./ai-instructions.html
	cp site/public/ai-instructions/index.html ./ai-instructions/index.html
	cp site/public/llms.txt ./llms.txt
	cp site/public/robots.txt ./robots.txt
	cp site/public/sitemap.xml ./sitemap.xml
	mkdir -p ./assets
	rsync -a site/public/assets/ ./assets/
	@echo "Build complete: index.html, security, ai-instructions, llms.txt, and assets/ updated."

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
	with open("../Baluard/docs/security-white-paper.md") as src, open("site/content/security.md", "w") as dst: \
	    dst.write(fm + src.read())'
	@just build
	@echo "Security white paper synchronized from ../Baluard/docs/security-white-paper.md."

# Validate links and templates
check:
	cd site && zola check

# Clean temporary Zola build cache
clean:
	rm -rf site/public
