import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { resetPasswordPage } from "../../globalPagesSetup.js";

When(
  "the user enters {string} in the reset password phone number field",
  async function (digits) {
    await resetPasswordPage.lastFourDigitsInput.fill(digits);
  }
);

When(
  "the user enters incorrect last {int} digits of their phone number",
  async function (digits) {
    await resetPasswordPage.lastFourDigitsInput.fill("9999"); 
  }
);
