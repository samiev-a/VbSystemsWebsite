import nodemailer from 'nodemailer';
import { ContactFormData } from '../shared/schema';
import { extendTailwindMerge } from 'tailwind-merge';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private fromEmail: string = '';

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    // Try to use environment variables for email configuration
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const emailPort = parseInt(process.env.EMAIL_PORT || '587');
    const emailFrom = process.env.EMAIL_FROM;

    if (emailUser && emailPass) {
      const config: EmailConfig = {
        host: emailHost,
        port: emailPort,
        secure: true, // true for 465, false for other ports
        auth: {
          user: emailUser,
          pass: emailPass
        }
      };

      this.transporter = nodemailer.createTransport(config);
      this.fromEmail = emailFrom || emailUser; // Use EMAIL_FROM if provided, otherwise use EMAIL_USER
      console.log('Email service initialized with SMTP configuration');
    } else {
      console.log('Email service not configured - missing EMAIL_USER or EMAIL_PASS environment variables');
    }
  }

  async sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
    if (!this.transporter) {
      console.log('Email service not configured, skipping email send');
      return false;
    }

    try {
      // Email to business owner
      const businessEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
          </div>

          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Service Interest</h3>
            <p><strong>Service:</strong> ${formData.serviceInterest}</p>
          </div>

          <div style="background-color: #fff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from your VB Systems Communication website contact form.
            </p>
          </div>
        </div>
      `;

      const businessEmailOptions = {
        from: this.fromEmail,
        to: this.fromEmail, // Send to business email
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        html: businessEmailHtml
      };

      // Confirmation email to customer
      const customerEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Thank You for Contacting VB Systems Communication
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6;">Dear ${formData.firstName},</p>
          
          <p style="line-height: 1.6;">
            Thank you for reaching out to VB Systems Communication. We have received your inquiry about 
            <strong>${formData.serviceInterest}</strong> and will get back to you within 24 hours.
          </p>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Your Submission Details</h3>
            <p><strong>Service Interest:</strong> ${formData.serviceInterest}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
          </div>

          <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: white;">What happens next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our technical team will review your requirements</li>
              <li>We'll contact you within 24 hours to discuss your project</li>
              <li>We'll provide a free consultation and quote if needed</li>
            </ul>
          </div>

          <p style="line-height: 1.6;">
            If you have any urgent questions, please don't hesitate to call us directly.
          </p>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Best regards,<br>
              <strong>VB Systems Communication Team</strong>
            </p>
          </div>
        </div>
      `;

      const customerEmailOptions = {
        from: this.fromEmail,
        to: formData.email,
        subject: 'Thank you for contacting VB Systems Communication',
        html: customerEmailHtml
      };

      console.log(this.fromEmail, formData.email);

      // Send both emails
      await this.transporter.sendMail(businessEmailOptions);
      await this.transporter.sendMail(customerEmailOptions);

      console.log(`Contact form emails sent successfully for ${formData.firstName} ${formData.lastName}`);
      return true;
    } catch (error) {
      console.error('Error sending contact form emails:', error);
      return false;
    }
  }

  async testConnection(): Promise<boolean> {
    if (!this.transporter) {
      return false;
    }

    try {
      await this.transporter.verify();
      console.log('Email service connection verified');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();