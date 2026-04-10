import { test as base, Page } from '@playwright/test';
import { Header } from '../pages/Header';
import { ProductsOperations } from '../services/ProductsOperations';
import { CartOperations } from '../services/CartOperations';
import { SupportOperations } from '../services/SupportOperations';

type MyFixtures = {
  mainPage: Header;
  productsPage: ProductsOperations;
  cartPage: CartOperations;
  supportPage: SupportOperations;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new Header(page);
    await mainPage.navigate();
    await mainPage.closePrivacyPopup();
    await use(mainPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsOperations(page);
    await productsPage.navigateAndClosePrivacy();
    await use(productsPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartOperations(page);
    await use(cartPage);
  },

  supportPage: async ({ page }, use) => {
    const supportPage = new SupportOperations(page);
    await supportPage.navigateAndClosePrivacy();
    await use(supportPage);
  },
});

export { expect } from '@playwright/test';
