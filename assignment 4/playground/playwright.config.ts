import { defineConfig } from '@playwright/test'

export default defineConfig({
  timeout: 30000,
  testDir: './tests',
  use: {
    headless: true,
    viewport: { width: 1200, height: 800 },
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    timeout: 120000,
  },
})
