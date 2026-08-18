# Shuaib Ahamad — Portfolio

A personal portfolio website for **Shuaib Ahamad**, an aspiring cybersecurity professional, web developer, and hardware maker.

## Overview

A lightweight, static single-page portfolio built with vanilla HTML, CSS, and JavaScript. No build step or framework required.

## Structure

```
portfolio/
├── index.html                       # Main page (home, about, skills, projects, contact)
├── style.css                        # Styling
├── script.js                        # Interactions (nav, theme, animations)
├── assets/                          # Icons, favicon, and web manifest
├── CNAME                            # Custom domain (macpanthor.com)
└── .git/                            # Git repository
```

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit <http://localhost:8000>.

## Deployment

Live: [macpanthor.com](https://macpanthor.com) (custom domain via `CNAME`) / [macpanthor.github.io](https://macpanthor.github.io)

Hosted on GitHub Pages. Push changes to the repository to deploy.
