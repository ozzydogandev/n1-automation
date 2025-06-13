import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";


When("the user leaves the register password field empty", async function () {
  await registrationPage.passwordInput.fill("");
});

When(
  "the user enters {string} in the register password field",
  async function (password) {
    await registrationPage.passwordInput.fill(password);
  }
);

When(
  "the user enters a {int}-character password in the register password field",
  async function (length) {
    const longPassword = "A1a!".padEnd(length, "x");
    await registrationPage.passwordInput.fill(longPassword);
  }
);


Then(
  "the password field should show the general password validation error",
  async function () {
    await expect(registrationPage.passwordErrorText).toBeVisible();
    await expect(registrationPage.passwordErrorText).toHaveText(
      "Password must be between (8) and (72) characters and meet 3 of the following criteria: lower case letter, upper case letter, special character, number."
    );
  }
);

Then("the password error text should be red", async function () {
  const color = await registrationPage.passwordErrorText.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

Then("the password input should have error styling", async function () {
  const classAttr = await registrationPage.passwordInput
    .locator("..")
    .getAttribute("class");

  expect(classAttr).toContain("has-error");
});

Then("the password label should be red", async function () {
  const color = await registrationPage.passwordLabel.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});


Then("the password field should not show an error", async function () {
  await expect(registrationPage.passwordErrorText).toBeHidden();
});
