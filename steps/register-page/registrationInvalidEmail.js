import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { registrationPage } from "../../globalPagesSetup.js";

When("the user leaves the registration email field blank", async function () {
  await registrationPage.emailInput.fill("");
});

When(
  "the user enters {string} in the registration email field", async function (input) {
    await registrationPage.emailInput.type(input);
  }
);

Then("an invalid email error should be shown", async function () {
    await registrationPage.registrationHeader.click();
    const errorText = await registrationPage.invalidEmailError.textContent();
    expect(errorText.trim()).toBe("Invalid email address");
});

Then("the email error text should be red", async function () {
  const color = await registrationPage.invalidEmailError.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

Then("the email input should have error styling", async function () {
  const classAttr = await registrationPage.emailInput.getAttribute("class");
  expect(classAttr).toContain("has-error");
});

Then("the email label should be red", async function () {
  const color = await registrationPage.emailLabel.evaluate(
    (el) => getComputedStyle(el).color
  );
  expect(color).toBe("rgb(213, 57, 72)");
});

When("the user enters an already registered email address", async function () {
  // Write code here that turns the phrase above into concrete actions
  await registrationPage.emailInput.type(process.env.EMAIL, { delay: 100 }  );
});

Then("an email has already been registered error should be shown",async function () {
    const registeredErrorText = await registrationPage.alreadyRegisteredEmailError.textContent();
    expect(registeredErrorText.trim()).toBe("Email Address has already been registered.");
  }
);

Then("the email has already been registered error text should be red", async function () {
    const color = await registrationPage.alreadyRegisteredEmailError.evaluate(
      (el) => getComputedStyle(el).color
    );
    expect(color).toBe("rgb(213, 57, 72)");
  }
);
