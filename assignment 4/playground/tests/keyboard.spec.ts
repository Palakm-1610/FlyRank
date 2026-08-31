import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'

test.describe('Keyboard smoke tests', () => {
  test('Modal keyboard interactions', async ({ page }) => {
    await page.goto(URL)
    const trigger = page.getByRole('button', { name: 'Open Modal' })
    await trigger.focus()
    await page.keyboard.press('Enter')
    const dialog = page.getByRole('dialog', { name: 'Example dialog' })
    await expect(dialog).toBeVisible()

    // Tab into first focusable (Action)
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: 'Action' })).toBeFocused()

    // Tab to Close
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: 'Close' })).toBeFocused()

    // Shift+Tab back
    await page.keyboard.down('Shift')
    await page.keyboard.press('Tab')
    await page.keyboard.up('Shift')
    await expect(page.getByRole('button', { name: 'Action' })).toBeFocused()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
    await expect(trigger).toBeFocused()
  })

  test('Tabs keyboard interactions', async ({ page }) => {
    await page.goto(URL)
    const first = page.getByRole('tab', { name: 'First' })
    await first.focus()
    await page.keyboard.press('ArrowRight')
    await expect(page.getByRole('tab', { name: 'Second' })).toHaveAttribute('aria-selected', 'true')
    await page.keyboard.press('End')
    await expect(page.getByRole('tab', { name: 'Third' })).toHaveAttribute('aria-selected', 'true')
    await page.keyboard.press('Home')
    await expect(first).toHaveAttribute('aria-selected', 'true')
  })

  test('Disclosure keyboard interactions', async ({ page }) => {
    await page.goto(URL)
    const disclosure = page.getByRole('button', { name: 'More details' })
    await disclosure.focus()
    await page.keyboard.press('Enter')
    const region = page.getByRole('region')
    await expect(region).toBeVisible()
    // Tab into inner button
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: 'Inner button' })).toBeFocused()
  })
})
