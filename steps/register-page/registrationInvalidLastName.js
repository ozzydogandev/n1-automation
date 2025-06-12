import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

// ---------- SCENARIO: Last name field is empty ----------
When("the user clears the last name field", async function () {
  await registrationPage.lastNameInput.fill(""); // Clears input
});

Then("the last name field should show a required error", async function () {
  await expect(registrationPage.invalidLastNameError).toBeVisible();
});

// ---------- SCENARIO: Last name field contains only spaces ----------
When("the user enters only spaces in the last name field", async function () {
  await registrationPage.lastNameInput.fill("   "); // Only spaces
});

Then("the last name error text should be red", async function () {
  const color = await registrationPage.invalidLastNameError.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

Then("the last name input should have error styling", async function () {
  const classAttr = await registrationPage.lastNameInput.getAttribute("class");
  expect(classAttr).toContain("has-error");
});

Then("the last name label should be red", async function () {
  const color = await registrationPage.lastNameLabel.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});
