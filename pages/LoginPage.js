import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.logo = page.locator("img[alt='logo']");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.emailFormGroup = page.locator("#email").locator("..");
    this.passwordFormGroup = page.locator("#password").locator("..");
    this.keepMeSignedInCheckbox = page.locator("#staySignedIn");
    this.keepMeSignedInLabel = page.locator("//label[@for='staySignedIn']");
    this.signInButton = page.locator("//button[@type='submit' and text()='Sign in']");
    this.forgotPasswordLink = page.locator("a[href='#/resetPassword']");
    this.registerLink = page.locator("a[href='#/register']");
    this.footerCopyright = page.locator("small.css-mh47ez");
    this.contactUsLink = page.locator("a[href*='ninja-contact.html']");
    this.recaptchaBadge = page.locator(".grecaptcha-badge");
    this.toastErrorMessage = this.page.getByText(/Error during login/i);
    this.humanVerificationFailedMessage = this.page.locator("//div[@class='alert alert-danger css-xlp8fa e1vjstjx0' and contains(text(),'Human verification failed')]");
    this.invalidUserNameAndPasswordError = this.page.locator("//div[@class='alert alert-danger css-xlp8fa e1vjstjx0' and contains(text(),'Invalid username/password')]");
  }
}