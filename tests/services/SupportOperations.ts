import { test, Page } from '@playwright/test';
import { SupportPage } from '../pages/SupportPage';

export class SupportOperations {
  private supportPage: SupportPage;

  constructor(page: Page) {
    this.supportPage = new SupportPage(page);
  }

  async navigateAndClosePrivacy() {
    await test.step('Open the Products page and validate page loaded', async () => {
      await this.supportPage.navigate();
      await this.supportPage.closePrivacyPopup();
      await this.supportPage.waitForPageLoad();
    });
  }

  async sendSupportMessage(name: string, email: string, subject: string, message: string) {
    await test.step('Fill and submit support form', async () => {
      await this.supportPage.fillForm(name, email, subject, message);
      await this.supportPage.submitForm();
    });
  }

  async validateSuccessMessage() {
    await test.step('Validate appearing and text of success message', async () => {
      await this.supportPage.validateSuccessMessageVisability();
      await this.supportPage.validateSuccessMessageText();
    });
  }
}
