import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { resetPasswordPage } from "../../globalPagesSetup.js";

Then("the reset password logo is visible", async function () {
  await expect(resetPasswordPage.logo).toBeVisible();
});

Then("the identity method dropdown is visible", async function () {
  await expect(resetPasswordPage.identityMethodDropdown).toBeVisible();
});

Then("the reset password email input field is visible", async function () {
  await expect(resetPasswordPage.emailInput).toBeVisible();
});

Then("the reset password send button is visible", async function () {
  await expect(resetPasswordPage.sendButton).toBeVisible();
});

Then(
  "the last four digits of phone number input field is visible",
  async function () {
    const phoneInput = this.page.locator("input[name='phone']");
    await expect(phoneInput).toBeVisible();
  }
);

Then(
  "the last four digits of phone number input field should NOT be visible",
  async function () {
    const phoneInput = this.page.locator("input[name='phone']");
    await expect(phoneInput).toHaveCount(0);
  }
);
