import { BasePage } from "./BasePage.js";

export class MFAPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.logo = page.locator("img[alt='logo']");
    this.title = page.locator("h2", { hasText: "Multi-Factor Authentication" });

    // Dropdown trigger (react-select styled)
    this.mfaDropdown = page.locator(".css-1pahdxg-control"); // or use a more stable outer wrapper if available

    // Dropdown options (visible when open)
    this.mfaDropdownOptions = page.locator(".css-yt9ioa-option"); // adjust if needed

    // MFA method description
    this.mfaMethodLabel = page.locator("label", {
      hasText: "Authenticator App",
    });

    // Code input field
    this.mfaInput = page.locator("input[name='mfaCode']");

    // Submit button
    this.submitButton = page.locator("button[type='submit']");

    // Footer and links
    this.contactUsLink = page.locator("a[href*='ninja-contact.html']");
    this.footerCopyright = page.locator("small.css-mh47ez");

    this.codeInput = page.locator("input[name='mfaCode']");
    this.codeLabel = page.locator("label.control-label", {hasText: "Enter time-based code"});
    this.submitButton = page.locator("button[type='submit']");
  }
}
