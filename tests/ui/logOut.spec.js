const { test, expect } = require("../../fixtures/test-fixtures");
const {LogoutPage} = require('../../pages/logoutPage');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test("Logout Flow", async ({ page }) => {

  const logOutPage = new LogoutPage(page);

  await logOutPage.login("Rishabh1", "12345678");
  await logOutPage.logout();
  
});