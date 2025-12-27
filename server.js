require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:3000',
  credentials: true
}));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required fields.'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  try {
    const kitApiKey = process.env.KIT_API_KEY;
    const kitFormId = process.env.KIT_FORM_ID;

    if (!kitApiKey) {
      console.error('KIT_API_KEY is not configured in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error. Please contact support.'
      });
    }

    // Prepare the payload for Kit API
    const kitPayload = {
      email: email,
      first_name: name,
      fields: {
        subject: subject || 'No subject provided',
        message: message
      }
    };

    // If a form ID is provided, add it to the payload
    if (kitFormId) {
      kitPayload.form = kitFormId;
    }

    // Call Kit API to add subscriber
    const response = await axios.post(
      'https://api.kit.com/v4/subscribers',
      kitPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${kitApiKey}`
        }
      }
    );

    console.log('Kit API response:', response.data);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error submitting to Kit API:', error.response?.data || error.message);

    // Handle specific Kit API errors
    if (error.response) {
      const status = error.response.status;
      const errorData = error.response.data;

      if (status === 400) {
        return res.status(400).json({
          success: false,
          message: 'Invalid request. Please check your information and try again.'
        });
      } else if (status === 401 || status === 403) {
        console.error('Kit API authentication failed');
        return res.status(500).json({
          success: false,
          message: 'Server authentication error. Please contact support.'
        });
      } else if (status === 422) {
        // Email might already exist or validation error
        return res.status(200).json({
          success: true,
          message: 'Thank you for contacting us! We will get back to you soon.'
        });
      }
    }

    // Generic error response
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

