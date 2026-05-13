# Google Sheet Integration Setup

## Your Sheet
https://docs.google.com/spreadsheets/d/1tZeaOy2I24NkCyLZdnU1rw76U_hUpwGsEBcIoVJ8m8Q

---

## Step-by-Step (one-time, takes ~5 minutes)

### 1. Open Apps Script
1. Open your Google Sheet (link above)
2. Click **Extensions** → **Apps Script**
3. The Apps Script editor opens in a new tab

### 2. Paste the script
1. Delete everything in the editor (`Ctrl+A` then `Delete`)
2. Open `google-apps-script.js` from this project
3. Copy the entire file and paste it into the editor
4. Click the **Save** icon (💾) or press `Ctrl+S`

### 3. Deploy as a Web App
1. Click **Deploy** → **New deployment**
2. Click the ⚙ gear icon next to **"Select type"** → choose **Web app**
3. Fill in:
   - **Description**: YDDF Contact Form
   - **Execute as**: Me *(your Google account)*
   - **Who has access**: **Anyone**
4. Click **Deploy**

### 4. Authorize
1. A dialog says "Authorization required" → click **Authorize access**
2. Choose your Google account
3. You may see "Google hasn't verified this app" → click **Advanced** → **Go to YDDF Contact Form (unsafe)**
4. Click **Allow**

### 5. Copy the URL
1. After deployment, you see a **Web app URL** like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```
2. Click **Copy** next to that URL

### 6. Paste into the app
Open `src/config.js` and replace the placeholder:

```js
// Before
export const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE'

// After
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec'
```

Save the file and restart the dev server (`npm run dev`).

---

## Testing

1. Go to `/contact` in the app
2. Fill in the form and click **Send Message**
3. Check your Google Sheet — a new row should appear with the submission

---

## What gets recorded in the sheet

| Column | Data |
|--------|------|
| Timestamp | Date & time (Nairobi timezone) |
| First Name | |
| Last Name | |
| Email | |
| Phone | |
| Subject | Dropdown selection |
| Message | |

The header row is created automatically on the first submission (navy background, white text, frozen).

---

## Optional: Email notifications

To receive an email on every submission, open the Apps Script and uncomment the `MailApp.sendEmail(...)` block near the bottom of the `doPost` function.

---

## Re-deploying after changes

If you edit the Apps Script code later:
1. Click **Deploy** → **Manage deployments**
2. Click the pencil ✏ icon on your existing deployment
3. Change **Version** to **New version**
4. Click **Deploy**

> The URL stays the same — no need to update `src/config.js`.
