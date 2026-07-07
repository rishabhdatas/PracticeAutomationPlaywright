const { test, expect } = require("../../fixtures/test-fixtures");
const {SingleProduct} = require('../../pages/singleProductCart');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Add Product To Cart", async ({ page }) => {

  const singleProduct = new SingleProduct(page);

  await singleProduct.productAdd();

  console.log(await singleProduct.getProductName());

  console.log(await singleProduct.getPriceText());

  await expect(page.locator(`//tr[td[contains(., 'Samsung galaxy s6')]]//img`)).toBeVisible();
  await expect(page.getByRole("link", { name: "Delete" })).toBeVisible();
});