const { test, expect } = require("../../fixtures/test-fixtures");
const {ProductListing} = require('../../pages/homepageProductListing');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Verify homepage product listing", async ({ page }) => {
  
  const productListing = new ProductListing(page);

  await expect(page).toHaveTitle("STORE");
  await expect(productListing.logo).toBeVisible();
  await expect(productListing.contact).toBeVisible();
  await expect(productListing.aboutUs).toBeVisible();
  await expect(productListing.cart).toBeVisible();
  await expect(productListing.login).toBeVisible();
  await expect(productListing.signUp).toBeVisible();
  await expect(productListing.phones).toBeVisible();
  await expect(productListing.laptops).toBeVisible();
  await expect(productListing.monitors).toBeVisible();
  await productListing.verifyProductDetails();
  });