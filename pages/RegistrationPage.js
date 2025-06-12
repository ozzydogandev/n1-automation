import { BasePage } from "./BasePage.js";

export class RegistrationPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.logo = page.locator("img[alt='logo']");
    this.registrationHeader = page.getByRole("heading", {name: "Registration",});
    this.organizationInput = page.locator("//input[@name='organization']");
    this.firstNameInput = page.locator("input[name='firstName']");
    this.lastNameInput = page.locator("input[name='lastName']");
    this.emailInput = page.locator("input[name='email']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.verifyPasswordInput = page.locator("input[name='passwordConfirm']");
    this.phoneCountrySelect = page.locator("select.PhoneInputCountrySelect");
    this.phoneInput = page.locator("input[type='tel']");
    this.languageDropdown = page.locator("input#react-select-2-input");
    this.languageSelectedText = page.locator("div.css-1uccc91-singleValue");
    this.registerButton = page.locator("button[type='submit']");
    this.missingActivationLink = page.locator("a[href='#/requestActivation']");
    this.loginLink = page.locator("a[href='#/login']");
    this.contactUsLink = page.locator("a[href*='ninja-contact.html']");
    this.cellphoneLabel = page.locator("//label[text()='Cell Phone']");
    this.phoneFormGroup = page.locator("div.form-group", {has: page.locator("input[type='tel']")});
    this.invalidPhoneNumberError = page.locator("//em[@class='invalid' and text()='Invalid phone number']");
    this.emailLabel = page.locator("//label[text()='Email']");
    this.invalidEmailError = page.locator("//em[@class='invalid' and text()='Invalid email address']");
    this.alreadyRegisteredEmailError = page.locator("em.invalid", {hasText: "Email Address has already been registered."});
    this.firstNameLabel = page.locator("//label[text()='First Name']");
    this.invalidFirstNameError = page.locator("//label[text()='First Name']/following-sibling::em[@class='invalid' and text()='Required']");
    this.lastNameLabel = page.locator("//label[text()='Last Name']");
    this.invalidLastNameError = page.locator("//label[text()='Last Name']/following-sibling::input[@name='lastName']/following-sibling::em[@class='invalid' and text()='Required']");
    this.organizationLabel = page.locator("//label[text()='Organization']");
    this.invalidOrganizationError = page.locator("//label[text()='Organization']/following-sibling::em[@class='invalid' and text()='Required']");
    this.passwordError = page.locator("//em[@class='invalid' and contains(text(),'Password must be between')]");
    this.passwordErrorText = page.locator("//em[@class='invalid' and text()='Password must be between (8) and (72) characters and meet 3 of the following criteria: lower case letter, upper case letter, special character, number.']");
    this.passwordLabel = page.locator("//label[text()='Password']");
    this.verifyPasswordError = page.locator("//em[@class='invalid' and text()='Passwords do not match']");
    this.verifyPasswordLabel = page.locator("//label[text()='Verify Password']");
  }
}
