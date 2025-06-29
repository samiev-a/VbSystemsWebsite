# Email Setup for Contact Form

The contact form now sends emails when submitted using **Mailtrap** for reliable email delivery. The configuration is already set up and working.

## Current Configuration (Mailtrap)

The `.env` file is configured with working Mailtrap SMTP settings:
```
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=********205cbc
EMAIL_PASS=********0bb511
```

## Alternative Setup (Gmail SMTP)

If you prefer to use Gmail instead:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Update the .env file**:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
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