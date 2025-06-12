import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { missingActivationEmailPage } from "../../globalPagesSetup.js";

Given("the user is on the resend activation page", async function () {
  missingActivationEmailPage.missingActivationEmail();
});

Then("the activation email input field is visible", async function () {
  await expect(missingActivationEmailPage.emailInput).toBeVisible();
});

Then("the resend activation logo is visible", async function () {
  await expect(missingActivationEmailPage.logo).toBeVisible();
});

Then("the {string} title is visible", async function (title) {
  await expect(missingActivationEmailPage.modalTitle).toHaveText(title);
});

Then("the email label is visible", async function () {
  await expect(missingActivationEmailPage.emailLabel).toBeVisible();
});

Then("the submit button is visible", async function () {
  await expect(missingActivationEmailPage.submitButton).toBeVisible();
});
  