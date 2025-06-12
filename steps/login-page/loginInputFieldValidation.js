import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage } from "../../globalPagesSetup.js"; // Adjust path if needed

let typedEmail = "";
let typedPassword = "";

When("the user enters a valid email", async function () {
  typedEmail = "tesst.user@gmail.com";
  await loginPage.emailInput.fill(typedEmail);
});

Then("the email field should contain the entered email", async function () {
  await expect(loginPage.emailInput).toHaveValue(typedEmail);
});

When(
  "the user types a valid password into the password field",
  async function () {
    typedPassword = "SecurePass123!";
    await loginPage.passwordInput.fill(typedPassword);
  }
);

Then(
  "the password field should contain the entered password",
  async function () {
    await expect(loginPage.passwordInput).toHaveValue(typedPassword);
  }
);

Then('the password field input type should be "password"', async function () {
  await expect(loginPage.passwordInput).toHaveAttribute("type", "password");
});

When(
  "the user enters a valid email with special characters into the email field",
  async function () {
    typedEmail = "first.last+alias@sub-domain.example.co.uk";
    await loginPage.emailInput.fill(typedEmail);
  }
);

Then("the email field should contain the correct value", async function () {
  await expect(loginPage.emailInput).toHaveValue(typedEmail);
});

When(
  "the user enters a complex password with special characters into the password field",
  async function () {
    typedPassword = "!C0mpl3x$Pass#2025";
    await loginPage.passwordInput.fill(typedPassword);
  }
);

Then("the password field should contain the correct value", async function () {
  await expect(loginPage.passwordInput).toHaveValue(typedPassword);
});
