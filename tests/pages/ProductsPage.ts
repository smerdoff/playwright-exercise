import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from './Header';
import { URLs } from '../config/urls';

export class ProductsPage extends BasePage {
  readonly searchInput;
  readonly searchButton;
  readonly productNames;
  readonly addToCartButton;
  readonly continueShoppingButton;
  readonly header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchButton = page.locator('#submit_search');
    this.productNames = page.locator('.productinfo p');
    this.addToCartButton = page.locator('.add-to-cart');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
  }

  async navigate() {
    await super.navigate(URLs.products);
  }

  async isSearchInputVisible() {
    await expect(this.searchInput).toBeVisible();
  }

  async isSearchButtonVisible() {
    await expect(this.searchButton).toBeVisible();
  }

  async fillSearchInput(searchQuery: string) {
    await this.searchInput.fill(searchQuery);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async getProductNames(): Promise<string[]> {
    return this.productNames.allTextContents();
  }

  async validateProductsCount() {
    const products = await this.productNames.allTextContents();
    expect(products.length).toBeGreaterThan(0);
  }

  async addProductToCart(productName: string) {
    await this.page
      .locator('.productinfo')
      .filter({ hasText: productName })
      .locator(this.addToCartButton)
      .click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async validateProductsContainQuery(searchQuery: string) {
    const products = await this.productNames.allTextContents();
    products.forEach((product) => {
      expect(product.toLowerCase()).toContain(searchQuery.toLowerCase());
    });
  }
}
