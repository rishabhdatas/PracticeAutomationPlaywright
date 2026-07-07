const { test, expect } = require("../../fixtures/test-fixtures");
const {AddRemoveMultiple} = require('../../pages/addRemoveMultipleCart');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Add and Remove Multiple Product From Cart", async ({ page }) => {

  const addRemoveMultiple = new AddRemoveMultiple(page);

  await addRemoveMultiple.singleProducts();
  await addRemoveMultiple.addTOCarts();
  await addRemoveMultiple.homeButtons();
  await addRemoveMultiple.doubleProducts();
  await addRemoveMultiple.addTOCart1s();
  await addRemoveMultiple.cartButtons();
  
  const cartProducts = addRemoveMultiple.cartProducts;

  await expect(cartProducts).toHaveCount(2);
  await page.waitForTimeout(5000);
  await addRemoveMultiple.deleteProductNokias();
  await expect(cartProducts).toHaveCount(1);
  await addRemoveMultiple.deleteProductSamsungs();
  await page.waitForTimeout(5000);
  await expect(cartProducts).toHaveCount(0);
});