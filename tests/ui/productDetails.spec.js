const { test, expect } = require("../../fixtures/test-fixtures");
const {ProductDetails} = require('../../pages/productDetailsPage');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Verify product details page", async ({ page }) => {
  
  const productDetails = new ProductDetails(page);
  
  await productDetails.openProduct();

  await expect(productDetails.productName).toBeVisible();
  await expect(productDetails.productImage).toBeVisible();
  await expect(productDetails.productPriceText).toBeVisible();
  await expect(productDetails.productDescription).toBeVisible();
  await expect(productDetails.addToCartButton).toBeVisible();
});