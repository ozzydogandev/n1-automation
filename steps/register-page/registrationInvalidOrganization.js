import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

When("the user clears the organization field", async function () {
  await registrationPage.organizationInput.fill("");
});

Then("the organization field should show a required error", async function () {
  await expect(registrationPage.invalidOrganizationError).toBeVisible();
});

When(
  "the user enters only spaces in the organization field",
  async function () {
    await registrationPage.organizationInput.fill("   "); 
  }
);

Then("the organization error text should be red", async function () {
  const color = await registrationPage.invalidOrganizationError.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)"); 
});

Then("the organization input should have error styling", async function () {
    const classList = await registrationPage.organizationInput.getAttribute("class");
    expect(classList).toContain("has-error");
});

Then("the organization label should be red", async function () {
  const label = registrationPage.organizationLabel;
  const labelColor = await label.evaluate((el) => getComputedStyle(el).color);
  expect(labelColor).toBe("rgb(213, 57, 72)");
});