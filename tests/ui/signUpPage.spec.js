const { test, expect } = require("../../fixtures/test-fixtures");
const {SignUp} = require('../../pages/signUpPage');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test("Sign Up Flow", async ({ page }) => {

  const signUp = new SignUp(page);

  //await signUp.createUserButton();
  await signUp.signUpPage("Rishabh1","12345678");
  await signUp.signUpPage;
});