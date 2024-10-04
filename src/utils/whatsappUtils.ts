export const sendWhatsAppOTP = async (phoneNumber: string, otp: string): Promise<void> => {
  const message = `Your OTP is: ${otp}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
