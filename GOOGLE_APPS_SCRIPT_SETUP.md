# Google Apps Script Setup for Contact Form

This guide will help you set up the Google Apps Script to receive and store contact form submissions from your HRA Legal website.

## Prerequisites

- Google account
- Access to Google Sheets
- Access to Google Apps Script

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "HRA Legal Contact Form Submissions"
4. Copy the spreadsheet ID from the URL (it's the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123def456ghi789jkl/edit`
   - The ID is: `1ABC123def456ghi789jkl`

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the following code:

```javascript
/**
 * Google Apps Script for HRA Legal Contact Form
 * This script receives form submissions and saves them to a Google Sheet
 */

// Configuration - Replace with your actual Google Sheet ID
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Contact Form Submissions';

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the form data
    const formData = JSON.parse(e.postData.contents);
    
    // Get the Google Sheet
    const sheet = getOrCreateSheet();
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.firstName || '',
      formData.lastName || '',
      formData.email || '',
      formData.phone || '',
      formData.legalService || '',
      formData.message || '',
      'New' // Status column
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification (optional)
    sendEmailNotification(formData, timestamp);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error processing form submission'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

/**
 * Handle OPTIONS requests for CORS
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

/**
 * Get or create the Google Sheet for storing submissions
 */
function getOrCreateSheet() {
  let spreadsheet;
  
  try {
    // Try to open existing spreadsheet
    spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  } catch (error) {
    // If sheet doesn't exist, create a new one
    spreadsheet = SpreadsheetApp.create('HRA Legal Contact Form Submissions');
    console.log('Created new spreadsheet:', spreadsheet.getId());
    console.log('Please update SHEET_ID in the script with:', spreadsheet.getId());
  }
  
  // Get or create the specific sheet
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    
    // Add headers
    const headers = [
      'Timestamp',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Legal Service',
      'Message',
      'Status'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format the header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f0f0f0');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
  }
  
  return sheet;
}

/**
 * Send email notification when a new form is submitted
 */
function sendEmailNotification(formData, timestamp) {
  try {
    const subject = 'New Contact Form Submission - HRA Legal';
    const emailBody = `
New contact form submission received on ${timestamp.toLocaleString()}:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Legal Service: ${formData.legalService || 'Not specified'}

Message:
${formData.message}

---
This is an automated notification from the HRA Legal website contact form.
    `;
    
    // Send email to the office email
    MailApp.sendEmail({
      to: 'info@hralegal.com',
      subject: subject,
      body: emailBody
    });
    
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

/**
 * Test function to verify the script is working
 */
function testScript() {
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    legalService: 'contracts',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

/**
 * Initialize the spreadsheet and set up the headers
 * Run this function once to set up your sheet
 */
function initializeSheet() {
  const sheet = getOrCreateSheet();
  console.log('Sheet initialized successfully');
  console.log('Spreadsheet URL:', SpreadsheetApp.openById(SHEET_ID).getUrl());
}
```

4. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Google Sheet ID from Step 1
5. Save the project and name it "HRA Legal Contact Form Handler"

## Step 3: Set Up Permissions and Deploy

1. **Set Permissions:**
   - In the Apps Script editor, click on "Services" in the left sidebar
   - Add the following APIs if not already present:
     - Google Sheets API
     - Gmail API (for email notifications)

2. **Test the Script:**
   - In the Apps Script editor, select the `initializeSheet` function
   - Click "Run" to test and initialize your sheet
   - Grant necessary permissions when prompted
   - This will set up the headers in your Google Sheet

3. **Deploy as Web App:**
   - Click "Deploy" → "New deployment"
   - Choose "Web app" as the type
   - Set the following:
     - Description: "HRA Legal Contact Form Handler"
     - Execute as: "Me"
     - Who has access: "Anyone"
   - Click "Deploy"
   - Copy the Web App URL (it will look like: `https://script.google.com/macros/s/ABC123.../exec`)

## Step 4: Update Your Website

1. Open `src/app/contact/page.tsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL from Step 3
3. Save the file and deploy your website

## Step 5: Test the Integration

1. Visit your website's contact page
2. Fill out and submit the form
3. Check your Google Sheet - you should see the submission appear
4. Check your email (info@hralegal.com) for the notification

## Features Included

### Google Sheet Columns
- **Timestamp:** When the form was submitted
- **First Name:** User's first name
- **Last Name:** User's last name
- **Email:** User's email address
- **Phone:** User's phone number (optional)
- **Legal Service:** Selected legal service category
- **Message:** User's message
- **Status:** Tracking field (starts as "New")

### Email Notifications
- Automatic email sent to `info@hralegal.com` for each form submission
- Contains all form details in a readable format

### Form Features
- Real-time form validation
- Loading states during submission
- Success/error messages
- Form reset after successful submission
- CORS handling for cross-origin requests

## Troubleshooting

### Common Issues

1. **"Access denied" error:**
   - Make sure you've granted all necessary permissions
   - Ensure the Web App is deployed with "Anyone" access

2. **Form submission fails:**
   - Check that the Google Apps Script URL is correct
   - Verify the script is deployed and published
   - Check browser console for detailed error messages

3. **No email notifications:**
   - Verify that Gmail API is enabled in your Apps Script project
   - Check your Google Apps Script execution logs

4. **Data not appearing in sheet:**
   - Check the Google Sheet ID in your script
   - Verify the sheet name matches exactly
   - Check Google Apps Script execution logs for errors

### Viewing Logs

1. In Google Apps Script, go to "Executions" in the left sidebar
2. Click on any execution to see detailed logs
3. Look for error messages or console output

## Security Considerations

- The Google Apps Script Web App URL should be kept secure
- Consider implementing rate limiting if you experience spam
- Form submissions are logged with timestamps for audit purposes

## Customization Options

### Adding New Form Fields
1. Update the form in `src/app/contact/page.tsx`
2. Update the Google Apps Script to handle the new field
3. Add the new column to your Google Sheet

### Changing Email Recipients
Update the `to:` field in the `sendEmailNotification` function in your Google Apps Script.

### Custom Email Templates
Modify the `emailBody` variable in the `sendEmailNotification` function to customize the email format.

## Support

If you encounter issues:
1. Check the Google Apps Script execution logs
2. Verify all URLs and IDs are correct
3. Test the individual components (script, sheet, form) separately 