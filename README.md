# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project setup (quick start)

Install dependencies (if you haven't):

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Notes about Tailwind setup

- If `npx tailwindcss init -p` failed (no local CLI), the repository already contains `tailwind.config.cjs` and `postcss.config.cjs` created for you.
- I replaced `src/index.css` with Tailwind directives and added a small base layer.

Files added/updated by the setup script:

- `tailwind.config.cjs` — Tailwind content config
- `postcss.config.cjs` — PostCSS + Autoprefixer
- `src/index.css` — replaced with Tailwind directives
- `src/store/useStore.js` — simple zustand store
- `src/App.jsx` — demo using the store and Tailwind

If you prefer to generate the Tailwind config via the CLI instead, run:

```bash
npx tailwindcss@latest init -p
```

Happy hacking!
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
