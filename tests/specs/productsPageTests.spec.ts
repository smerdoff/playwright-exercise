import { test } from '../fixtures/fixtures';

test.describe('TEST 1. Product Search ', () => {
  test('Matching products are displayed after searching', async ({ productsPage }) => {
    test.fail(true, 'BUG-1: Search results contain products not matching the search query');
    await productsPage.validateSearchForm();
    await productsPage.searchProduct('Dress');
    await productsPage.validateSearchResults('Dress');
  });
});
