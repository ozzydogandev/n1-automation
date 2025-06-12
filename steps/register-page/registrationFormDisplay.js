import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

Given("the user is on the registration page", async function () {
  await registrationPage.register();
});

Then("the organization input field is visible", async function () {
  await expect(registrationPage.organizationInput).toBeVisible();
});

Then("the first name input field is visible", async function () {
  await expect(registrationPage.firstNameInput).toBeVisible();
});

Then("the last name input field is visible", async function () {
  await expect(registrationPage.lastNameInput).toBeVisible();
});

Then("the registration email input field is visible", async function () {
  await expect(registrationPage.emailInput).toBeVisible();
});

Then("the registration password input field is visible", async function () {
  await expect(registrationPage.passwordInput).toBeVisible();
});

Then("the verify password input field is visible", async function () {
  await expect(registrationPage.verifyPasswordInput).toBeVisible();
});

Then("the cell phone input field is visible", async function () {
  await expect(registrationPage.phoneInput).toBeVisible();
});

Then("the language dropdown is visible", async function () {
  await expect(registrationPage.languageSelectedText).toBeVisible();
});

Then('the register button is visible', async function () {
  await expect(registrationPage.registerButton).toBeVisible();
});

Then("the missing activation email link is visible", async function () {
  await expect(registrationPage.missingActivationLink).toBeVisible();
});

Then("the logo is visible", async function () {
  await expect(registrationPage.logo).toBeVisible();
});
