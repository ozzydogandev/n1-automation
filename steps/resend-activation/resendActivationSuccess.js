import { When } from "@cucumber/cucumber";
import { missingActivationEmailPage } from "../../globalPagesSetup.js";

When(
  "the user enters a valid not activated email in the activation email input field",
  async function () {
    await missingActivationEmailPage.emailInput.type(`${process.env.INACTIVE_EMAIL}`, { delay: 100  });
  }
);
