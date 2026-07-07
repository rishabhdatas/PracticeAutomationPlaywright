const { test, expect } = require("../../fixtures/test-fixtures");
const {LoginPage} = require('../../pages/loginPage');
const testData = require('../../utils/loginData.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Login Flow", async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await page.waitForTimeout(2000);
  await expect(loginPage.logoutButton).toBeVisible();
});

test("Empty Login Fields", async ({ page }) => {

  const loginPage = new LoginPage(page);

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toBe("Please fill out Username and Password.");
    console.log(dialog.message()); // Alert ka text dekhne ke liye
    await dialog.accept(); // 'OK' button par click karne ke liye
  });

  await loginPage.login("","");
});

test("Wrong UserName", async ({ page }) => {

  const loginPage = new LoginPage(page);

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toBe("User does not exist.");
    console.log(dialog.message()); // Alert ka text dekhne ke liye
    await dialog.accept(); // 'OK' button par click karne ke liye
  });

  const login = page.locator("#login2");
  const loginName = page.locator("#loginusername");
  const loginPassword = page.locator("#loginpassword");
  const loginButton = page.getByRole("button", { name: "Log in" });
  await login.click();
  await loginName.fill("Rishabh1QA");
  await loginPassword.fill("12345678");
  await loginButton.click();
});

test("Wrong Password", async ({ page }) => {

  const loginPage = new LoginPage(page);

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toBe("Wrong password.");
    console.log(dialog.message()); // Alert ka text dekhne ke liye
    await dialog.accept(); // 'OK' button par click karne ke liye
  });

  const login = page.locator("#login2");
  const loginName = page.locator("#loginusername");
  const loginPassword = page.locator("#loginpassword");
  const loginButton = page.getByRole("button", { name: "Log in" });
  await login.click();
  await loginName.fill("Rishabh1");
  await loginPassword.fill("1234567");
  await loginButton.click();
});