# Kit Email Integration Setup Guide

This guide will help you set up the Kit (ConvertKit) email integration for the contact form.

## Prerequisites

- A Kit (ConvertKit) account
- Node.js and npm installed

## Step 1: Get Your Kit API Key

1. Log into your Kit account at [https://app.kit.com](https://app.kit.com)
2. Navigate to **Settings** → **Advanced** → **API & Webhooks**
3. Under the **V4 Keys** section, click **"Add a new key"**
4. Provide an internal name for the key (e.g., "Aletheia Website")
5. Copy the generated API key (you won't be able to see it again!)

## Step 2: Create Your .env File

1. In the project root directory, create a file named `.env`
2. Add the following content:

```
# Kit (ConvertKit) API Configuration
KIT_API_KEY=your_actual_api_key_here

# Optional: Kit Form ID (if you want to associate submissions with a specific form)
# KIT_FORM_ID=your_form_id_here

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for production CORS)
FRONTEND_URL=http://localhost:3000
```

3. Replace `your_actual_api_key_here` with the API key you copied from Kit
4. Save the file

**IMPORTANT:** Never commit the `.env` file to version control. It's already added to `.gitignore`.

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Run the Application

You'll need to run both the backend server and the React frontend:

### Terminal 1 - Backend Server
```bash
npm run server
```

This will start the Express server on port 5000.

### Terminal 2 - React Frontend
```bash
npm start
```

This will start the React development server on port 3000.

## Step 5: Test the Integration

1. Open your browser to [http://localhost:3000](http://localhost:3000)
2. Scroll to the contact form at the bottom of the page
3. Fill out the form with test data
4. Submit the form
5. Check your Kit dashboard to see if the subscriber was added

## Optional: Configure a Specific Form

If you want to associate contact form submissions with a specific Kit form:

1. In your Kit account, create or select a form
2. Get the form ID from the form's URL or settings
3. Add it to your `.env` file:
   ```
   KIT_FORM_ID=your_form_id_here
   ```

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform:
   - `KIT_API_KEY` - Your Kit API key
   - `NODE_ENV=production`
   - `FRONTEND_URL` - Your production domain (e.g., https://yourdomain.com)
   - `KIT_FORM_ID` (optional)

2. Build the React app:
   ```bash
   npm run build
   ```

3. The Express server will automatically serve the built React app in production mode.

## Troubleshooting

### "Server configuration error"
- Make sure your `.env` file exists and contains `KIT_API_KEY`
- Restart the server after creating/modifying the `.env` file

### "CORS error"
- Make sure both servers are running (backend on 5000, frontend on 3000)
- Check that the proxy is configured in `package.json`

### "Invalid API key"
- Verify your API key is correct in the `.env` file
- Make sure you're using a V4 API key (not V3)

### Form submissions not appearing in Kit
- Check the server console for error messages
- Verify your API key has the correct permissions
- Check your Kit account's subscriber list

## Support

For Kit API documentation, visit: [https://developers.kit.com/](https://developers.kit.com/)

