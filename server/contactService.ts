import { storage } from "./storage";
import { ContactFormData } from "@shared/schema";

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

      // Here you would typically send an email notification
      // This is where you would implement the email notification service
      // For now, we'll just log the submission
      console.log("Contact form submission received:", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        serviceInterest: formData.serviceInterest,
      });

      return contact;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
  }
}

export const contactService = new ContactService();
