import { test } from '../fixtures/fixtures';

test.describe('TEST 2. Add to Cart ', () => {
  test('The cart contains the corresponding count of added items', async ({
    productsPage,
    cartPage,
  }) => {
    await productsPage.addProductToCard('Blue Top');
    await productsPage.addProductToCard('Sleeveless Dress');
    await productsPage.goToCart();
    await cartPage.validateCartItemsCount(2);
  });
});
