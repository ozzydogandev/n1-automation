import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { missingActivationEmailPage } from "../../globalPagesSetup.js";

When(
  "the user enters a valid already activated email in the activation email input field",
  async function () {
    await missingActivationEmailPage.emailInput.type(`${process.env.EMAIL}`, { delay: 100 });
  }
);

When("clicks the resend activation submit button", async function () {
  await missingActivationEmailPage.submitButton.click();
});

Then("the message {string} should be visible", async function (message) {
  const msg = await this.page.locator("p.css-bk160n").textContent();
  expect(msg.trim()).toBe(message);
});

Then("the {string} link should be visible", async function (text) {
  const link = this.page.locator(`a:has-text("${text}")`);
  await expect(link).toBeVisible();
});
