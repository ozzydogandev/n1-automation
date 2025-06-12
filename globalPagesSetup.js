import { LoginPage } from "./pages/LoginPage.js";
import { MFAPage } from "./pages/MFAPage.js";
import { RegistrationPage } from "./pages/RegistrationPage.js";
import { ResetPasswordPage } from "./pages/ResetPasswordPage.js";
import { MissingActivationEmailPage } from "./pages/MissingActivationEmailPage.js";

/**
 * @type {import('./pages/LoginPage.js').LoginPage}
 */
export let loginPage;
/**
 * @type {import('./pages/MFAPage.js').MFAPage}
 */
export let mfaPage;
/**
 * @type {import('./pages/RegistrationPage.js').RegistrationPage}
 */
export let registrationPage;
/**
 * @type {import('./pages/ResetPasswordPage.js').ResetPasswordPage}
 */
export let resetPasswordPage;
/**
 * @type {import('./pages/MissingActivationEmailPage.js').MissingActivationEmailPage}
 */
export let missingActivationEmailPage;
/**
 * @type {import('@playwright/test').Page}
 */
export let page;


/**
 * Initializes page objects
 * @param {import('playwright').Page} argPage
 */
export const initElements = (argPage) => {
  page = argPage;
  loginPage = new LoginPage(page);
  mfaPage = new MFAPage(page);
  registrationPage = new RegistrationPage(page);
  resetPasswordPage = new ResetPasswordPage(page);
  missingActivationEmailPage = new MissingActivationEmailPage(page);
};