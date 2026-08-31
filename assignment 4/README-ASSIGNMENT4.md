Assignment 4 — Playground

This folder contains the interactive ARIA Playground used for assignment 4.

- Location: `assignment 4/playground`
- Contents: handcrafted accessible Modal, Tabs, Disclosure; shadcn integrations; Playwright keyboard smoke tests.

To run the playground locally:

```bash
cd "assignment 4/playground"
npm install
npm run dev
```

To run the automated keyboard smoke tests:

```bash
cd "assignment 4/playground"
npx playwright install --with-deps
npm run test:playwright
```
