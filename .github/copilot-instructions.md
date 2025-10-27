# Copilot Instructions for farm-heart-land-45518

## Project Overview
This is a Vite + React + TypeScript web application using Tailwind CSS and shadcn-ui for UI components. The codebase is organized for modularity and scalability, with clear separation between UI, pages, hooks, and utility functions.

## Key Architecture & Patterns
- **Entry Point:** `src/main.tsx` bootstraps the React app.
- **Routing:** Page components are in `src/pages/` (e.g., `Home.tsx`, `About.tsx`). Navigation logic is typically handled in `src/components/Navbar.tsx`.
- **UI Components:** Shared and atomic UI elements are in `src/components/ui/`. Use these for consistent design and behavior.
- **Feature Components:** Larger sections (e.g., `Hero`, `Footer`, `Gallery`) are in `src/components/`.
- **Hooks:** Custom React hooks are in `src/hooks/`.
- **Utilities:** Shared logic lives in `src/lib/utils.ts`.
- **Styling:** Tailwind CSS is configured via `tailwind.config.ts`. Global styles are in `src/index.css` and `src/App.css`.

## Developer Workflows
- **Install dependencies:** `npm i`
- **Start dev server:** `npm run dev` (hot reload, instant preview)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Linting:** Project uses ESLint (`eslint.config.js`). Run `npx eslint .` to check code quality.
- **No test suite detected:** Add tests in `src/` if needed; follow React Testing Library conventions if introduced.

## Project-Specific Conventions
- **Component Structure:** Prefer function components. Use props for data flow; avoid global state unless necessary.
- **UI Consistency:** Use shadcn-ui components from `src/components/ui/` for buttons, dialogs, forms, etc.
- **Page Routing:** Each file in `src/pages/` represents a route. Navigation is handled via React Router or custom logic in `Navbar.tsx`.
- **Assets:** Store images and static files in `src/assets/`.
- **No backend integration detected:** All data is local or static unless new APIs are added.

## External Integrations
- **Lovable Platform:** Project can be edited and deployed via [Lovable](https://lovable.dev/projects/683099f4-03f2-4b6a-8316-233297187c2b).
- **Custom Domain:** Supported via Lovable settings.

## Example Patterns
- **UI Usage:**
  ```tsx
  import { Button } from "./ui/button";
  <Button>Click me</Button>
  ```
- **Page Component:**
  ```tsx
  // src/pages/Home.tsx
  export default function Home() {
    return <div>Welcome!</div>;
  }
  ```
- **Custom Hook:**
  ```tsx
  // src/hooks/use-mobile.tsx
  export function useMobile() { /* ... */ }
  ```

## References
- Main config: `vite.config.ts`, `tailwind.config.ts`, `eslint.config.js`
- Entry: `src/main.tsx`, `index.html`
- UI: `src/components/ui/`
- Pages: `src/pages/`
- Hooks: `src/hooks/`
- Assets: `src/assets/`

---
If any conventions or workflows are unclear, please request clarification or examples from maintainers.
