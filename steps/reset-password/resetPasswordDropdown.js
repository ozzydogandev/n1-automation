import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { resetPasswordPage } from "../../globalPagesSetup.js";

Given("the user is on the reset password page", async function () {
  await resetPasswordPage.resetPassword();
});

When("the user opens the identity method dropdown", async function () {
  await resetPasswordPage.identityMethodDropdown.click();
});

When("the user selects {string}", async function (option) {
  const xpath =
    option === "Email"
      ? "//div[@id='react-select-2-option-0' and text()='Email']"
      : "//div[@id='react-select-2-option-1' and text()='Text']";
  const optionLocator = this.page.locator(`xpath=${xpath}`);
  await optionLocator.click({ force: true });
});

Then(
  "the identity method dropdown should display {string}",
  async function (expectedValue) {
    const selected = await resetPasswordPage.identitySelected.textContent();
    expect(selected.trim()).toBe(expectedValue);
  }
);

Then(
  "the dropdown should contain {string} option", async function (optionText) {
    const xpath =
      optionText === "Email"
        ? "//div[@id='react-select-2-option-0' and text()='Email']"
        : "//div[@id='react-select-2-option-1' and text()='Text']";
    const optionLocator = this.page.locator(`xpath=${xpath}`);
    await expect(optionLocator).toBeVisible();
  }
);
