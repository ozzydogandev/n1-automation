import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

// ---------- SCENARIO: First name field is empty ----------
When("the user clears the first name field", async function () {
  await registrationPage.firstNameInput.fill(""); // Clears input
});

Then("the first name field should show a required error", async function () {
  await expect(registrationPage.invalidFirstNameError).toBeVisible();
});

// ---------- SCENARIO: First name field contains only spaces ----------
When("the user enters only spaces in the first name field", async function () {
  await registrationPage.firstNameInput.fill("   "); // Only spaces
});

Then("the first name error text should be red", async function () {
  const color = await registrationPage.invalidFirstNameError.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)"); // Bootstrap danger red
});

Then("the first name input should have error styling", async function () {
  const classAttr = await registrationPage.firstNameInput.getAttribute("class");
  expect(classAttr).toContain("has-error");
});

Then("the first name label should be red", async function () {
  const color = await registrationPage.firstNameLabel.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});


