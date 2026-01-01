# 🏷️ Subject-Based Tagging - Quick Setup Guide

## What Changed?

Your contact form now automatically tags subscribers based on the **subject line they select**, instead of just using the Marketing/No Marketing checkbox.

## 🚀 Quick Setup (3 Steps)

### Step 1: Get Your Tag IDs

Run this command in your terminal:

```bash
npm run get-tags
```

This will:
- Connect to your Kit account
- List all your tags with their IDs
- Show you a ready-to-use code snippet

### Step 2: Copy the Tag IDs

The script will output something like:

```javascript
const subjectTagMap = {
  'General Contact': '13625661', // Website General Contact
  'Coaching & Discipleship': '13625662', // Website Coaching & Discip...
  'Heaven in Health Conferences': '13625663', // Website Heaven in Health ...
  // ... etc
};
```

### Step 3: Update Home.js

1. Open `src/pages/Home.js`
2. Find the `getTagIdForSubject` function (around line 211)
3. Replace the placeholder tag IDs with your actual tag IDs from Step 2
4. Save the file

**That's it!** Your form is now set up to tag subscribers based on their selected subject.

## 📋 Subject → Tag Mapping

When someone submits the form, they get tagged based on what they select:

| Subject Selected | Kit Tag Applied |
|-----------------|----------------|
| General Contact | Website General Contact |
| Coaching & Discipleship | Website Coaching & Discip... |
| Heaven in Health Conferences | Website Heaven in Health ... |
| Corporate Wellness & Culture Seminars | Website Corporate Wellness... |
| Prison Workshops & Inmate Equipping | Website Prison Workshops ... |
| Give | Website Give |
| Prayer Request | Website Prayer Request |
| Submit a Testimony | Website Submit a testimon... |
| Join the Mailing List | Website Join the Mailing ... |
| Volunteer | Website Volunteer |
| *(No subject selected)* | Marketing *(if subscribe checked)* |
| *(No subject selected)* | No Marketing *(if subscribe unchecked)* |

## ✅ Test It

After updating the tag IDs:

1. **Start your server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Submit a test form** with each subject option

3. **Check your Kit dashboard** to verify the correct tags are being applied

## 🔍 Troubleshooting

### Can't find a tag ID?

Make sure the tag exists in your Kit account. The tag names should match:
- `Website General Contact`
- `Website Coaching & Discip...`
- etc.

### Script won't run?

Make sure:
1. Your `.env` file exists with `KIT_API_KEY`
2. You ran `npm install` to install dependencies
3. Your Kit API key has the correct permissions

### Tags not being applied?

1. Check browser console for errors (F12 → Console tab)
2. Look for the log message: `Applying tag "[Tag Name]" (ID: [Tag ID])`
3. Verify the tag ID matches what's in your Kit account

## 📚 More Help

- **Detailed guide:** See `KIT_TAG_SETUP_GUIDE.md`
- **Kit API docs:** https://developers.kit.com/
- **Kit support:** https://help.kit.com/

---

## Files Modified

- ✅ `src/pages/Home.js` - Added subject-based tagging logic
- ✅ `get-kit-tags.js` - Helper script to fetch tag IDs
- ✅ `package.json` - Added `get-tags` command
- ✅ `KIT_TAG_SETUP_GUIDE.md` - Detailed setup instructions
- ✅ `TAG_SETUP_QUICK_GUIDE.md` - This file

Your **Marketing** (13625660) and **No Marketing** (13625657) tags are still working as fallbacks! 🎉

