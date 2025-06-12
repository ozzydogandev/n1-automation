import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { missingActivationEmailPage } from "../../globalPagesSetup.js";

When(
  "the user enters {string} in the activation email input field",
  async function (email) {
    await missingActivationEmailPage.emailInput.type(email, { delay: 100 } );
  }
);

Then(
  "a toast error message {string} should be shown",
  async function (expectedText) {
    const toast = this.page.locator("div.css-1cfrmkq");
    await expect(toast).toBeVisible();
    await expect(toast).toHaveText(expectedText);
  }
);

Then("the user should remain on the resend activation page", async function () {
  await expect(this.page).toHaveURL(/.*\/requestActivation/);
});
