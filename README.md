# Mohammed Sinan — Portfolio

Production-ready, responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS, faithfully implementing the approved Google Stitch Swiss Modernist / Editorial Typographic designs.

---

## 🚀 Quick Start

### 1. Development Server
Run the local dev server with hot module replacement:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
Compile TypeScript and generate an optimized production bundle in `dist/`:
```bash
npm run build
```

### 3. Preview Production Build
Serve the production output locally:
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) in your browser.

---

## 📁 Project Structure

```
├── public/
│   ├── resume.pdf                # Real downloadable resume (linked to all Resume buttons)
│   ├── images/                   # Local optimized portraits and project screenshots
│   │   ├── portrait.png          # Desktop circular portrait
│   │   ├── portrait_mobile.png   # Mobile circular portrait
│   │   ├── project1_cloud.webp   # Cloud deployment platform preview
│   │   ├── project1_mobile.jpg   # Mobile project 1 screenshot
│   │   ├── project2_api.webp     # API testing platform preview
│   │   ├── project2_mobile.jpg   # Mobile project 2 screenshot
│   │   ├── project3_tutor.webp   # AI Assistive tutor preview
│   │   └── project3_mobile.jpg   # Mobile project 3 screenshot
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with status badge and mobile menu
│   │   ├── Hero.tsx              # Editorial desktop & centered mobile hero
│   │   ├── MetricStrip.tsx       # Fast mobile telemetry dossier
│   │   ├── Projects.tsx          # Selected Work section
│   │   ├── ProjectCard.tsx       # 3D flip card (desktop) & tab drawer (mobile)
│   │   ├── TechStack.tsx         # 18-technology matrix with verified brand SVGs
│   │   ├── About.tsx             # Academic & software engineering focus dossier
│   │   ├── Contact.tsx           # Interactive copy email pill & direct mailto
│   │   ├── AnimeQuote.tsx        # Understated Monkey D. Luffy quote block
│   │   ├── Footer.tsx            # Dynamic year and icon-only social links
│   │   └── Icons.tsx             # Official brand SVGs (including Docker whale)
│   ├── data/
│   │   └── portfolioData.ts      # Central configuration for projects, skills & socials
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Tailwind directives, 3D flip rules & reduced-motion
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO meta tags and Google Fonts imports
├── tailwind.config.js            # Swiss Modernist tokens (canvas, ink, typography)
└── vite.config.ts                # Vite bundler configuration
```

---

## ⚙️ Customization & Updating

- **Resume:** Replace `public/resume.pdf` with any new PDF version. All buttons automatically download this file.
- **Project Repositories & Details:** Edit `src/data/portfolioData.ts` to update project URLs, descriptions, or tech stack tags.
- **Social Media Links:** Update links in `src/data/portfolioData.ts` (`github`, `linkedin`, `instagram`, `x`, `email`).

