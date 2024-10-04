export const generateOTP = (length: number = 6): string => {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
};

export const sendWhatsAppOTP = async (phoneNumber: string, otp: string) => {
  try {
    const response = await fetch('https://api.whatsapp.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`, // Ensure you have the API key in your environment variables
      },
      body: JSON.stringify({
        to: phoneNumber,
        message: `Your OTP is: ${otp}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send OTP: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('OTP sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};
