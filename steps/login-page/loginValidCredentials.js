import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage, mfaPage, page } from "../../globalPagesSetup.js"; // adjust path if needed
import { getOtpCode } from "../../utilities/totpGenerator.js";
import dotenv from "dotenv";
dotenv.config();

When("the user enters a valid email and password", async function () {
  await loginPage.emailInput.type(process.env.EMAIL, { delay: 100 });
  await loginPage.passwordInput.type(process.env.PASSWORD, { delay: 100 });
});

When("clicks the {string} button", async function (text) {
  await loginPage.signInButton.click();
  await expect(loginPage.signInButton).toHaveText(text);
});

Then("the user is redirected to MFA page", async function () {
  await expect(mfaPage.title).toBeVisible();
});

When("the user enters a valid password", async function () {
  await loginPage.passwordInput.type(process.env.PASSWORD, { delay: 100 });
});

When("presses the Enter key", async function () {
  await this.page.keyboard.press("Enter");
});


When("the user selects the {string} checkbox", async function (label) {
  if (label === "Keep me signed in") {
    await loginPage.keepMeSignedInCheckbox.check({ force: true });
  } else {
    throw new Error(`Checkbox with label "${label}" not handled.`);
  }
});

Then("the session is persisted", async function () {
  await this.page.reload();
  await expect(mfaPage.title).toBeVisible({ timeout: 10000 });
});

When("the user enters a totp valid email and password", async function () {
  await loginPage.emailInput.type(process.env.MFA_EMAIL, { delay: 100 });
  await loginPage.passwordInput.type(process.env.PASSWORD, { delay: 100 });
});

// Fill TOTP code from otplib
When("the user enters the MFA code", async function () {
  const code = getOtpCode(process.env.MFA_SECRET);
  await mfaPage.codeInput.fill(code); // adjust this selector
  await mfaPage.submitButton.click(); // adjust this selector
});

// Confirm successful login (adjust URL/title)
Then("the user is logged in successfully", async function () {
  await expect(page).toHaveURL("https://app.ninjarmm.com/#/getStarted"); // or use `page.url()` or dashboard heading text
  await page.waitForTimeout(10000);
});

When(
  "the user enters a totp valid email2 and password",
  async function () {
    await loginPage.emailInput.type(process.env.EMAIL2, { delay: 100 });
    await loginPage.passwordInput.type(process.env.PASSWORD, { delay: 100 });
  }
);

When("the user enters the MFA2 code", async function () {
  const code = getOtpCode(process.env.MFA_SECRET2);
  await mfaPage.codeInput.fill(code);
  await mfaPage.submitButton.click(); 
});