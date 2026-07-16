// Vercel serverless function: /api/contact
//
// Holds the Kit (ConvertKit) and Web3Forms secrets server-side so they are
// never shipped to the browser. Configure these as Environment Variables in
// the Vercel dashboard (and in a local, gitignored .env for `vercel dev`):
//   KIT_API_KEY            - ConvertKit v3 API key
//   WEB3FORMS_ACCESS_KEY   - Web3Forms access key
// Optional overrides (sensible defaults below):
//   KIT_FORM_ID            - ConvertKit form id used for subscriptions

const KIT_FORM_ID = process.env.KIT_FORM_ID || '8861264';

// Tag IDs are not secrets, so they live here in the function.
const subjectTagMap = {
  'General Contact': '13356253', // Website General Contact
  'Coaching & Discipleship': '13356250', // Website Coaching & Discipleship
  'Heaven in Health Conferences': '13839438', // Website Heaven in Health Conference
  'Corporate Wellness & Culture Seminars': '13839442', // Website Corporate Wellness & Culture Seminars
  'Prison Workshops & Inmate Equipping': '13839444', // Website Prison Workshops & Inmate Equipping
  'Give': '13839446', // Website Give
  'Prayer Request': '13356251', // Website Prayer Request
  'Submit a Testimony': '13356259', // Website Submit a testimony
  'Join the Mailing List': '13356258', // Website Join the Mailing List
  'Volunteer': '13839450' // Website Volunteer
};

const MARKETING_TAG_ID = '13625660';
const NO_MARKETING_TAG_ID = '13625657';

function getTagsToApply(subject, subscribe) {
  const tags = [];

  if (subject && subjectTagMap[subject]) {
    tags.push({ id: subjectTagMap[subject], name: `Website ${subject}` });
  }

  if (subscribe) {
    tags.push({ id: MARKETING_TAG_ID, name: 'Marketing' });
  } else {
    tags.push({ id: NO_MARKETING_TAG_ID, name: 'No Marketing' });
  }

  return tags;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const kitApiKey = process.env.KIT_API_KEY;
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!kitApiKey) {
    console.error('KIT_API_KEY is not configured in environment variables');
    return res.status(500).json({
      success: false,
      message: 'Server configuration error. Please contact support.'
    });
  }

  // Vercel parses JSON bodies automatically, but guard against string bodies.
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { firstName, lastName, email, phone, subject, message, subscribe } = body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'First name, last name, email, and message are required fields.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  const kitFields = {
    last_name: lastName,
    subject: subject || 'No subject',
    message: message
  };

  try {
    // Step 1: If subscribing, add to Kit via the form endpoint (may send a
    // confirmation email and triggers the subscription).
    if (subscribe) {
      const subscribeRes = await fetch(
        `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: kitApiKey,
            email,
            first_name: firstName,
            fields: kitFields
          })
        }
      );

      if (!subscribeRes.ok) {
        const data = await subscribeRes.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to subscribe to Kit');
      }
    }

    // Step 2: Apply tags. This adds the contact to the Kit CRM even when they
    // did not subscribe (the "No Marketing" tag), without sending emails.
    const tagsToApply = getTagsToApply(subject, subscribe);
    for (const tag of tagsToApply) {
      const tagRes = await fetch(
        `https://api.convertkit.com/v3/tags/${tag.id}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: kitApiKey,
            email,
            first_name: firstName,
            fields: kitFields
          })
        }
      );

      if (!tagRes.ok) {
        const data = await tagRes.json().catch(() => ({}));
        throw new Error(data.message || data.error || `Failed to apply tag "${tag.name}" in Kit`);
      }
    }

    // Step 3: Send the notification email to the company via Web3Forms.
    if (web3formsKey) {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `New Contact Form Submission - ${subject || 'No Subject'}`,
          from_name: `${firstName} ${lastName}`,
          email,
          message: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not specified'}
Subscribed to newsletter: ${subscribe ? 'Yes' : 'No'}

Message:
${message}
          `.trim()
        })
      });
    } else {
      console.warn('WEB3FORMS_ACCESS_KEY not configured; skipping notification email');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Error processing contact submission:', error.message);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
};
