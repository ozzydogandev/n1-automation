import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

// Scenario: Cell phone field is empty
When("the user leaves the cell phone field empty", async function () {
  await registrationPage.phoneInput.fill("");
});

When("clicks the register button", async function () {
  await registrationPage.registerButton.click();
});

Then("an invalid phone number error should be shown", async function () {
  await expect(registrationPage.invalidPhoneNumberError).toBeVisible();
  await expect(registrationPage.invalidPhoneNumberError).toHaveText(
    "Invalid phone number"
  );
});

// Scenario: User types invalid numbers
When(
  "the user enters {string} in the phone number field",
  async function (number) {
    await registrationPage.phoneInput.fill(number);
  }
);

// Scenario: Field blocks letters
When(
  "the user attempts to type letters in the phone number field",
  async function () {
    await registrationPage.phoneInput.fill("abcdef");
  }
);

Then("the phone number field should remain empty", async function () {
  const value = await registrationPage.phoneInput.inputValue();
  expect(value).toBe("");
});

Then("the cell phone error text should be red", async function () {
  const color = await registrationPage.invalidPhoneNumberError.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

Then("the cell phone input should have error styling", async function () {
  const classAttr = await registrationPage.phoneFormGroup.getAttribute("class");
  expect(classAttr).toContain("has-error");
});

Then("the cell phone label should be red", async function () {
  const color = await registrationPage.cellphoneLabel.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

