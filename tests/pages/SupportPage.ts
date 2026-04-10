import { BasePage } from './BasePage';
import { URLs } from '../config/urls';
import { Page, expect } from '@playwright/test';

export class SupportPage extends BasePage {
  readonly nameField;
  readonly emailField;
  readonly subjectField;
  readonly messageField;
  readonly submitButton;
  readonly successMessage;

  constructor(page: Page) {
    super(page);
    this.nameField = page.getByRole('textbox', { name: 'Name' });
    this.emailField = page.getByRole('textbox', { name: 'Email', exact: true });
    this.subjectField = page.getByRole('textbox', { name: 'Subject' });
    this.messageField = page.getByRole('textbox', { name: 'Your Message Here' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.locator('.status.alert-success');
  }

  async navigate() {
    await super.navigate(URLs.support);
  }

  async fillForm(name: string, email: string, subject: string, message: string) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.subjectField.fill(subject);
    await this.messageField.fill(message);
  }

  async submitForm() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.submitButton.click();
  }

  async validateSuccessMessageVisability() {
    await expect(this.successMessage).toBeVisible();
  }

  async validateSuccessMessageText() {
    await expect(this.successMessage).toContainText(
      'Success! Your details have been submitted successfully.',
    );
  }
}
