import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage, mfaPage } from "../../globalPagesSetup.js";
import { generateTimestampEmail } from "../../utilities/newEmailGenerator.js";

// Generates a unique Gmail address with an 8-character username 
// (6 random letters and 2 digits). This avoids human verification errors 
// observed during testing — verification fails when the email contains 
// a leading space or is reused more than 3 times. Issue identified manually.

When(
  "the user enters a valid email and an invalid password",
  async function () {
    await loginPage.emailInput.type(process.env.EMAIL, {delay: 100 });
    await loginPage.passwordInput.type("WrongPassword123!", { delay: 100 });
  }
);

Then("an error message is displayed", async function () {
  await expect(loginPage.invalidUserNameAndPasswordError).toBeVisible();
});

When(
  "the user enters an unregistered email and any password",
  async function () {
    await loginPage.emailInput.type("test@test.com", { delay: 100 });
    await loginPage.passwordInput.type("DoesntMatter123!", { delay: 100 });
  }
);

When("the user enters email with leading spaces in the email field", async function () {
    const email = generateTimestampEmail();
    await loginPage.emailInput.click();
    await loginPage.emailInput.press('Space');
    await loginPage.emailInput.type(`${email}`, { delay: 100 });
});

When(
  "the user enters email with tailing spaces in the email field", async function () {
    const email = generateTimestampEmail();
    await loginPage.emailInput.click();
    await loginPage.emailInput.type(`${email}`, { delay: 100 });
    await loginPage.emailInput.press("Space");
  }
);

Then("a toast error message is displayed", async function () {
  const toast = this.page.getByText(/Error during login/i).first(); // <== updated
  await expect(toast).toHaveText(/Error during login/i);
});

Then("only the email input and label are red", async function () {
  await expect(loginPage.emailFormGroup).toHaveClass(/has-error/);
  await expect(loginPage.passwordFormGroup).not.toHaveClass(/has-error/);
});

When("the user clicks the {string} button", async function (text) {
  await loginPage.signInButton.click();
  await expect(loginPage.signInButton).toHaveText(text);
});

Then("both input fields and labels are highlighted in red", async function () {
  await expect(loginPage.emailFormGroup).toHaveClass(/has-error/);
  await expect(loginPage.passwordFormGroup).toHaveClass(/has-error/);
});

When("the user enters a valid email in the email field", async function () {
  await loginPage.emailInput.fill(process.env.EMAIL);
});

Then("only the password input and label are red", async function () {
  await expect(loginPage.passwordFormGroup).toHaveClass(/has-error/);
  await expect(loginPage.emailFormGroup).not.toHaveClass(/has-error/);
});

When(
  "the user enters a valid password in the password field",
  async function () {
    await loginPage.passwordInput.fill(process.env.PASSWORD);
  }
);

When(
  "the user enters a valid email in uppercase in the email field",
  async function () {
    const upperEmail = process.env.EMAIL.toUpperCase();
    await loginPage.emailInput.type(upperEmail, { delay: 100  });
  }
);

When("the user enters an invalid password", async function () {
  await loginPage.passwordInput.type("WrongPassword123!", { delay: 100 });
});

When("the user enters {string} in the email field", async function (string) {
  await loginPage.emailInput.fill(string);
});

When("the user enters {string} in the password field", async function (string) {
  await loginPage.passwordInput.fill(string);
});