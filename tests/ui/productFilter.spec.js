const { test, expect } = require("../../fixtures/test-fixtures");
const {ProductFilter} = require('../../pages/productsFilter');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Verify category filter", async ({ page }) => {

  const productFilter = new ProductFilter(page);

  await productFilter.phoneCards();
  await expect(productFilter.allProducts.first()).toBeVisible();
  const phonesContent = await page.getByRole("link", { name: "Samsung galaxy s6" }).textContent();
  console.log("Name of the phone is: ", phonesContent);

  await productFilter.laptopsCards();
  await expect(productFilter.allProducts.first()).toBeVisible();
  const laptopContent = await page.getByRole("link", { name: "Sony vaio i5" }).textContent();
  console.log("Name of the laptop is: ", laptopContent);

  await productFilter.monitorsCards();
  await expect(productFilter.allProducts.first()).toBeVisible();
  const monitorContent = await page.getByRole("link", { name: "Apple monitor 24" }).textContent();
  console.log("Name of the laptop is: ", monitorContent);
});