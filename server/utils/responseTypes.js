// Just an example of a response type utility file for an express server.

export const ERROR_TYPES = {
  // Auth Errors
  EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  PASSWORD_MISMATCH: "PASSWORD_MISMATCH",
  ACCOUNT_NOT_ACTIVATED: "ACCOUNT_NOT_ACTIVATED",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  TOKEN_INVALID: "TOKEN_INVALID",
  UNAUTHORIZED: "UNAUTHORIZED",

  // General Errors
  VERIFICATION_FAILED: "VERIFICATION_FAILED", // For failed verifications like OTP, email, etc.
  INVALID_INPUT: "INVALID_INPUT", // For generic input validation issues

  // Server Errors
  INTERNAL_SERVER: "INTERNAL_SERVER",
};
