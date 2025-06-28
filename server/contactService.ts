import { storage } from "./storage";
import { ContactFormData } from "@shared/schema";
import { emailService } from "./emailService";

class ContactService {
  async submitContactForm(formData: ContactFormData) {
    try {
      // Store the contact form submission
      const contact = await storage.createContactSubmission({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        serviceInterest: formData.serviceInterest,
        message: formData.message,
        createdAt: new Date().toISOString(),
      });

      // Send email notifications
      console.log("Contact form submission received:", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        serviceInterest: formData.serviceInterest,
      });

      // Attempt to send email notifications
      let emailSent = false;
      try {
        emailSent = await emailService.sendContactFormEmail(formData);
        if (emailSent) {
          console.log("Email notifications sent successfully");
        } else {
          console.log("Email notifications not sent - service not configured");
        }
      } catch (emailError) {
        console.error("Error sending email notifications:", emailError);
        // Don't fail the entire submission if email fails
      }

      return { ...contact, emailSent };
    } catch (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
  }
}

export const contactService = new ContactService();
