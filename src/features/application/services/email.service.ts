interface SendEmailParams {
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  experienceLevel: string;
  selectedProgram: string;
}

export const EmailService = {
  sendRegistrationEmail: async ({
    studentName,
    studentEmail,
    studentPhone,
    experienceLevel,
    selectedProgram,
  }: SendEmailParams): Promise<void> => {
    // 1. Grab key and immediately strip any hidden linebreaks or spaces using .trim()
    const rawKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    const brevoApiKey = rawKey ? rawKey.trim() : null;

    if (!brevoApiKey) {
      console.error("Brevo API key missing inside environment configuration files!");
      return;
    }

    const endpointData = {
      sender: {
        name: "Pie Coding Schools",
        email: "tech@piecodingschools.com",
      },
      to: [
        {
          email: studentEmail.trim(),
          name: studentName,
        },
      ],
      templateId: 1,
      params: {
        STUDENT_NAME: studentName,
        PROGRAM_NAME: selectedProgram,
        STUDENT_EMAIL: studentEmail,
        STUDENT_PHONE: studentPhone,
        EXPERIENCE_LEVEL: experienceLevel,
      },
    };

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': brevoApiKey, // Brevo standard api authentication header key
        },
        body: JSON.stringify(endpointData),
      });

      if (!response.ok) {
        // Log the actual text response back from Brevo's error engine to see exact details
        const errorText = await response.text();
        throw new Error(`Status ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log('Automated confirmation email sent successfully:', result);
    } catch (error) {
      console.error('Error dispatching transactional confirmation email:', error);
    }
  },
};