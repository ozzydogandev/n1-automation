import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";
import { generateTimestampEmail } from "../../utilities/newEmailGenerator.js";

const { REG_ORG, REG_NAME, REG_LAST_NAME, REG_PASSWORD, REG_CELL_PHONE } =
  process.env;

When("the user enters a valid register organization name", async function () {
  await registrationPage.organizationInput.type(REG_ORG, { delay: 100 } );
});

When("the user enters a valid register first name", async function () {
  await registrationPage.firstNameInput.type(REG_NAME, { delay: 100 }  );
});

When("the user enters a valid register last name", async function () {
  await registrationPage.lastNameInput.type(REG_LAST_NAME, { delay: 100 }  );
});

When("the user enters a valid register email address", async function () {
  const email = generateTimestampEmail();
  this.currentTestEmail = email;
  await registrationPage.emailInput.type(email, { delay: 100 }  );
});

When("the user enters a valid register password", async function () {
  await registrationPage.passwordInput.type(REG_PASSWORD, { delay: 100 }  );    
});

When(
  "the user re-enters the same password in the verify password field",
  async function () {
    await registrationPage.verifyPasswordInput.type(REG_PASSWORD, { delay: 100 }  );
  }
);

When("the user enters a valid register phone number", async function () {
  await registrationPage.phoneInput.type(REG_CELL_PHONE, { delay: 100 }  );
});

Then("the user is taken to the check your email page", async function () {
  const confirmationText = registrationPage.page.locator("p", {hasText: "Account successfully created. Please check your email to activate your account."});
  await expect(confirmationText).toBeVisible();
  console.log(`This email (${this.currentTestEmail}) has been registered successfully.`);

});
