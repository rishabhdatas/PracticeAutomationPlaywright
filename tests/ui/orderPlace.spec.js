const { test, expect } = require("../../fixtures/test-fixtures");
const { OrderPlace } = require("../../pages/orderPlace");
const { userDetails } = require("../../utils/userDetails.json");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Place Order Flow", async ({ page }) => {
  const orderPlace = new OrderPlace(page);

  await orderPlace.productClick();
  await orderPlace.addProduct();
  await orderPlace.cardButton();
  await expect(orderPlace.productName).toBeVisible();
  await expect(orderPlace.productPrice).toBeVisible();
  await orderPlace.placingOrder();
  await orderPlace.userDetails(
    userDetails.name,
    userDetails.country,
    userDetails.city,
    userDetails.creditCard,
    userDetails.month,
    userDetails.year,
  );
  await orderPlace.purchaseLink();
  await expect(orderPlace.confirmMessage).toBeVisible();
  await expect(orderPlace.confirmText).toContainText("Amount: 360 USD");
  await expect(orderPlace.confirmText).toContainText("Name: Rishabh");
  await expect(orderPlace.confirmText).toContainText("Id:");
  await orderPlace.confirmOkButtonLink();
});
