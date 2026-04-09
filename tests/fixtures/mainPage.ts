import { MainPage } from '../pages/MainPage';
import { test as base } from '@playwright/test';

type MyFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.closePrivacyPopup();
    await use(mainPage);
  },
});
export { expect } from '@playwright/test';
