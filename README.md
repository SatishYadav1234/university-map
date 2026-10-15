# University People & Expertise Map

## Overview

A modern **React 18 + Vite 5** single‑page application that showcases:
- An interactive organisational hierarchy tree.
- A faceted expertise directory with 3D perspective tilt cards.
- A **Three.js**‑powered Knowledge Galaxy visualising mentorship relationships.
- A ledger of funded labs & grants.
- A **10‑slide 3D animated PPT** presentation (see `src/components/Presentation3D.jsx`).

The project is generated under `C:\Users\satish yadav\.gemini\antigravity\scratch\university-map`.  It can be opened and edited in **VS Code** and published publicly (Netlify, Vercel, GitHub Pages, etc.).

---

## Getting Started in VS Code

1. **Open the folder**
   ```
   code "C:\Users\satish yadav\.gemini\antigravity\scratch\university-map"
   ```
   This opens the workspace with the full source code.

2. **Install Node.js** (if not already installed).  The project requires **Node 20+**.
   - Download from https://nodejs.org/ (LTS version).
   - Verify: `node -v` (should be `v20.x`), `npm -v`.

3. **Install dependencies**
   ```
   npm install --legacy-peer-deps
   ```
   (The `--legacy-peer-deps` flag avoids peer‑dependency warnings with Vite 5.)

4. **Running the dev server**
   ```
   npm run dev
   ```
   - VS Code will automatically open `http://localhost:3000` in your default browser.
   - The app hot‑reloads on file changes.

5. **Build for production**
   ```
   npm run build
   ```
   The static output lives in `dist/`.

6. **Preview the production build locally** (optional)
   ```
   npm run preview
   ```
   This starts a tiny static server on `http://localhost:4173`.

---

## VS Code Task Configuration (optional)

Create a `.vscode` folder with `tasks.json` to run common commands directly from the **Run Task** UI:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "npm install",
      "type": "shell",
      "command": "npm install --legacy-peer-deps",
      "group": "build",
      "presentation": { "reveal": "always" }
    },
    {
      "label": "npm dev",
      "type": "shell",
      "command": "npm run dev",
      "isBackground": true,
      "problemMatcher": [],
      "group": "none",
      "presentation": { "reveal": "always" }
    },
    {
      "label": "npm build",
      "type": "shell",
      "command": "npm run build",
      "group": "build",
      "presentation": { "reveal": "always" }
    },
    {
      "label": "npm preview",
      "type": "shell",
      "command": "npm run preview",
      "isBackground": true,
      "problemMatcher": [],
      "group": "none",
      "presentation": { "reveal": "always" }
    }
  ]
}
```
Save this as `C:\Users\satish yadav\.gemini\antigravity\scratch\university-map\.vscode\tasks.json`.

Now you can press **Ctrl+Shift+P → Run Task** and pick any of the above.

---

## Making the Site Publicly Accessible

### 1. Deploy to Netlify (free & simple)
1. Push the project to a GitHub repository (e.g., `github.com/yourname/university-map`).
2. Sign‑in to **Netlify** and click **New site → Import from Git**.
3. Connect your repo, set the **Build command** to `npm run build` and the **Publish directory** to `dist/`.
4. Netlify automatically runs `npm install` (it respects `package-lock.json`).
5. After deployment, Netlify gives you a link like `https://awesome‑map.netlify.app`. Share that URL.

### 2. Deploy to Vercel (also free)
1. Install Vercel CLI (optional) or use the Vercel dashboard.
2. In the dashboard, click **New Project → Import Git Repository**.
3. Set **Framework Preset** to *Vite*.
4. Build command: `npm run build`; Output directory: `dist`.
5. Vercel will provide a public URL (`https://university-map.vercel.app`).

### 3. GitHub Pages (static only)
1. After `npm run build`, commit the `dist/` folder to a `gh-pages` branch.
2. In the repo settings, enable **GitHub Pages** from the `gh-pages` branch.
3. Your site will be available at `https://<username>.github.io/<repo>/`.

> **Tip:** Netlify/Vercel automatically handle HTTPS, caching, and CDN.

---

## Quick Checklist
- [ ] Open the project folder in VS Code.
- [ ] Run `npm install --legacy-peer-deps`.
- [ ] Verify `npm run dev` works locally.
- [ ] Commit the code to a GitHub repo.
- [ ] Choose a deployment platform (Netlify, Vercel, GitHub Pages) and follow the steps above.
- [ ] Share the generated public link.

---

## Additional Resources
- Vite docs: https://vitejs.dev/guide/
- Netlify docs: https://docs.netlify.com/
- Vercel docs: https://vercel.com/docs
- GitHub Pages: https://pages.github.com/

If you run into any issues (e.g., missing Node version, build errors), feel free to ask – I can help troubleshoot.
