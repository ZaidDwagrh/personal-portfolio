# Personal Portfolio — Web Design Project

An English-only, responsive personal portfolio with a separate JavaScript calculator. Uses only HTML, CSS, and vanilla JavaScript; suitable for GitHub Pages.

## Files
- `index.html` — portfolio homepage
- `calculator.html` — calculator project
- `css/style.css` — layout, themes, responsive styles, animations
- `js/main.js` — theme, navigation, typing effect
- `js/calculator.js` — calculator logic

## Project details
- Name: Zaid Mohammad
- University: Mutah University
- GitHub: https://github.com/ZaidDwagrh
- Live website: https://zaiddwagrh.github.io/personal-portfolio/
- Source repository: https://github.com/ZaidDwagrh/personal-portfolio
- The Email button opens Gmail compose with the recipient prefilled; the email address is not displayed on the page.


## Run locally
Open `index.html` in a browser. For development, you can use VS Code and the Live Server extension (optional).

## Publish on GitHub Pages
1. Use the public repository `ZaidDwagrh/personal-portfolio`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be in the root.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. Wait for deployment. Live site: https://zaiddwagrh.github.io/personal-portfolio/
5. Test the homepage, calculator, theme switch on desktop and mobile.

All asset links are relative, so the project works on a GitHub Pages project URL (not just a domain root).

## How it works
- CSS custom properties (`--bg`, `--text`, etc.) define the dark and light themes.
- `localStorage` remembers the theme across both pages.
- `IntersectionObserver` triggers reveal animations and tracks active sections.
- The calculator uses arithmetic functions and a small state machine; it does **not** use `eval()`.
- `prefers-reduced-motion` is respected.

No backend, database, build step, or external dependencies required.

### Language and theme
The site is English-only. The light/dark theme preference remains saved across visits. Theme controls use simple SVG icons.

## Navigation and theme icons
On desktop, the navigation links are centered independently of the logo and theme toggle using a three-column CSS grid. On mobile, the collapsible menu remains available. The theme button uses two minimal SVG icons and CSS to show the relevant one, without rewriting the button markup.

## Personalization

- Name: Zaid Mohammad
- GitHub: https://github.com/ZaidDwagrh
- Email: clickable Gmail compose button (address is hidden on the page)
- All six skills appear together in one grid.
- Projects include Calculator and this Personal Portfolio.

## Card links

- Skills open selected learning references in new tabs.
- Education opens Mutah University in a new tab; Field and Focus remain informational.
- Calculator opens the local calculator page.
- Personal Portfolio links to https://github.com/ZaidDwagrh/personal-portfolio in a new tab.
- GitHub opens the profile; Email opens Gmail compose with the recipient prefilled (address not displayed).
