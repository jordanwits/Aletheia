# Kit Tag Setup Guide - Subject Line Mapping

## Overview

Your contact form now maps each subject line to a specific Kit tag. When someone submits the form, they'll automatically be tagged based on the subject they select.

## Step 1: Get Your Kit Tag IDs

You need to find the tag IDs for each of your Kit tags. Here's how:

### Method 1: Using the Kit UI (Easiest)

1. Log into your Kit account at [https://app.kit.com](https://app.kit.com)
2. Go to **Subscribers** → **Tags** (or click "Grow" → "Tags" in the sidebar)
3. Click on each tag name to open it
4. Look at the URL in your browser - it will look like:
   ```
   https://app.kit.com/subscribers/tags/[TAG_ID]
   ```
5. The number at the end is your tag ID

### Method 2: Using the Kit API (Advanced)

If you prefer to get all tag IDs at once:

1. Visit this URL in your browser (replace YOUR_API_KEY with your actual Kit API key):
   ```
   https://api.convertkit.com/v3/tags?api_key=YOUR_API_KEY
   ```
2. You'll see a JSON response with all your tags and their IDs

## Step 2: Update Your Code with Tag IDs

Open `src/pages/Home.js` and find the `getTagIdForSubject` function (around line 211).

Replace the placeholder tag IDs with your actual tag IDs:

```javascript
const subjectTagMap = {
  'General Contact': 'YOUR_GENERAL_CONTACT_TAG_ID',          // Replace with actual ID
  'Coaching & Discipleship': 'YOUR_COACHING_TAG_ID',         // Replace with actual ID
  'Heaven in Health Conferences': 'YOUR_HEAVEN_IN_HEALTH_TAG_ID',  // Replace with actual ID
  'Corporate Wellness & Culture Seminars': 'YOUR_CORPORATE_WELLNESS_TAG_ID',  // Replace with actual ID
  'Prison Workshops & Inmate Equipping': 'YOUR_PRISON_WORKSHOPS_TAG_ID',  // Replace with actual ID
  'Give': 'YOUR_GIVE_TAG_ID',                                // Replace with actual ID
  'Prayer Request': 'YOUR_PRAYER_REQUEST_TAG_ID',            // Replace with actual ID
  'Submit a Testimony': 'YOUR_SUBMIT_TESTIMONY_TAG_ID',      // Replace with actual ID
  'Join the Mailing List': 'YOUR_JOIN_MAILING_LIST_TAG_ID',  // Replace with actual ID
  'Volunteer': 'YOUR_VOLUNTEER_TAG_ID'                       // Replace with actual ID
};
```

### Tag Name Mapping

Based on your Kit screenshot, here's how the form subjects map to Kit tag names:

| Form Subject | Kit Tag Name |
|-------------|--------------|
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

**Note:** The "Marketing" and "No Marketing" tags (IDs already in your code: 13625660 and 13625657) will be used as fallbacks if someone submits the form without selecting a subject.

## Step 3: Example Configuration

Here's an example of what your code should look like after you add the tag IDs:

```javascript
const subjectTagMap = {
  'General Contact': '13625661',
  'Coaching & Discipleship': '13625662',
  'Heaven in Health Conferences': '13625663',
  'Corporate Wellness & Culture Seminars': '13625664',
  'Prison Workshops & Inmate Equipping': '13625665',
  'Give': '13625666',
  'Prayer Request': '13625667',
  'Submit a Testimony': '13625668',
  'Join the Mailing List': '13625669',
  'Volunteer': '13625670'
};
```

**IMPORTANT:** The numbers above (13625661-13625670) are just examples! You need to replace them with your actual tag IDs from your Kit account.

## Step 4: Test the Integration

After updating the tag IDs:

1. Save the `Home.js` file
2. Restart your development server if needed
3. Submit a test form with different subjects
4. Check your Kit dashboard to verify the correct tags are being applied

### Testing Checklist

For each subject option:

- [ ] General Contact → Gets "Website General Contact" tag
- [ ] Coaching & Discipleship → Gets "Website Coaching & Discip..." tag
- [ ] Heaven in Health Conferences → Gets "Website Heaven in Health ..." tag
- [ ] Corporate Wellness & Culture Seminars → Gets "Website Corporate Wellness..." tag
- [ ] Prison Workshops & Inmate Equipping → Gets "Website Prison Workshops ..." tag
- [ ] Give → Gets "Website Give" tag
- [ ] Prayer Request → Gets "Website Prayer Request" tag
- [ ] Submit a Testimony → Gets "Website Submit a testimon..." tag
- [ ] Join the Mailing List → Gets "Website Join the Mailing ..." tag
- [ ] Volunteer → Gets "Website Volunteer" tag

## How It Works

When someone submits your contact form:

1. **Subject selected:** The subscriber gets tagged with the subject-specific tag (e.g., "Website Give")
2. **No subject selected + Subscribe checked:** Gets "Marketing" tag
3. **No subject selected + Subscribe unchecked:** Gets "No Marketing" tag

This allows you to:
- Track which services people are interested in
- Create targeted email sequences based on their interests
- Segment your audience effectively

## Troubleshooting

### Tag not being applied

1. **Check tag ID is correct:**
   - Verify the tag ID in your Kit dashboard
   - Make sure there are no typos in the code

2. **Check console logs:**
   - Open browser Developer Tools (F12)
   - Look for the message: `Applying tag "[Tag Name]" (ID: [Tag ID])`
   - This shows which tag is being applied

3. **Verify tag exists:**
   - Make sure the tag exists in your Kit account
   - Tag IDs that don't exist will cause the API call to fail

### Need Help?

- **Kit API Documentation:** [https://developers.kit.com/](https://developers.kit.com/)
- **Kit Support:** [https://help.kit.com/](https://help.kit.com/)

## Quick Reference: Your Current Tag IDs

You already have these tags set up:

- **Marketing:** `13625660`
- **No Marketing:** `13625657`

Add the remaining 10 subject-based tags to complete the setup!

