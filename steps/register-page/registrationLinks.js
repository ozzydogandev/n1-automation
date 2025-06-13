import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

When("the user clicks the logo", async function () {
  await registrationPage.logo.click();
});

Then("the user should be taken to the login page", async function () {
  await expect(registrationPage.loginLink).toBeVisible();
  await expect(registrationPage.page).toHaveURL(/.*#\/login$/);
});

When("the user clicks the {string} link", async function (linkText) {
  await registrationPage.page.click(`text="${linkText}"`);
});

Then(
  "the user should be taken to the activation request page",
  async function () {
    await expect(registrationPage.page).toHaveURL(/.*#\/requestActivation$/);
  }
);
  
