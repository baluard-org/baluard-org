#!/usr/bin/env python3
"""Render the Baluard security white paper markdown to a static HTML page.

Covers exactly the constructs the paper uses: #/##/### headings, paragraphs,
"- " lists, pipe tables, inline code, bold, italic, and links. Stdlib only.
"""
import html
import re
import sys

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — Baluard</title>
<meta name="description" content="How Baluard protects your data: the security white paper.">
<style>
  :root {{
    --bg: #ffffff; --bg-soft: #f6f8fa; --text: #1f2328; --muted: #59636e;
    --border: #d1d9e0; --accent: #2f6feb;
  }}
  @media (prefers-color-scheme: dark) {{
    :root {{
      --bg: #0d1117; --bg-soft: #161b22; --text: #e6edf3; --muted: #9198a1;
      --border: #30363d; --accent: #58a6ff;
    }}
  }}
  * {{ box-sizing: border-box; margin: 0; }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: var(--bg); color: var(--text); line-height: 1.65;
  }}
  a {{ color: var(--accent); text-decoration: none; }}
  a:hover {{ text-decoration: underline; }}
  .top {{ border-bottom: 1px solid var(--border); }}
  .top .in {{ max-width: 820px; margin: 0 auto; padding: 0.9rem 1.25rem; display: flex; align-items: center; gap: 1.5rem; }}
  .top a {{ color: var(--muted); font-size: 0.95rem; }}
  .top a:hover {{ color: var(--text); text-decoration: none; }}
  main {{ max-width: 820px; margin: 0 auto; padding: 3rem 1.25rem 4rem; }}
  h1, h2, h3 {{ line-height: 1.25; letter-spacing: -0.01em; }}
  h1 {{ font-size: 2rem; margin: 0 0 1.5rem; }}
  h2 {{ font-size: 1.4rem; margin: 2.5rem 0 0.9rem; }}
  h3 {{ font-size: 1.1rem; margin: 1.8rem 0 0.6rem; }}
  p {{ margin: 0 0 1rem; }}
  ul {{ margin: 0 0 1rem; padding-left: 1.4rem; }}
  li {{ margin-bottom: 0.35rem; }}
  code {{
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    background: var(--bg-soft); border: 1px solid var(--border); border-radius: 5px;
    padding: 0.08em 0.35em; font-size: 0.88em;
  }}
  table {{ border-collapse: collapse; margin: 0 0 1rem; width: 100%; font-size: 0.92rem; }}
  th, td {{ border: 1px solid var(--border); padding: 0.45rem 0.7rem; text-align: left; }}
  th {{ background: var(--bg-soft); }}
</style>
</head>
<body>
<div class="top"><div class="in">
  <a href="/">&larr; baluard.app</a>
  <a href="https://github.com/baluard-org/baluard">Source</a>
</div></div>
<main>
{body}
</main>
</body>
</html>
"""


def inline(text):
    out = html.escape(text, quote=False)
    out = re.sub(r"`([^`]+)`", r"<code>\1</code>", out)
    out = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", out)
    out = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", out)
    out = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', out)
    return out


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def render(md_lines):
    body, para, rows = [], [], []
    def flush_para():
        if para:
            body.append("<p>" + inline(" ".join(para)) + "</p>")
            para.clear()
    def flush_rows():
        if not rows:
            return
        head = [c.strip() for c in rows[0].strip("|").split("|")]
        out = ["<table><thead><tr>"]
        out += [f"<th>{inline(c)}</th>" for c in head]
        out.append("</tr></thead><tbody>")
        for line in rows[1:]:
            if re.fullmatch(r"[|\s:-]+", line):
                continue
            cells = [c.strip() for c in line.strip("|").split("|")]
            out.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in cells) + "</tr>")
        out.append("</tbody></table>")
        body.append("".join(out))
        rows.clear()

    for line in md_lines:
        s = line.rstrip("\n")
        if s.startswith("#"):
            flush_para(); flush_rows()
            level = len(s) - len(s.lstrip("#"))
            text = s.lstrip("#").strip()
            tag = min(level, 3)
            idattr = f' id="{slug(text)}"' if level <= 2 else ""
            body.append(f"<h{tag}{idattr}>{inline(text)}</h{tag}>")
        elif s.startswith("|"):
            flush_para(); rows.append(s)
        elif s.startswith("- "):
            flush_para()
            if not (body and body[-1] == "<ul>"):
                flush_rows()
                body.append("<ul>")
            body.append(f"<li>{inline(s[2:])}</li>")
        elif not s.strip():
            if para or rows:
                flush_para(); flush_rows()
            elif body and body[-1] == "</ul>":
                body.append("</ul>")
        else:
            if body and body[-1] == "<ul>":
                body.append("</ul>")
            para.append(s.strip())
    flush_para(); flush_rows()
    if body and body[-1] == "<ul>":
        body.append("</ul>")
    return "\n".join(body)


def main():
    if len(sys.argv) != 3:
        sys.exit("usage: render.py <white-paper.md> <out.html>")
    with open(sys.argv[1], encoding="utf-8") as f:
        lines = f.readlines()
    title = next((l.lstrip("# ").strip() for l in lines if l.startswith("# ")), "Security White Paper")
    page = PAGE.format(title=html.escape(title, quote=False), body=render(lines))
    with open(sys.argv[2], "w", encoding="utf-8") as f:
        f.write(page)
    print(f"rendered {sys.argv[2]} ({len(page.split())} words)")


if __name__ == "__main__":
    main()
