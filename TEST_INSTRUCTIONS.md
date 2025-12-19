# Quick Test Instructions

Follow these steps to test the Kit email integration locally.

## Prerequisites

✅ You have completed the setup in `SETUP.md`  
✅ You have created a `.env` file with your Kit API key  
✅ Dependencies are installed (`npm install`)

## Step 1: Start the Backend Server

Open a terminal in the project root and run:

```bash
npm run server
```

You should see:
```
Server is running on port 5000
Environment: development
```

**Leave this terminal running.**

## Step 2: Start the React Frontend

Open a **second terminal** in the project root and run:

```bash
npm start
```

The React app should open automatically in your browser at `http://localhost:3000`.

**Leave this terminal running too.**

## Step 3: Test the Contact Form

1. In your browser, scroll down to the **"Get In Touch"** section at the bottom of the page

2. Fill out the form:
   - **Name:** Enter your name (e.g., "John Doe")
   - **Email:** Enter a valid email address
   - **Subject:** Select any option from the dropdown (optional)
   - **Message:** Enter a test message (e.g., "This is a test submission")

3. Click **"Send Message"**

4. Watch for the following:
   - The button text changes to **"Sending..."**
   - After a moment, a **green success message** appears
   - The form fields are **cleared**

## Step 4: Verify in Kit Dashboard

1. Log into your Kit account: https://app.kit.com

2. Navigate to **Subscribers** (or **Audience**)

3. Look for the email address you just submitted

4. Click on the subscriber to view details

5. Check that the custom fields contain:
   - **Subject:** The subject you selected
   - **Message:** The message you typed

## Expected Results

### ✅ Success

If everything works correctly:
- ✅ Form submits without errors
- ✅ Success message appears
- ✅ Form fields are cleared
- ✅ New subscriber appears in Kit dashboard
- ✅ Custom fields (subject, message) are populated

### ❌ Common Issues

#### Issue: "Unable to connect to the server"

**Solution:**
- Make sure the backend server is running (`npm run server`)
- Check that it's running on port 5000
- Look for errors in the backend terminal

#### Issue: "Server configuration error"

**Solution:**
- Check that your `.env` file exists in the project root
- Verify `KIT_API_KEY` is set in the `.env` file
- Restart the backend server after creating/modifying `.env`

#### Issue: "Invalid request" or API errors

**Solution:**
- Verify your Kit API key is correct
- Make sure you're using a **V4 API key** (not V3)
- Check the backend terminal for detailed error messages

#### Issue: Form submits but subscriber doesn't appear in Kit

**Solution:**
- Check the backend terminal for error messages
- Verify your Kit API key has the correct permissions
- The email might already exist in your Kit account (check for updates)
- Wait a few minutes and refresh your Kit dashboard

## Test with cURL (Optional)

You can also test the backend API directly without using the form:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "General Contact",
    "message": "This is a test message from cURL"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

## Debugging Tips

### Check Backend Logs

Look at the terminal where `npm run server` is running. You should see:
- API requests being logged
- Kit API responses
- Any error messages

### Check Browser Console

1. Open DevTools (press F12)
2. Go to the **Console** tab
3. Look for any error messages (red text)
4. Go to the **Network** tab
5. Submit the form and look for the `/api/contact` request
6. Click on it to see the request/response details

### Check Kit API Response

The backend logs will show the Kit API response. Look for:
- `Kit API response: { subscription: { ... } }` (success)
- `Error submitting to Kit API: ...` (error)

## Next Steps

Once local testing is successful:

1. ✅ Your integration is working!
2. 📖 Read `DEPLOYMENT.md` for production deployment instructions
3. 🚀 Deploy to your production environment
4. 🧪 Test again in production

## Need Help?

- Review `SETUP.md` for setup instructions
- Review `DEPLOYMENT.md` for deployment instructions
- Check Kit API documentation: https://developers.kit.com/
- Check server logs for detailed error messages

