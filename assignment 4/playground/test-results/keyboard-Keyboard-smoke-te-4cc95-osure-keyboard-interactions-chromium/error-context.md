# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> Keyboard smoke tests >> Disclosure keyboard interactions
- Location: tests\keyboard.spec.ts:46:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.focus: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'More details' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: "[plugin:vite:import-analysis] Failed to resolve import \"@/registry/bases/aria/lib/utils\" from \"src/components/shadcn/TabsShadcn.tsx\". Does the file exist?"
  - generic [ref=e5]: C:/Users/asd/Desktop/FlyRank/assignment 4/playground/src/components/shadcn/TabsShadcn.tsx:12:19
  - generic [ref=e6]: "23 | Tabs as TabsPrimitive 24 | } from \"react-aria-components\"; 25 | import { cn } from \"@/registry/bases/aria/lib/utils\"; | ^ 26 | function Tabs({ 27 | className,"
  - generic [ref=e7]: at TransformPluginContext._formatError (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49258:41) at TransformPluginContext.error (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49253:16) at normalizeUrl (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:64307:23) at process.processTicksAndRejections (node:internal/process/task_queues:95:5) at async file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:64439:39 at async Promise.all (index 5) at async TransformPluginContext.transform (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:64366:7) at async PluginContainer.transform (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49099:18) at async loadAndTransform (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:51978:27) at async viteTransformMiddleware (file:///C:/Users/asd/Desktop/FlyRank/assignment%204/playground/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:62106:24
  - generic [ref=e8]:
    - text: Click outside, press Esc key, or fix the code to dismiss.You can also disable this overlay by setting
    - code [ref=e9]: server.hmr.overlay
    - text: to
    - code [ref=e10]: "false"
    - text: in
    - code [ref=e11]: vite.config.ts
    - text: .
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | const URL = 'http://localhost:5173/'
  4  | 
  5  | test.describe('Keyboard smoke tests', () => {
  6  |   test('Modal keyboard interactions', async ({ page }) => {
  7  |     await page.goto(URL)
  8  |     const trigger = page.getByRole('button', { name: 'Open Modal' })
  9  |     await trigger.focus()
  10 |     await page.keyboard.press('Enter')
  11 |     const dialog = page.getByRole('dialog', { name: 'Example dialog' })
  12 |     await expect(dialog).toBeVisible()
  13 | 
  14 |     // Tab into first focusable (Action)
  15 |     await page.keyboard.press('Tab')
  16 |     await expect(page.getByRole('button', { name: 'Action' })).toBeFocused()
  17 | 
  18 |     // Tab to Close
  19 |     await page.keyboard.press('Tab')
  20 |     await expect(page.getByRole('button', { name: 'Close' })).toBeFocused()
  21 | 
  22 |     // Shift+Tab back
  23 |     await page.keyboard.down('Shift')
  24 |     await page.keyboard.press('Tab')
  25 |     await page.keyboard.up('Shift')
  26 |     await expect(page.getByRole('button', { name: 'Action' })).toBeFocused()
  27 | 
  28 |     // Close with Escape
  29 |     await page.keyboard.press('Escape')
  30 |     await expect(dialog).toBeHidden()
  31 |     await expect(trigger).toBeFocused()
  32 |   })
  33 | 
  34 |   test('Tabs keyboard interactions', async ({ page }) => {
  35 |     await page.goto(URL)
  36 |     const first = page.getByRole('tab', { name: 'First' })
  37 |     await first.focus()
  38 |     await page.keyboard.press('ArrowRight')
  39 |     await expect(page.getByRole('tab', { name: 'Second' })).toHaveAttribute('aria-selected', 'true')
  40 |     await page.keyboard.press('End')
  41 |     await expect(page.getByRole('tab', { name: 'Third' })).toHaveAttribute('aria-selected', 'true')
  42 |     await page.keyboard.press('Home')
  43 |     await expect(first).toHaveAttribute('aria-selected', 'true')
  44 |   })
  45 | 
  46 |   test('Disclosure keyboard interactions', async ({ page }) => {
  47 |     await page.goto(URL)
  48 |     const disclosure = page.getByRole('button', { name: 'More details' })
> 49 |     await disclosure.focus()
     |                      ^ Error: locator.focus: Test timeout of 30000ms exceeded.
  50 |     await page.keyboard.press('Enter')
  51 |     const region = page.getByRole('region')
  52 |     await expect(region).toBeVisible()
  53 |     // Tab into inner button
  54 |     await page.keyboard.press('Tab')
  55 |     await expect(page.getByRole('button', { name: 'Inner button' })).toBeFocused()
  56 |   })
  57 | })
  58 | 
```