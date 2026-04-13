import { CartPage } from '../pages/CartPage';
import { test, expect, Page } from '@playwright/test';

export class CartOperations {
  private cartPage: CartPage;

  constructor(page: Page) {
    this.cartPage = new CartPage(page);
  }

  async validateCartItemsCount(expectedCount: number) {
    await test.step('Validate count of products in the Cart', async () => {
      const actualCount = await this.cartPage.getCartItemsCount();
      expect(actualCount).toBe(expectedCount);
    });
  }
}
