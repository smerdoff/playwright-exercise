import test from '@playwright/test';
import { MainPage } from '../models/MainPage';
let mainPage: MainPage;

test.describe('Tests of Main Page', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await page.goto('https://automationexercise.com/');
    await page.getByRole('button', { name: 'Consent' }).click();
  });

  test('Check tabs visability', async ({ page }) => {
    await mainPage.checkElementsVisability();
  });
  test('Check text of tabs on Tab bar', async ({ page }) => {
    await mainPage.checkElementsText();
  });
  test('Check href of tabs on Tab bar', async ({ page }) => {
    await mainPage.checkElementsHrefAttribute();
  });
});
