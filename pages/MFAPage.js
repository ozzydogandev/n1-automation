import { BasePage } from "./BasePage.js";

export class MFAPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.logo = page.locator("img[alt='logo']");
    this.title = page.locator("h2", { hasText: "Multi-Factor Authentication" });
    this.mfaDropdown = page.locator(".css-1pahdxg-control");
    this.mfaDropdownOptions = page.locator(".css-yt9ioa-option"); 
    this.mfaMethodLabel = page.locator("label", {
      hasText: "Authenticator App",
    });
    this.mfaInput = page.locator("input[name='mfaCode']");
    this.submitButton = page.locator("button[type='submit']");
    this.contactUsLink = page.locator("a[href*='ninja-contact.html']");
    this.footerCopyright = page.locator("small.css-mh47ez");
    this.codeInput = page.locator("input[name='mfaCode']");
    this.codeLabel = page.locator("label.control-label", {hasText: "Enter time-based code"});
    this.submitButton = page.locator("button[type='submit']");
  }
}
