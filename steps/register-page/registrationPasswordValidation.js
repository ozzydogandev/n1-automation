import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

Then("the password and verify password fields should be of type {string}", async function (string) {
    await expect(registrationPage.passwordInput).toHaveAttribute("type", "password");
  }
);