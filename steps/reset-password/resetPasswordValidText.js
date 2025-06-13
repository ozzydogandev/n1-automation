import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { resetPasswordPage } from "../../globalPagesSetup.js";

When("the user enters the correct last four digits of their phone number", async function () {
    await resetPasswordPage.lastFourDigitsInput.fill(process.env.VALID_LAST_FOUR);
  }
);

Then("the security code input should be visible and typeable", async function () {
    const input = await this.page.locator('input[name="verificationCode"]');
    await expect(input).toBeVisible();
    await input.type("123456");
  }
);
