# Deployment Guide

This guide covers testing the Kit email integration locally and deploying to production.

## Local Testing

### 1. Test Backend API with cURL or Postman

First, make sure your backend server is running:

```bash
npm run server
```

#### Using cURL (Command Line)

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "General Contact",
    "message": "This is a test message"
  }'
```

#### Using Postman

1. Create a new POST request to `http://localhost:5000/api/contact`
2. Set Headers:
   - `Content-Type: application/json`
3. Set Body (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "General Contact",
  "message": "This is a test message"
}
```
4. Send the request
5. Expected response (200 OK):
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

### 2. Test via React Form

1. Start both servers:
   - Terminal 1: `npm run server` (backend on port 5000)
   - Terminal 2: `npm start` (frontend on port 3000)

2. Open browser to `http://localhost:3000`

3. Scroll to the contact form at the bottom

4. Fill out the form:
   - Name: Your test name
   - Email: A valid email address
   - Subject: Select any option
   - Message: Enter a test message

5. Click "Send Message"

6. Verify:
   - Button shows "Sending..." while processing
   - Success message appears after submission
   - Form fields are cleared
   - Check your Kit dashboard for the new subscriber

### 3. Verify in Kit Dashboard

1. Log into your Kit account at [https://app.kit.com](https://app.kit.com)
2. Navigate to **Subscribers** or **Audience**
3. Look for the test email you submitted
4. Verify the custom fields contain the subject and message

## Production Deployment

### Option 1: Deploy to a VPS or Cloud Server (Recommended)

This option deploys both the React frontend and Express backend as a single application.

#### Services you can use:
- Railway (https://railway.app)
- Render (https://render.com)
- DigitalOcean App Platform
- Heroku (with paid plan)
- AWS EC2 / Elastic Beanstalk
- Google Cloud Run
- Azure App Service

#### Deployment Steps:

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Set environment variables in your hosting platform:**
   - `KIT_API_KEY` - Your Kit API key (required)
   - `NODE_ENV=production` (required)
   - `PORT` - Usually auto-set by the platform
   - `FRONTEND_URL` - Your production domain (e.g., `https://yourdomain.com`)
   - `KIT_FORM_ID` - Optional, if using a specific form

3. **Configure the start command:**
   ```bash
   node server.js
   ```

4. **The server will automatically serve the built React app** from the `build/` folder in production mode.

#### Example: Railway Deployment

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login and initialize:
   ```bash
   railway login
   railway init
   ```

3. Set environment variables:
   ```bash
   railway variables set KIT_API_KEY=your_actual_key_here
   railway variables set NODE_ENV=production
   railway variables set FRONTEND_URL=https://your-app.railway.app
   ```

4. Deploy:
   ```bash
   railway up
   ```

#### Example: Render Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node server.js`
4. Add environment variables in the Render dashboard:
   - `KIT_API_KEY`
   - `NODE_ENV=production`
   - `FRONTEND_URL`
5. Deploy

### Option 2: Deploy Frontend and Backend Separately

If you prefer to deploy the frontend and backend separately (e.g., frontend on Netlify/Vercel, backend on Railway):

#### Frontend (Netlify/Vercel):

1. **Update the fetch URL in `src/pages/Home.js`:**
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || '/api/contact';
   
   const response = await fetch(API_URL, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(contactForm),
   });
   ```

2. **Set environment variable:**
   - `REACT_APP_API_URL=https://your-backend-url.com/api/contact`

3. **Deploy to Netlify:**
   ```bash
   npm run build
   netlify deploy --prod --dir=build
   ```

4. **Or deploy to Vercel:**
   ```bash
   npm run build
   vercel --prod
   ```

#### Backend (Railway/Render/Heroku):

1. Create a separate repository or use the same repo
2. Deploy only the backend files:
   - `server.js`
   - `package.json`
   - `.env` (configure in hosting dashboard instead)
3. Set environment variables as described above
4. Update CORS settings in `server.js` to allow your frontend domain

### Option 3: Serverless Functions

If you want to use serverless functions (Netlify Functions or Vercel Functions):

#### Netlify Functions:

1. Create `netlify/functions/contact.js`:
   ```javascript
   const axios = require('axios');

   exports.handler = async (event) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }

     const { name, email, subject, message } = JSON.parse(event.body);

     try {
       const response = await axios.post(
         'https://api.kit.com/v4/subscribers',
         {
           api_key: process.env.KIT_API_KEY,
           email: email,
           first_name: name,
           fields: { subject, message }
         }
       );

       return {
         statusCode: 200,
         body: JSON.stringify({
           success: true,
           message: 'Thank you for contacting us!'
         })
       };
     } catch (error) {
       return {
         statusCode: 500,
         body: JSON.stringify({
           success: false,
           message: 'An error occurred'
         })
       };
     }
   };
   ```

2. Update the fetch URL in `Home.js` to `/.netlify/functions/contact`

3. Set `KIT_API_KEY` in Netlify environment variables

## Post-Deployment Checklist

- [ ] Backend server is running and accessible
- [ ] Frontend is deployed and loading correctly
- [ ] Environment variables are set correctly
- [ ] Test the contact form with a real submission
- [ ] Verify the submission appears in your Kit dashboard
- [ ] Check server logs for any errors
- [ ] Test error handling (try submitting with invalid data)
- [ ] Verify CORS is configured correctly
- [ ] Ensure `.env` file is NOT committed to version control
- [ ] Set up monitoring/logging (optional but recommended)

## Troubleshooting Production Issues

### Form submissions not working

1. **Check browser console for errors:**
   - Open DevTools (F12) → Console tab
   - Look for CORS errors, network errors, or JavaScript errors

2. **Check server logs:**
   - Most hosting platforms provide log viewing
   - Look for error messages from the Express server

3. **Verify environment variables:**
   - Ensure `KIT_API_KEY` is set correctly
   - Check for typos or extra spaces

4. **Test the API endpoint directly:**
   - Use cURL or Postman to test your production API endpoint
   - Example: `curl -X POST https://your-domain.com/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Test"}'`

### CORS errors

If you see CORS errors in the browser console:

1. **Update `server.js` CORS configuration:**
   ```javascript
   app.use(cors({
     origin: ['https://your-frontend-domain.com', 'https://www.your-frontend-domain.com'],
     credentials: true
   }));
   ```

2. **Restart the backend server** after making changes

### Kit API errors

If submissions fail with Kit API errors:

1. **Verify your API key is valid:**
   - Log into Kit and regenerate if necessary
   - Make sure you're using a V4 API key

2. **Check Kit API status:**
   - Visit [https://status.kit.com](https://status.kit.com)

3. **Review Kit API limits:**
   - Ensure you haven't exceeded rate limits

## Monitoring and Maintenance

### Recommended monitoring:

1. **Error tracking:** Set up Sentry or similar service
2. **Uptime monitoring:** Use UptimeRobot or Pingdom
3. **Log aggregation:** Use LogDNA, Papertrail, or your hosting platform's logs

### Regular maintenance:

1. **Update dependencies:** Run `npm audit` and `npm update` regularly
2. **Monitor Kit API changes:** Subscribe to Kit's developer newsletter
3. **Test the form monthly:** Ensure it's still working correctly
4. **Review submissions:** Check your Kit dashboard regularly

## Security Best Practices

- ✅ Never commit `.env` file to version control
- ✅ Use environment variables for all secrets
- ✅ Keep dependencies updated
- ✅ Use HTTPS in production
- ✅ Implement rate limiting (optional but recommended)
- ✅ Validate all inputs on the backend
- ✅ Monitor for suspicious activity

## Support

- **Kit API Documentation:** https://developers.kit.com/
- **Kit Support:** https://help.kit.com/
- **Express.js Documentation:** https://expressjs.com/
- **React Documentation:** https://react.dev/

