import { test, expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { URLs } from '../config/urls';

interface NavigationElements {
  locator: (page: Page) => Locator;
  name?: string;
  text?: string;
  attribute?: {
    type: string;
    value: string;
  };
}

export class MainPage extends BasePage {
  readonly elements: NavigationElements[];

  constructor(page: Page) {
    super(page);
    this.elements = [
      {
        locator: (page: Page): Locator =>
          page.getByRole('link', { name: 'Website for automation' }),
        name: 'Logo',
        attribute: {
          type: 'href',
          value: '/',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/"]'),
        name: 'Home tab',
        text: ' Home',
        attribute: {
          type: 'href',
          value: '/',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/products"]'),
        name: 'Products tab',
        text: ' Products',
        attribute: {
          type: 'href',
          value: '/products',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/view_cart"]'),
        name: 'Cart tab',
        text: ' Cart',
        attribute: {
          type: 'href',
          value: '/view_cart',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/login"]'),
        name: 'Login tab',
        text: ' Signup / Login',
        attribute: {
          type: 'href',
          value: '/login',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/test_cases"]'),
        name: 'Test Cases tab',
        text: ' Test Cases',
        attribute: {
          type: 'href',
          value: '/test_cases',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/api_list"]'),
        name: 'API tab',
        text: ' API Testing',
        attribute: {
          type: 'href',
          value: '/api_list',
        },
      },
      {
        locator: (page: Page): Locator => page.getByText('Video Tutorials'),
        name: 'Video Tutorials tab',
        text: ' Video Tutorials',
        attribute: {
          type: 'href',
          value: 'https://www.youtube.com/c/AutomationExercise',
        },
      },
      {
        locator: (page: Page): Locator => page.locator('.shop-menu a[href="/contact_us"]'),
        name: 'Contact Us tab',
        text: ' Contact us',
        attribute: {
          type: 'href',
          value: '/contact_us',
        },
      },
    ];
  }

  async navigate() {
    await super.navigate(URLs.main);
  }

  async checkElementsVisability() {
    for (const { locator, name } of this.elements) {
      await test.step(`Check ${name} element to visability`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    }
  }
  async checkElementsText() {
    for (const { locator, name, text } of this.elements) {
      if (text) {
        await test.step(`Check text of the ${name} tab`, async () => {
          await expect(locator(this.page)).toContainText(text);
        });
      }
    }
  }
  async checkElementsHrefAttribute() {
    for (const { locator, name, attribute } of this.elements) {
      if (attribute) {
        await test.step(`Check href of the ${name} tab`, async () => {
          await expect(locator(this.page)).toHaveAttribute(attribute.type, attribute.value);
        });
      }
    }
  }
}
