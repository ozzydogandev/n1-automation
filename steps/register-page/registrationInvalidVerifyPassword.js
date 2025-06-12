import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

// ---------- ACTIONS ----------

When("the user fills register password field with {string}", async function (password) {
  await registrationPage.passwordInput.fill(password);
});

When("clears the verify password field", async function () {
  await registrationPage.verifyPasswordInput.fill("");
});

When(
  "the user enters {string} in the verify password field",
  async function (value) {
    await registrationPage.verifyPasswordInput.fill(value);
  }
);

// ---------- NEGATIVE ASSERTIONS ----------

Then("a password mismatch error should be shown", async function () {
  await expect(registrationPage.verifyPasswordError).toBeVisible();
  await expect(registrationPage.verifyPasswordError).toHaveText(
    "Passwords do not match"
  );
});

Then("the verify password error text should be red", async function () {
  const color = await registrationPage.verifyPasswordError.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

Then("the verify password input should have error styling", async function () {
  const classAttr = await registrationPage.verifyPasswordInput
    .locator("..") // target the parent
    .getAttribute("class");
  expect(classAttr).toContain("has-error");
});

Then("the verify password label should be red", async function () {
  const color = await registrationPage.verifyPasswordLabel.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

// ---------- POSITIVE ASSERTIONS ----------

Then("the verify password field should not show an error", async function () {
  await expect(registrationPage.verifyPasswordError).toBeHidden();
});
