import { BasePage } from "./BasePage.js";

export class MissingActivationEmailPage extends BasePage  {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.modalTitle = page.locator("h2", { hasText: "Resend Activation" });
    this.logo = page.locator("img[alt='logo']");
    this.emailLabel = page.locator("label.control-label", { hasText: "Email" });
    this.emailInput = page.locator('input[type="text"]');
    this.submitButton = page.locator('button[type="submit"]', {hasText: "Submit",});
  }
}
