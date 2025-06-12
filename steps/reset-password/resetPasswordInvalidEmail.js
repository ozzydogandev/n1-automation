import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { resetPasswordPage } from "../../globalPagesSetup.js";

Given(
  "the user selects {string} from the identity method dropdown",
  async function (method) {
    const optionXpath =
      method === "Email"
        ? "//div[@id='react-select-2-option-0' and text()='Email']"
        : "//div[@id='react-select-2-option-1' and text()='Text']";
    await resetPasswordPage.identityMethodDropdown.click();
    const option = this.page.locator(`xpath=${optionXpath}`);
    await option.waitFor({ state: "visible", timeout: 5000 });
    await option.click({ force: true });
  }
);

When("the user leaves the reset password email field blank", async function () {
  await resetPasswordPage.emailInput.fill("");
});

When(
  "the user enters {string} in the reset password email field",
  async function (email) {
    await resetPasswordPage.emailInput.fill(email);
  }
);

When(
  "the user enters a non-existent but valid email in the reset password email field",
  async function () {
    const uniqueEmail = `testuser${Date.now()}@example.com`;
    await resetPasswordPage.emailInput.fill(uniqueEmail);
  }
);

When("clicks the forgot your password send button", async function () {
  await resetPasswordPage.sendButton.click();
});

Then("the user should not be able to proceed", async function () {
  await expect(resetPasswordPage.emailInput).toBeVisible();
  const successModal = this.page.locator("text=Password recovery email sent");
  await expect(successModal).not.toBeVisible({ timeout: 3000 });
});

Then(
  "an error toast with {string} should be shown",
  async function (expectedText) {
    const toast = this.page.locator(`text=${expectedText}`);
    await expect(toast).toBeVisible();
  }
);
