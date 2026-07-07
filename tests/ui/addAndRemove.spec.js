const { test, expect } = require("../../fixtures/test-fixtures");
const {AddAndRemove} = require('../../pages/addRemoveCart');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Add and Remove Product From Cart", async ({ page }) => {
  
  const addAndRemove = new AddAndRemove(page);

  await addAndRemove.productClick();
  await addAndRemove.addCart();
  await addAndRemove.cartButtons();

  await expect(page.getByText("Samsung galaxy s6", { exact: true })).toBeVisible();
  await expect(page.locator("td", { hasText: "360" })).toBeVisible();
  await page.waitForTimeout(5000);
  const cartProducts = addAndRemove.cartProducts;
  await expect(cartProducts).toHaveCount(1);
  await addAndRemove.deleteProducts();
  await page.waitForTimeout(5000);
  await expect(cartProducts).toHaveCount(0);
});