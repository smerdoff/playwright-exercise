import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLs } from '../config/urls';

export class CartPage extends BasePage {
  readonly cartItems;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('[id^="product-"]');
  }

  async navigate() {
    await super.navigate(URLs.cart);
  }

  async getCartItemsCount(): Promise<number> {
    return this.cartItems.count();
  }
}
