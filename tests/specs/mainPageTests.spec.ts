import { test } from '../fixtures/mainPage';

test.describe('Tests of Main Page', () => {
  test('Check tabs visability', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });

  test('Check text of tabs on Tab bar', async ({ mainPage }) => {
    await mainPage.checkElementsText();
  });

  test('Check href of tabs on Tab bar', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });
});
