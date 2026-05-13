/**
 * YDDF Contact Form → Google Sheets
 *
 * DEPLOYMENT STEPS (do this once):
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1tZeaOy2I24NkCyLZdnU1rw76U_hUpwGsEBcIoVJ8m8Q
 * 2. Click  Extensions → Apps Script
 * 3. Delete any existing code in the editor
 * 4. Paste ALL of this file's content into the editor
 * 5. Click  Save  (floppy disk icon)
 * 6. Click  Deploy → New deployment
 * 7. Click the gear ⚙ next to "Type" → choose  Web app
 * 8. Set:
 *      Description     → YDDF Contact Form
 *      Execute as      → Me
 *      Who has access  → Anyone
 * 9. Click  Deploy
 * 10. Click  Authorize access → choose your Google account → Allow
 * 11. Copy the  Web app URL  (looks like https://script.google.com/macros/s/XXXX.../exec)
 * 12. Paste that URL into  src/config.js  →  APPS_SCRIPT_URL
 */

const SHEET_ID   = '1tZeaOy2I24NkCyLZdnU1rw76U_hUpwGsEBcIoVJ8m8Q'
const SHEET_NAME = 'Sheet1'   // change if your tab has a different name

function doPost(e) {
  try {
    const raw  = e.postData ? e.postData.contents : '{}'
    const data = JSON.parse(raw)

    const ss    = SpreadsheetApp.openById(SHEET_ID)
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet()

    // Write header row on first submission if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Subject',
        'Message',
      ])

      // Bold + freeze the header row
      const header = sheet.getRange(1, 1, 1, 7)
      header.setFontWeight('bold')
      header.setBackground('#0A2647')
      header.setFontColor('#FFFFFF')
      sheet.setFrozenRows(1)

      // Auto-resize columns
      sheet.autoResizeColumns(1, 7)
    }

    // Append the form data
    sheet.appendRow([
      new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
      (data.first  || '').trim(),
      (data.last   || '').trim(),
      (data.email  || '').trim(),
      (data.phone  || '').trim(),
      (data.subject|| '').trim(),
      (data.message|| '').trim(),
    ])

    // Optional: send yourself a notification email
    // MailApp.sendEmail({
    //   to: 'yddf94odongo@gmail.com',
    //   subject: 'New YDDF Contact: ' + (data.subject || 'General Enquiry'),
    //   body: 'From: ' + data.first + ' ' + data.last +
    //         '\nEmail: ' + data.email +
    //         '\nPhone: ' + data.phone +
    //         '\n\n' + data.message,
    // })

    return buildResponse({ success: true })
  } catch (err) {
    return buildResponse({ success: false, error: err.toString() })
  }
}

// Handle preflight CORS OPTIONS request
function doGet(e) {
  return buildResponse({ status: 'YDDF contact endpoint is live' })
}

function buildResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}
