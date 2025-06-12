import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage } from "../../globalPagesSetup.js";

Then("the checkbox should be unselected by default", async function () {
  await expect(loginPage.keepMeSignedInCheckbox).not.toBeChecked();
});

When("the user clicks the checkbox", async function () {
  await loginPage.keepMeSignedInCheckbox.check({ force: true });
});

Then("it becomes selected", async function () {
  await expect(loginPage.keepMeSignedInCheckbox).toBeChecked();
});