import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { loginPage } from "../../globalPagesSetup.js";

When("the user navigates directly to the dashboard URL", async function () {
  await this.page.goto(process.env.DASHBOARD_PAGE_URL);
});

Then("the user redirected to the login page", async function () {
  await expect(this.page).toHaveURL(/.*\/login/);
});


Then('a human verification error message is displayed', async function () {
  await expect(loginPage.humanVerificationFailedMessage).toBeVisible();
});

Then("a session cookie is created", async function () {
  const cookies = await this.page.context().cookies();

  const sessionCookie = cookies.find((cookie) =>
    cookie.name.toLowerCase().includes("session")
  );
  expect(sessionCookie).toBeDefined();
  expect(sessionCookie?.httpOnly).toBe(true);
  expect(sessionCookie?.secure).toBe(true);
});

When(
  "the user enters email with leading and trailing spaces in the email field",
  async function () {
    const emailWithSpaces = ` ${process.env.EMAIL} `;
    await loginPage.emailInput.fill(emailWithSpaces);
  }
);

When(
  "the user fills the email and password fields using automation",
  async function () {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    await loginPage.emailInput.fill(email);
    await loginPage.passwordInput.fill(password);
  }
);
