# 🚀 Quick Start Guide - Kit Email Integration

Your contact form is now ready to integrate with Kit (ConvertKit)! Follow these steps to get started.

## ⚡ 3-Minute Setup

### Step 1: Get Your Kit API Key (2 minutes)

1. Go to https://app.kit.com
2. Click **Settings** → **Advanced** → **API & Webhooks**
3. Under **V4 Keys**, click **"Add a new key"**
4. Name it "Aletheia Website"
5. **Copy the API key** (you won't see it again!)

### Step 2: Create Your .env File (1 minute)

1. In your project root folder, create a new file named `.env`
2. Add this content (replace with your actual API key):

```
KIT_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

3. Save the file

### Step 3: Run the Application

Open **two terminals** in your project folder:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm start
```

**OR run both at once:**
```bash
npm run dev
```

### Step 4: Test It! (1 minute)

1. Open http://localhost:3000 in your browser
2. Scroll to the contact form at the bottom
3. Fill it out and click "Send Message"
4. You should see a green success message!
5. Check your Kit dashboard - the subscriber should be there

## ✅ Success Checklist

- [ ] Created `.env` file with Kit API key
- [ ] Ran `npm install` (if you haven't already)
- [ ] Started backend server (port 5000)
- [ ] Started frontend server (port 3000)
- [ ] Tested the form
- [ ] Verified subscriber appears in Kit dashboard

## 🎯 What Happens When Someone Submits the Form?

1. **User fills out the form** with name, email, subject, message
2. **React sends the data** to your Express backend
3. **Backend validates** and calls the Kit API
4. **Kit adds the subscriber** with custom fields
5. **User sees success message** and form clears
6. **You see the subscriber** in your Kit dashboard!

## 📚 Need More Help?

- **Detailed Setup**: See `SETUP.md`
- **Testing Guide**: See `TEST_INSTRUCTIONS.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Full Summary**: See `KIT_INTEGRATION_SUMMARY.md`

## 🔧 Common Issues

### "Server configuration error"
→ Make sure you created the `.env` file with your Kit API key

### "Unable to connect to the server"
→ Make sure the backend is running (`npm run server`)

### "Invalid API key"
→ Double-check your API key in the `.env` file

### Form works but no subscriber in Kit
→ Check the terminal where `npm run server` is running for error messages

## 🚀 Ready for Production?

When you're ready to deploy:

1. Read `DEPLOYMENT.md` for detailed instructions
2. Choose a hosting platform (Railway, Render, Vercel, etc.)
3. Set environment variables in your hosting dashboard
4. Deploy and test!

---

**Questions?** Check the other documentation files or contact Kit support at https://help.kit.com/

