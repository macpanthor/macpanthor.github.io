# Shuaib Ahamad — Portfolio

A personal portfolio website for **Shuaib Ahamad**, an aspiring cybersecurity professional, web developer, and hardware maker.

## Overview

A lightweight, static portfolio built with vanilla HTML, CSS, and JavaScript. No build step or framework required.

The site has two pages:

- `index.html` — the main single-page view (home, about, skills, a projects overview, and contact).
- `projects.html` — a dedicated projects page with an in-depth case study of the flagship Warden Inspection System plus feature lists for every other project.

## Structure

```
portfolio/
├── index.html                       # Main page (home, about, skills, projects overview, contact)
├── projects.html                    # Dedicated projects page (full case studies)
├── style.css                        # Styling
├── script.js                        # Interactions (nav, scroll reveals, responsive menu, contact form)
├── assets/                          # Icons, favicon, and web manifest
├── CNAME                            # Custom domain (macpanthor.com)
└── .git/                            # Git repository
```

## Pages

### `index.html`

Single-page layout with sections for Home (hero + typewriter), About, Skills (grouped badge grid), a Projects overview (cards linking into `projects.html`), and Contact (Formspree). The in-page "Projects" nav item links to the dedicated projects page.

### `projects.html`

A standalone projects page (reuses the same navbar, footer, and design system). It includes:

- A **featured case study** of the **Warden Inspection System** — a private, production-grade hostel management platform built for Albukhary International University (AIU) — with real metrics (13 hostel blocks, ~946 rooms, 26 database tables, 6 roles, ~31k lines of code), grouped feature lists (core modules, compliance & governance, engineering highlights), and a technology-stack breakdown.
- Cards for the remaining projects (WLED desk build, C grade manager, 3D printing, ESP32 eye tracking, Ollama local AI, ComfyUI, and the go.macpanthor URL shortener), each with a brief description and a compact feature list.

> **Note:** The Warden Inspection System is a **private repository**, so it has no public GitHub link. The page directs visitors to request a code walkthrough or demo instead.

## Scripts

`script.js` is shared by both pages. It is written defensively so that it runs cleanly on `projects.html`, which omits the hero typewriter and the contact form (the script guards those elements before attaching handlers).

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit <http://localhost:8000>.

## Libraries & Resources

The site is built with **vanilla HTML, CSS, and JavaScript** — no front-end frameworks or JavaScript libraries are used. All icons are inline SVGs.

The only third-party resources are public image services used for skill badges:

| Resource | Usage |
| --- | --- |
| [Skill Icons](https://skillicons.dev) | Skill badge icons (HTML, CSS, JS, PHP, MySQL, Git, etc.) |
| [Iconify](https://iconify.design) | Skill badge icons (XAMPP, phpMyAdmin, ComfyUI, Ollama, ESP32, etc.) |

## Deployment

Live: [macpanthor.com](https://macpanthor.com) (custom domain via `CNAME`) / [macpanthor.github.io](https://macpanthor.github.io)

Hosted on GitHub Pages. Push changes to the repository to deploy.
