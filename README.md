# Aletheia Healing & Restoration Website

A beautiful, modern React website for Aletheia Healing & Restoration, featuring complete healing resources, services, and community engagement.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Multiple Pages**: Home, About, Beliefs, Services, Get Involved, and Contact
- **Testimonials Carousel**: Auto-rotating testimonials with 10-second pause
- **Kit Email Integration**: Contact form integrated with Kit (ConvertKit) API for subscriber management
- **Modern Navigation**: Sticky header with mobile menu
- **Beautiful Styling**: Clean, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Kit (ConvertKit) account with API access

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Kit email integration:
   - Follow the instructions in `SETUP.md` to configure your Kit API key
   - Create a `.env` file with your Kit credentials

3. Start the backend server:
```bash
npm run server
```

4. In a separate terminal, start the React development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
├── server.js         # Express backend server for Kit API integration
├── src/
│   ├── components/   # Reusable components (Header, Footer, TestimonialsCarousel)
│   ├── pages/        # Page components (Home, About, Beliefs, Services, etc.)
│   ├── App.js        # Main app component with routing
│   ├── App.css       # Global app styles
│   ├── index.js      # Entry point
│   └── index.css     # Global styles and CSS variables
├── SETUP.md          # Kit email integration setup guide
├── TEST_INSTRUCTIONS.md  # Quick testing guide
└── DEPLOYMENT.md     # Production deployment guide
```

## Pages

- **Home**: Hero section, mission, services preview, testimonials
- **About**: Story, values, founder information
- **Our Beliefs**: Theological foundation and core beliefs
- **Services**: Detailed programs and services offered
- **Get Involved**: Donation, partnership, volunteer opportunities
- **Contact**: Multiple contact forms and WhatsApp community link

## Customization

### Colors

Edit CSS variables in `src/index.css`:
- `--primary-color`: Main brand color (green)
- `--secondary-color`: Accent color (gold)
- `--text-dark`: Main text color
- `--bg-light`: Light background

### Content

All content is in the respective page components. Edit the JSX in each page file to update content.

## Technologies Used

### Frontend
- React 18
- React Router DOM 6
- CSS3 (Custom properties, Flexbox, Grid)
- Google Fonts (Playfair Display, Inter)

### Backend
- Node.js
- Express.js
- Kit (ConvertKit) API v4
- Axios for HTTP requests
- CORS for cross-origin requests
- dotenv for environment variables

## Kit Email Integration

The contact form is integrated with Kit (ConvertKit) to automatically add subscribers and capture form submissions.

### Quick Start

1. **Setup**: Follow `SETUP.md` to configure your Kit API key
2. **Test**: Follow `TEST_INSTRUCTIONS.md` to test locally
3. **Deploy**: Follow `DEPLOYMENT.md` for production deployment

### How It Works

1. User fills out the contact form on the Home page
2. Form data is sent to the Express backend (`/api/contact`)
3. Backend validates the data and calls the Kit API
4. Kit adds the subscriber with custom fields (subject, message)
5. User receives a success message

## Notes

- Contact form is fully integrated with Kit email management
- Update the Zeffy donation link with your actual donation URL
- Update WhatsApp community link with your actual group link
- Never commit the `.env` file to version control

## License

All rights reserved © Aletheia Healing & Restoration

