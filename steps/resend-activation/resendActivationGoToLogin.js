import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then("the login page should be displayed", async function () {
  await expect(this.page).toHaveURL(/.*\/login/);
});
