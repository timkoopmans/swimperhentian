# Registration Form Setup Guide

This website uses Google Forms for collecting registration data since it's hosted on GitHub Pages (static site).

## Why Google Forms?

For a static GitHub Pages site, Google Forms is an excellent solution because:

✅ **Free & Reliable** - No backend server needed  
✅ **Easy Setup** - Takes just 5-10 minutes  
✅ **Data Collection** - All responses go to Google Sheets  
✅ **Email Notifications** - Get notified of new registrations  
✅ **Export Options** - Download as CSV, Excel, or use Google Sheets  
✅ **No Maintenance** - Google handles everything  

## Setup Instructions

### 1. Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **+ Blank** to create a new form
3. Title it: "Swim Perhentian 2026 Registration"

### 2. Add Form Fields

Here are the recommended fields for the swim event:

**Personal Information:**
- Full Name (Short answer, Required)
- Email Address (Short answer, Required, Email validation)
- Phone Number (Short answer, Required)
- Date of Birth (Date, Required)
- Gender (Multiple choice: Male/Female/Other)
- Nationality (Short answer, Required)
- Country of Residence (Short answer)

**Event Selection:**
- Event Category (Multiple choice, Required):
  - 16 km Solo
  - 16 km Relay - Duo (2 swimmers)
  - 16 km Relay - Team (4 swimmers)
  - 10 km Solo
  - 4 km Solo
  - 1.5 km Solo
  - 500 m Solo (13+ years)
  - 500 m Sea Angel (10-12 years)
  - 250 m Sea Angel (7-9 years)

**For Relay Teams (Conditional):**
- Team Name (Short answer, show if relay selected)
- Team Member Names (Long answer, show if relay selected)
- Team Member Emails (Long answer, show if relay selected)

**Emergency Contact:**
- Emergency Contact Name (Short answer, Required)
- Emergency Contact Phone (Short answer, Required)
- Emergency Contact Relationship (Short answer)

**Medical Information:**
- Medical Conditions (Long answer - "Please list any medical conditions we should be aware of")
- Medications (Long answer)
- Allergies (Long answer)

**Experience:**
- Swimming Experience Level (Multiple choice):
  - Beginner
  - Intermediate
  - Advanced
  - Elite/Competitive
- Previous Open Water Experience (Multiple choice: Yes/No)
- If Yes, describe (Long answer, conditional)

**Accommodation & Travel:**
- Accommodation Booked? (Multiple choice: Yes/No/Not Yet)
- Hotel/Resort Name (Short answer)
- Arrival Date (Date)
- Departure Date (Date)

**Additional:**
- Special Dietary Requirements (Long answer)
- T-Shirt Size (Multiple choice: XS/S/M/L/XL/XXL)
- How did you hear about us? (Multiple choice/Checkboxes)
- Additional Comments (Long answer)

**Terms & Conditions:**
- Checkbox: "I have read and agree to the terms and conditions"
- Checkbox: "I understand the safety requirements and accept the risks"
- Checkbox: "I consent to photos/videos being taken during the event"

### 3. Get the Embed URL

1. Click **Send** button (top right)
2. Click the **< >** (Embed HTML) icon
3. Copy the URL from `src="..."` in the iframe code
4. It should look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true
   ```

### 4. Update the Website

Open `src/lib/RegistrationForm.svelte` and replace the `formUrl` value:

```typescript
export let formUrl = "YOUR_COPIED_URL_HERE";
```

### 5. Configure Response Settings

In your Google Form:
1. Click **Responses** tab
2. Click the three dots menu → **Select response destination**
3. Choose **Create a new spreadsheet** or select existing
4. Enable **Get email notifications for new responses** (Settings → Responses)

### 6. Set Up Email Confirmations (Optional but Recommended)

To send automatic confirmation emails to registrants:

1. In your Google Form responses spreadsheet
2. Go to **Extensions** → **Add-ons** → **Get add-ons**
3. Search for "Email Notifications for Forms" or "Form Publisher"
4. Install and configure to send confirmation emails

### 7. Test Your Form

1. Submit a test registration
2. Check that responses appear in your spreadsheet
3. Verify email notifications work
4. Test the form on mobile devices

## Alternative Options

If you prefer other solutions:

### Formspree
- Free tier: 50 submissions/month
- Easy email integration
- Code: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

### Netlify Forms
- If you switch from GitHub Pages to Netlify
- 100 submissions/month free
- Simple data-netlify="true" attribute

### Airtable Forms
- Visual database + forms
- Great for data management
- API integration possible

### Typeform
- Beautiful, modern forms
- Limited free tier (10 responses/month)
- Great user experience

## Managing Registrations

### View Responses
1. Open your Google Form
2. Click **Responses** tab
3. View individual responses or summary

### Download Data
1. In Responses tab, click the Google Sheets icon
2. In the spreadsheet: **File** → **Download** → **CSV** or **Excel**

### Create Reports
Use Google Sheets to:
- Count registrations per category
- Track payment status (add column)
- Generate participant lists
- Create charts and analytics

## Payment Integration

For payment processing, you have several options:

1. **Stripe Payment Links** - Create payment links for each category
2. **PayPal** - Send invoices or use payment buttons
3. **Bank Transfer** - Collect bank details and follow up manually
4. **Eventbrite** - Full event management with ticketing

Add payment instructions to the form's description or confirmation message.

## Need Help?

If you need assistance setting up the form:
- [Google Forms Help Center](https://support.google.com/forms)
- [Google Forms Tutorial Video](https://www.youtube.com/results?search_query=google+forms+tutorial)

---

**Note:** Once your Google Form is set up, commit and push the changes to automatically deploy to GitHub Pages!

