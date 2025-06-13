import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage } from "../../globalPagesSetup.js";

Then("the user is navigated to the password recovery page", async function () {
  await expect(this.page).toHaveURL(/#\/resetPassword/);
});

When("the user clicks the Do not have an account link", async function () {
  await loginPage.registerLink.click();
});

When("the user clicks the Forgot your password link", async function () {
  await loginPage.forgotPasswordLink.click();
});

Then("the user is navigated to the registration page", async function () {
  await expect(this.page).toHaveURL(/#\/register/);
});
