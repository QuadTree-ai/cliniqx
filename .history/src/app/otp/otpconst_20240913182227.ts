export { OTP_LENGTH, INITIAL_TIMER, RESEND_EMAIL_BUTTON_LABEL, RESEND_PHONE_BUTTON_LABEL, EMAIL_OTP_HEADER, PHONE_OTP_HEADER, EMAIL_OTP_DESCRIPTION, PHONE_OTP_DESCRIPTION, RESEND_OTP_MESSAGE };
export const INITIAL_TIMER = 60;
export const RESEND_EMAIL_BUTTON_LABEL = "Resend Email OTP";
export const RESEND_PHONE_BUTTON_LABEL = "Resend Phone OTP";
export const EMAIL_OTP_HEADER = "Email OTP";
export const PHONE_OTP_HEADER = "Phone OTP";
export const EMAIL_OTP_DESCRIPTION = "Please enter the OTP sent to your email address.";
export const PHONE_OTP_DESCRIPTION = "Please enter the OTP sent to your phone number.";
export const RESEND_OTP_MESSAGE = (timer: number) => `Resend OTP in ${timer} seconds`;