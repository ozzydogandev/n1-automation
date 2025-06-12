import dotenv from "dotenv";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility.js";
dotenv.config();

export class BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async start() {
    await this.page.goto(process.env.LOGIN_PAGE_URL);

    await BrowserUtility.verify_title(this.page, "NinjaOne");
  }

  async register() {
    await this.page.goto(process.env.REGISTRATION_PAGE_URL);

    await BrowserUtility.verify_title(this.page, "NinjaOne");
  }

  async resetPassword() {
    await this.page.goto(process.env.RESET_PASSWORD_PAGE_URL);

    await BrowserUtility.verify_title(this.page, "NinjaOne");
  }

  async missingActivationEmail() {
    await this.page.goto(process.env.MISSING_ACTION_PAGE_URL);

    await BrowserUtility.verify_title(this.page, "NinjaOne");
  }
}
