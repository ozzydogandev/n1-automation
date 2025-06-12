import { authenticator } from "otplib";

export function getOtpCode(secret) {
  return authenticator.generate(secret);
}
