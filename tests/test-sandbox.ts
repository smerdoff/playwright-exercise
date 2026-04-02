import { test, expect, type Page } from '@playwright/test';

const elements = [
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo Playwright',
    text: 'Playwright',
    attribute: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub repository',
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord server',
  },
  {
    locator: (page: Page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Switch between dark and light',
  },
];

test.describe('test name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('12', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Check ${name} to vision`, async () => {
        await expect(locator(page)).toBeVisible();
      });
    });
    test.step('1step', async () => {
      await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
        'href',
        '/',
      );
      await expect(
        page.getByRole('button', { name: 'Switch between dark and light' }),
      ).toBeVisible();
    });
  });

  test('ss', async ({ page }) => {
    elements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Check ${name}`, async () => {
          await expect(locator(page)).toContainText(text);
        });
      }
    });
  });

  test('href check', async ({ page }) => {
    elements.forEach(({ locator, attribute }) => {
      if (attribute) {
        test.step('Check href', async () => {
          await expect(locator(page)).toHaveAttribute(attribute.type, attribute.value);
        });
      }
    });
  });
});
