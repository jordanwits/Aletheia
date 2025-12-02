# Aletheia Healing & Restoration Website

A beautiful, modern React website for Aletheia Healing & Restoration, featuring complete healing resources, services, and community engagement.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Multiple Pages**: Home, About, Beliefs, Services, Get Involved, and Contact
- **Testimonials Carousel**: Auto-rotating testimonials with 10-second pause
- **Contact Forms**: Speaking inquiries, prayer requests, general contact, and mailing list
- **Modern Navigation**: Sticky header with mobile menu
- **Beautiful Styling**: Clean, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/       # Reusable components (Header, Footer, TestimonialsCarousel)
├── pages/           # Page components (Home, About, Beliefs, Services, etc.)
├── App.js           # Main app component with routing
├── App.css          # Global app styles
├── index.js         # Entry point
└── index.css        # Global styles and CSS variables
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

- React 18
- React Router DOM 6
- CSS3 (Custom properties, Flexbox, Grid)
- Google Fonts (Playfair Display, Inter)

## Notes

- Forms currently show alerts on submit. Connect to your backend API for actual form handling.
- Update the Zeffy donation link with your actual donation URL.
- Update WhatsApp community link with your actual group link.
- Add your actual video URL to the hero section when ready.

## License

All rights reserved © Aletheia Healing & Restoration

