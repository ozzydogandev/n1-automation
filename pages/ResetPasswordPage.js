import { BasePage } from "./BasePage.js";

export class ResetPasswordPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.logo = page.locator("img[alt='logo']");
    this.identityMethodDropdown = page.locator("//div[contains(@class, 'css-yk16xz-control')]");
    this.identitySelected = page.locator(".css-1uccc91-singleValue");
    this.emailInput = page.locator("input[name='email']");
    this.lastFourDigitsInput = page.locator("//input[@name='phone']");
    this.sendButton = page.locator("button[type='submit']");
    this.textCodeInput = page.locator('input[name="verificationCode"]');
  }
}
