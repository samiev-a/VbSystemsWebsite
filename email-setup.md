# Email Setup for Contact Form

The contact form will now send emails when submitted. To enable email functionality, you need to set up your email credentials in the `.env` file.

## Gmail SMTP Setup (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Update the .env file**:
   - Open the `.env` file in your project root
   - Replace the placeholder values:
     ```
     EMAIL_USER=yourname@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```
   - Save the file and restart your application

## How It Works

When a contact form is submitted:
1. ✅ The form data is saved to the database
2. 📧 **Two emails are sent**:
   - **To You**: Contains all contact details and message
   - **To Customer**: Confirmation email with next steps

## Testing

1. Set up the environment variables above
2. Submit a test form on your website
3. Check both your email and the test email address for messages

## Security Notes

- App passwords are safer than your main Gmail password
- Environment variables keep credentials secure
- Emails are sent via secure SMTP connection

## Alternative Email Services

You can also use:
- **Outlook/Hotmail**: smtp.outlook.com (port 587)
- **Yahoo**: smtp.mail.yahoo.com (port 587)
- **Custom SMTP**: Any email provider with SMTP access

Just update the EMAIL_HOST environment variable accordingly.