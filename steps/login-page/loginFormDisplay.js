import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage } from "../../globalPagesSetup.js";

Given("the user is on the login page", async function () {
  await loginPage.start();
});

Then("the email input field is visible", async function() {
  await expect(loginPage.emailInput).toBeVisible();
});

Then("the password input field is visible", async function () {
  await expect(loginPage.passwordInput).toBeVisible();
});

Then("the keep me signed in checkbox is visible", async function () {
  await expect(loginPage.keepMeSignedInCheckbox).toBeVisible();
  await expect(loginPage.keepMeSignedInLabel).toHaveText("Keep me signed in");
});

Then("the sign in button is visible", async function () {
  await expect(loginPage.signInButton).toBeVisible();
  await expect(loginPage.signInButton).toHaveText("Sign in");
});

Then("the login {string} link is visible", async function (label) {
  const links = [
    loginPage.forgotPasswordLink,
    loginPage.registerLink,
    loginPage.contactUsLink,
  ];

  let found = false;
  for (const link of links) {
    if ((await link.isVisible()) && (await link.innerText()).includes(label)) {
      found = true;
      break;
    }
  }
  expect(found).toBe(true);
});

Then("the login {string} text is visible", async function(text) {
  await expect(loginPage.footerCopyright).toBeVisible();
  await expect(loginPage.footerCopyright).toHaveText(/NinjaOne LLC © 2014-2025/);
  //console.log(await loginPage.footerCopyright.innerText());
});
