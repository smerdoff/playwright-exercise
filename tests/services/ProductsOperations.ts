import { test, Page } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

export class ProductsOperations {
  private productsPage: ProductsPage;

  constructor(page: Page) {
    this.productsPage = new ProductsPage(page);
  }

  async navigateAndClosePrivacy() {
    await test.step('Open the Products page and validate page loaded', async () => {
      await this.productsPage.navigate();
      await this.productsPage.closePrivacyPopup();
      await this.productsPage.waitForPageLoad();
    });
  }

  async validateSearchForm() {
    await test.step('Validate search form is visible', async () => {
      await this.productsPage.isSearchInputVisible();
      await this.productsPage.isSearchButtonVisible();
    });
  }

  async searchProduct(searchQuery: string) {
    await test.step(`Search for "${searchQuery}"`, async () => {
      await this.productsPage.fillSearchInput(searchQuery);
      await this.productsPage.clickSearchButton();
    });
  }

  async validateSearchResults(searchQuery: string) {
    await test.step('Validate count of products in search result', async () => {
      await this.productsPage.validateProductsCount();
    });
    await test.step(`Validate search results contain "${searchQuery}"`, async () => {
      await this.productsPage.validateProductsContainQuery(searchQuery);
    });
  }

  async addProductToCard(productName: string) {
    await test.step(`Add the "${productName}" to Cart`, async () => {
      await this.productsPage.addProductToCart(productName);
      await this.productsPage.clickContinueShopping();
    });
  }

  async goToCart() {
    await test.step(`Open the Cart page by click on the tab`, async () => {
      await this.productsPage.header.goToCart();
    });
  }
}
