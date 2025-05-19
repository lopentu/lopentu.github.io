# lope-website

## Local Development with Docker

This project uses Docker Compose for local development.

1.  **Prerequisites**: Docker and Docker Compose installed.
2.  **Build & Run**: In the project root, run `docker compose up`. To rebuild, use `docker compose up --build`.
3.  **Access**: Open `http://localhost:5173` in your browser.
4.  **Stop**: Press `Ctrl+C` in the terminal or run `docker compose down`.

## Updating the Website (GitHub Pages)

This website is deployed to GitHub Pages.

1.  **Prerequisites**: Node.js and pnpm installed. Ensure all changes are committed and pushed.
2.  **Deploy**: Run `npm run deploy` from the project root.
    *   This builds the site and pushes the `dist` folder to the `gh-pages` branch.
3.  **Verify**: Check your GitHub Pages URL after a few minutes.
