import { Page } from '@playwright/test';
export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async closePrivacyPopup() {
    await this.page.getByRole('button', { name: 'Consent' }).click();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}
