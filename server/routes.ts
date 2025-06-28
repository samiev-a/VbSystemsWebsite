import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ContactFormData } from "@shared/schema";
import { ZodError } from "zod";
import { contactFormSchema } from "@shared/schema";
import { contactService } from "./contactService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact  form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate incoming data
      const validatedData = contactFormSchema.parse(req.body) as ContactFormData;
      
      // Process the contact form submission
      const result = await contactService.submitContactForm(validatedData);
      
      // Return success response with email status
      if (result.emailSent) {
        res.status(200).json({ 
          success: true, 
          message: "Contact form submitted successfully and email notifications sent" 
        });
      } else {
        res.status(200).json({ 
          success: true, 
          message: "Contact form submitted successfully. We will review your inquiry and get back to you soon.",
          emailWarning: "Email notifications are currently unavailable" 
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
