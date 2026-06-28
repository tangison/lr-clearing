#!/usr/bin/env python3
"""
Tangison Audit — Discovery phase.
Scans the lr-clearing codebase for SEO, a11y, performance, security, and code-quality issues.

Outputs structured findings to stdout as JSON.
"""
import os
import re
import json
import subprocess
from pathlib import Path

REPO = Path("/home/z/my-project/repos/lr-clearing")
SRC = REPO / "src"
PUBLIC = REPO / "public"

findings = []

def add(category, severity, fixability, title, file=None, line=None, evidence=None, recommendation=None):
    findings.append({
        "category": category,
        "severity": severity,
        "fixability": fixability,
        "title": title,
        "file": str(file.relative_to(REPO)) if file else None,
        "line": line,
        "evidence": evidence,
        "recommendation": recommendation,
    })

# ---------- 1. SEO: missing metadata on pages ----------
for page in (SRC / "app").rglob("page.tsx"):
    rel = page.relative_to(REPO)
    text = page.read_text(encoding="utf-8")
    has_metadata = "export const metadata" in text or "generateMetadata" in text
    if not has_metadata:
        add("SEO", "High", "Autonomous",
            f"Page missing export const metadata (no title/description/canonical)",
            file=page, recommendation="Add export const metadata with title, description, alternates.canonical")

# ---------- 2. SEO: title pattern inconsistent ----------
for page in (SRC / "app").rglob("page.tsx"):
    text = page.read_text(encoding="utf-8")
    # find title: value
    m = re.search(r'title:\s*[\"\']([^\"\']+)[\"\']\s*,', text)
    if m:
        title = m.group(1)
        # Check ends with "L&R Clearing Agency CC"
        if not title.rstrip().endswith("L&R Clearing Agency CC"):
            # Some titles are intentional like /pricing which uses colon
            if "L&R Clearing Agency CC" in title:
                continue  # ok, just formatted differently
            add("SEO", "Low", "Autonomous",
                f"Title does not end with brand suffix: '{title}'",
                file=page, recommendation="Use 'PageName — L&R Clearing Agency CC' or 'PageName, L&R Clearing Agency CC' consistently")

# ---------- 3. SEO: description length ----------
for page in (SRC / "app").rglob("page.tsx"):
    text = page.read_text(encoding="utf-8")
    m = re.search(r'description:\s*[\"\']([^\"\']+)[\"\']', text) or re.search(r'description:\s*[\"\']`([^`]+)`', text)
    if m:
        desc = m.group(1)
        if len(desc) < 70:
            add("SEO", "Medium", "Autonomous",
                f"Meta description too short ({len(desc)} chars, should be 70-160)",
                file=page, evidence=desc[:80], recommendation="Expand description to 70-160 chars")
        elif len(desc) > 170:
            add("SEO", "Low", "Autonomous",
                f"Meta description too long ({len(desc)} chars, should be ≤160)",
                file=page, evidence=desc[:80], recommendation="Trim description to ≤160 chars")

# ---------- 4. Accessibility: Image without alt ----------
for src_file in SRC.rglob("*.tsx"):
    text = src_file.read_text(encoding="utf-8")
    # Match <Image ... > blocks (multiline)
    for m in re.finditer(r'<Image\b([^>]*?)(?:/>|>)', text, re.DOTALL):
        attrs = m.group(1)
        if 'alt=' not in attrs and 'alt={' not in attrs:
            line = text[:m.start()].count('\n') + 1
            add("A11y", "Critical", "Autonomous",
                "<Image> component missing alt attribute",
                file=src_file, line=line,
                evidence=text.splitlines()[line-1].strip()[:120] if line <= len(text.splitlines()) else None,
                recommendation="Add descriptive alt or alt=\"\" for decorative images")

# ---------- 5. Accessibility: <img> instead of next/image ----------
for src_file in SRC.rglob("*.tsx"):
    text = src_file.read_text(encoding="utf-8")
    for m in re.finditer(r'<img\b', text):
        line = text[:m.start()].count('\n') + 1
        add("Performance", "Medium", "Autonomous",
            "Raw <img> tag should use next/image for optimization",
            file=src_file, line=line,
            recommendation="Replace with <Image> from next/image")

# ---------- 6. Accessibility: buttons without aria-label / text ----------
for src_file in SRC.rglob("*.tsx"):
    text = src_file.read_text(encoding="utf-8")
    for m in re.finditer(r'<button\b([^>]*?)>([^<]*?)</button>', text, re.DOTALL):
        attrs = m.group(1)
        content = m.group(2).strip()
        if not content and 'aria-label' not in attrs:
            line = text[:m.start()].count('\n') + 1
            add("A11y", "High", "Autonomous",
                "Empty <button> without aria-label",
                file=src_file, line=line,
                recommendation="Add aria-label or visible text")

# ---------- 7. Accessibility: heading hierarchy ----------
for src_file in SRC.rglob("*.tsx"):
    text = src_file.read_text(encoding="utf-8")
    headings = []
    for m in re.finditer(r'<(h[1-6])\b', text):
        line = text[:m.start()].count('\n') + 1
        headings.append((m.group(1), line))
    # check skip from h1 to h3 (no h2)
    levels = [int(h[0][1]) for h in headings]
    for i in range(1, len(levels)):
        if levels[i] > levels[i-1] + 1:
            add("A11y", "Medium", "Autonomous",
                f"Heading hierarchy skip: h{levels[i-1]} → h{levels[i]}",
                file=src_file, line=headings[i][1],
                recommendation="Don't skip heading levels")

# ---------- 8. Performance: images without priority on hero ----------
hero_text = (SRC / "components" / "Hero.tsx").read_text(encoding="utf-8")
if 'priority' not in hero_text.split('<Image', 1)[1].split('/>', 1)[0]:
    add("Performance", "Medium", "Autonomous",
        "Hero Image missing priority prop",
        file=SRC / "components" / "Hero.tsx",
        recommendation="Add priority to above-the-fold hero image")

# ---------- 9. Security: secrets in source ----------
SECRET_PATTERNS = [
    (r'sk_[a-zA-Z0-9]{20,}', 'Stripe secret key'),
    (r'ghp_[a-zA-Z0-9]{30,}', 'GitHub PAT'),
    (r'AKIA[0-9A-Z]{16}', 'AWS access key'),
    (r'-----BEGIN (RSA |EC |)PRIVATE KEY-----', 'Private key'),
    (r'xox[baprs]-[a-zA-Z0-9-]+', 'Slack token'),
    (r'AIza[0-9A-Za-z\-_]{35}', 'Google API key'),
]
for src_file in SRC.rglob("*"):
    if src_file.suffix not in {".ts", ".tsx", ".js", ".jsx", ".json", ".env", ".md"}:
        continue
    try:
        text = src_file.read_text(encoding="utf-8")
    except:
        continue
    for pat, name in SECRET_PATTERNS:
        for m in re.finditer(pat, text):
            line = text[:m.start()].count('\n') + 1
            add("Security", "Critical", "Requires Human Review",
                f"Possible {name} in source",
                file=src_file, line=line,
                evidence=m.group(0)[:30] + "...",
                recommendation="Remove secret, rotate immediately, use env var")

# Also check .env files
for env_file in [REPO / ".env", REPO / ".env.local", REPO / ".env.production"]:
    if env_file.exists():
        text = env_file.read_text(encoding="utf-8")
        for pat, name in SECRET_PATTERNS:
            for m in re.finditer(pat, text):
                add("Security", "Critical", "Requires Human Review",
                    f"Possible {name} in {env_file.name}",
                    file=env_file,
                    evidence=m.group(0)[:30] + "...",
                    recommendation="Remove from .env, ensure gitignored, rotate secret")

# ---------- 10. .env in .gitignore ----------
gitignore = (REPO / ".gitignore").read_text(encoding="utf-8")
if ".env" not in gitignore:
    add("Security", "Critical", "Autonomous",
        ".env not in .gitignore",
        file=REPO / ".gitignore",
        recommendation="Add .env* to .gitignore")

# ---------- 11. Code Quality: console.log in source ----------
for src_file in SRC.rglob("*"):
    if src_file.suffix not in {".ts", ".tsx"}:
        continue
    text = src_file.read_text(encoding="utf-8")
    for m in re.finditer(r'console\.(log|debug|info)\(', text):
        line = text[:m.start()].count('\n') + 1
        add("Code Quality", "Low", "Autonomous",
            "console.log/debug/info in production source",
            file=src_file, line=line,
            recommendation="Remove or wrap in NODE_ENV check")

# ---------- 12. Code Quality: TODO/FIXME/HACK ----------
for src_file in SRC.rglob("*"):
    if src_file.suffix not in {".ts", ".tsx"}:
        continue
    text = src_file.read_text(encoding="utf-8")
    for m in re.finditer(r'\b(TODO|FIXME|HACK|XXX)\b', text):
        line = text[:m.start()].count('\n') + 1
        # extract the comment line
        line_text = text.splitlines()[line-1] if line <= len(text.splitlines()) else ""
        add("Code Quality", "Low", "Requires Human Review",
            f"Open {m.group(1)} comment",
            file=src_file, line=line,
            evidence=line_text.strip()[:120],
            recommendation="Resolve or convert to tracked issue")

# ---------- 13. Internal links: check for broken hrefs to nonexistent routes ----------
# Collect all internal hrefs
hrefs = set()
for src_file in SRC.rglob("*.tsx"):
    text = src_file.read_text(encoding="utf-8")
    for m in re.finditer(r'href=[\"\']/([a-zA-Z0-9/\-_]+)[\"\']', text):
        hrefs.add("/" + m.group(1))
    for m in re.finditer(r"href=\{[`'\"]/([a-zA-Z0-9/\\-_]+)", text):
        hrefs.add("/" + m.group(1))

# Check which routes exist
existing_routes = set()
for page in (SRC / "app").rglob("page.tsx"):
    rel = "/" + str(page.parent.relative_to(SRC / "app"))
    if rel == "/app":
        rel = "/"
    else:
        rel = rel.replace("\\", "/")
    existing_routes.add(rel)

# Static routes from nav
for href in sorted(hrefs):
    if href in {"/", "/services", "/pricing", "/about", "/industries", "/faq", "/contact", "/brand", "/portfolio", "/terms", "/privacy", "/sitemap"}:
        continue
    # check if it exists
    if href not in existing_routes and not href.startswith("/services/"):
        # check file existence
        candidate = SRC / "app" / href.lstrip("/") / "page.tsx"
        if not candidate.exists():
            add("SEO", "High", "Autonomous",
                f"Internal link to non-existent route: {href}",
                recommendation="Fix or remove broken link")

# ---------- 14. Documentation: README staleness ----------
readme = REPO / "README.md"
if readme.exists():
    text = readme.read_text(encoding="utf-8")
    if "ops.clearing@gmail.com" in text:
        add("Documentation", "Medium", "Autonomous",
            "README references old email ops.clearing@gmail.com",
            file=readme,
            recommendation="Update to hello@lrclearing.com")
    if "lr-clearing-ten.vercel.app" in text:
        add("Documentation", "Medium", "Autonomous",
            "README references old canonical URL lr-clearing-ten.vercel.app",
            file=readme,
            recommendation="Update to www.lrclearing.com")

# ---------- 15. Build / package.json health ----------
pkg = json.loads((REPO / "package.json").read_text(encoding="utf-8"))
# Check for missing engines field
if "engines" not in pkg:
    add("Code Quality", "Low", "Autonomous",
        "package.json missing 'engines' field (Node version pin)",
        file=REPO / "package.json",
        recommendation="Add engines.node to lock Node version")

# ---------- 16. Accessibility: form inputs without labels ----------
for src_file in SRC.rglob("*.tsx"):
    text = src_file.read_text(encoding="utf-8")
    for m in re.finditer(r'<(input|textarea|select)\b([^>]*?)(?:/>|>)', text, re.DOTALL):
        attrs = m.group(2)
        # Match either string literal id="x" or JSX expression id={x}
        has_id = re.search(r'id=[\"\']([^\"\']+)[\"\']', attrs) or re.search(r'id=\{([^}]+)\}', attrs)
        has_aria_label = 'aria-label' in attrs or 'aria-labelledby' in attrs
        has_placeholder_only = 'placeholder=' in attrs and not has_aria_label
        # Only flag if there's no id AND no aria-label
        if has_placeholder_only and not has_id:
            line = text[:m.start()].count('\n') + 1
            add("A11y", "Medium", "Autonomous",
                f"<{m.group(1)}> has only placeholder, no <label> or aria-label",
                file=src_file, line=line,
                recommendation="Add aria-label or associated <label htmlFor>")

# ---------- Output ----------
print(json.dumps({"findings": findings, "count": len(findings)}, indent=2, default=str))
