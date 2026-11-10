# Antigravity Implementation Brief — Mohammed Sinan Portfolio

You are working inside the user's existing `portfolio` folder. The Stitch export is in:
`stitch_mohammed_sinan_editorial_portfolio/`

## Goal
Turn the approved Google Stitch portfolio into a production-ready, responsive website. Treat the exported designs as the source of truth. Do not redesign the desktop experience.

## Source files
- Desktop design: `stitch_mohammed_sinan_editorial_portfolio/mohammed_sinan_developer_portfolio_polished/code.html`
- Mobile-specific design: `stitch_mohammed_sinan_editorial_portfolio/mohammed_sinan_mobile_portfolio/code.html`
- Design tokens/reference: `stitch_mohammed_sinan_editorial_portfolio/international_typographic_portfolio/DESIGN.md`

Read all three before coding.

## Required workflow
1. Inspect the complete source HTML, CSS, inline JavaScript, image URLs, links, and page sections.
2. Identify the existing framework/tooling in this folder. If it is only the Stitch export, scaffold a clean React + Vite + TypeScript app (or use an existing app if one is already present). Do not create a second nested app unnecessarily.
3. Implement the portfolio as a single website with responsive breakpoints:
   - Desktop/tablet: faithfully reproduce the approved desktop Stitch design.
   - Mobile: use the mobile-specific Stitch design as the mobile layout reference, but integrate it into the same site using responsive components and CSS breakpoints. It must not appear as a separate "Project Case Study" page, route, or screen.
4. Preserve the approved visual identity: warm off-white background, typography, spacing, section order, project cards, portrait treatment, technology logo tiles, social icon row, anime quote section, and footer.
5. Do not replace the design with a generic resume template.

## Identity and hero
- Display the name exactly as `MOHAMMED SINAN` as the primary visual heading.
- Keep the subtitle `Software Developer · Full-Stack Developer` (or the closest existing approved wording).
- Keep the supplied portrait from the Stitch design. On desktop use the approved circular crop; on mobile make it a smaller circular portrait with `object-fit: cover`, centered carefully. Never stretch it or show it as a rectangular card.
- Maintain a clear hierarchy: name first, role second, supporting tagline third. Do not let "Building software with purpose." visually overpower the name.

## Mobile requirements — test carefully
- Mobile must be genuinely responsive at widths 320, 375, 390, 430 and 768 px.
- No horizontal scrolling, clipped content, oversized typography, or images wider than the viewport.
- Scale headings, body text, portrait, project previews, cards, and spacing down appropriately.
- Keep touch targets comfortably tappable (about 44px where practical).
- Header/navigation must be compact and functional. Do not show a fake back arrow, "Project Case Study" label, or unrelated page title.
- Project cards should stack vertically with readable descriptions and images. Avoid tiny desktop two-column layouts squeezed onto a phone.
- Technology tiles should form a neat responsive grid with consistent square boxes and recognizable logos.
- Verify the mobile design from the actual browser preview, not only by reading CSS.

## Technology logos
- Use recognizable official brand marks, not plain text substitutes or random emoji.
- Use Simple Icons (`simple-icons` package or official Simple Icons SVGs) where available; use `react-icons` or Lucide for general interface icons.
- Each technology tile should show its logo inside a consistent square tile, with the technology name and a short category/descriptor below or beside it as appropriate.
- Docker must use the official Docker whale logo (not a generic blue shape, text label, or unrelated icon). Confirm visually in the browser.
- Do not invent technologies that are not already listed in the source portfolio.

## Social links and project links
Use icon-only social links with accessible labels and tooltips/`aria-label`:
- GitHub: `https://github.com/Mdsinan09`
- LinkedIn: `https://www.linkedin.com/in/mdsinan09/`
- Instagram: `https://www.instagram.com/mdsinan09/`
- X: `https://x.com/mdsinan09`
- Email: `mailto:mohammedsinan9705@gmail.com`
Use the correct recognizable brand logos. Do not render social networks as plain text links in the hero/footer.

Important: inspect each project card's repository URL. The Stitch export may repeat the same GitHub profile URL as a placeholder. Do not pretend that the profile URL is a project repository. Keep a project repository button only when a real project URL is known; otherwise use a clearly labeled placeholder state or omit that action until the user supplies the URL. Do not fabricate live demo URLs.

## Resume download
- Create a `public/` directory if needed.
- The final resume must be placed at `public/resume.pdf`.
- Wire every "Download Resume" / "Resume" button to `/resume.pdf` with a real download action.
- Do not link the resume button to `#`, a mailto URL, or a fake file.
- If `public/resume.pdf` does not exist yet, leave a clearly documented TODO and tell the user exactly where to put the PDF. Do not generate a fake resume.

## Images and project previews
- Preserve the actual project preview images in the Stitch export. Check all image URLs and make sure they load.
- If external image URLs are unreliable, download/copy the image assets into the app's `public/images/` directory and update references to local paths.
- Do not substitute unrelated stock imagery.
- Verify the Docker logo separately from the Docker project/technology tile. They are not interchangeable.
- Preserve the user's portrait and its crop.

## Closing quote
Use the anime quote already approved by the user:
“If you don't take risks, you can't create a future.”
— Monkey D. Luffy, One Piece
Keep it understated and cinematic near the footer. Do not replace it with generic AI-generated motivational copy. Avoid adding copyrighted anime artwork; text attribution is sufficient.

## Footer
- Use the current year dynamically (JavaScript `new Date().getFullYear()`), never hardcode 2025 or 2026.
- Keep the minimal footer and icon-only social links.

## Engineering quality
- Use reusable components and clean file organization.
- Ensure navigation anchors work.
- Ensure social links open correctly; external links should use `target="_blank"` and `rel="noopener noreferrer"` where appropriate.
- Add accessible alt text, keyboard focus states, semantic headings, and reduced-motion support.
- Respect `prefers-reduced-motion`.
- Add tasteful card hover/tilt motion only if it remains smooth and does not interfere with touch/mobile interactions.
- Do not add unnecessary animations, fake metrics, fake experience, fake testimonials, or fabricated claims.
- Do not change the user's factual education, experience, skills, project names, or contact details without asking.

## Final verification before declaring complete
1. Run the app and inspect it in a browser.
2. Check desktop at 1440px and 1280px.
3. Check mobile at 320px, 375px, 390px and 430px.
4. Test all navigation, social links, email link, project links, and resume download.
5. Confirm no horizontal overflow.
6. Confirm Docker whale logo is correct.
7. Confirm both desktop and mobile layouts belong to one responsive website.
8. Report exactly what works and what is still waiting for user input (especially the resume PDF and any missing project repository URLs).

Do not stop after writing code. Run the site, inspect it, fix visual issues, and then summarize how to start/build/deploy it.
