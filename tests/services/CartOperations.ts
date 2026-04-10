import { CartPage } from '../pages/CartPage';
import { expect, Page } from '@playwright/test';

export class CartOperations {
  private cartPage: CartPage;

  constructor(page: Page) {
    this.cartPage = new CartPage(page);
  }

  async validateCartItemsCount(expectedCount: number) {
    const actualCount = await this.cartPage.getCartItemsCount();
    expect(actualCount).toBe(expectedCount);
  }
}
