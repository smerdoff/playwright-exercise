import { test, expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { URLs } from '../config/urls';

export class ProductsPage extends BasePage {
  readonly searchInput;
  readonly searchButton;
  readonly productNames;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchButton = page.locator('#submit_search');
    this.productNames = page.locator('.productinfo p');
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

  async fillSearchInput(query: string) {
    await this.searchInput.fill(query);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async getProductNames(): Promise<string[]> {
    return this.productNames.allTextContents();
  }
}
