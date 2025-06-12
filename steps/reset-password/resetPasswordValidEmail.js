import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { resetPasswordPage } from "../../globalPagesSetup.js";

When(
  "the user enters a valid registered email in the reset password email field",
  async function () {
    await resetPasswordPage.emailInput.type(`${process.env.EMAIL}`, { delay: 100 });
  }
);

Then(
  "a password recovery modal with {string} should be shown",
  async function (expectedText) {
    const modalText = this.page.locator(`text=${expectedText}`);
    await expect(modalText).toBeVisible({ timeout: 5000 });
  }
);
