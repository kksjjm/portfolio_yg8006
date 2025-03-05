# VLND Portfolio Website

A minimalist product design portfolio website inspired by VLND design aesthetics.

## Overview

This project is a portfolio website for a design studio that specializes in product design. The website features a clean, grid-based layout with hover effects for portfolio items, detailed project pages, and responsive design for all screen sizes.

## Pages

The website consists of the following pages:

1. **Main Page (index.html)** - Grid layout showcasing portfolio items with hover effects
2. **Portfolio Detail Page (portfolio-detail.html)** - Detailed view of individual projects
3. **About Page (about.html)** - Information about the design studio, team, and services
4. **Contact Page (contact.html)** - Contact form and company information

## Project Structure

```
portfolio-website/
├── index.html                  # Main page
├── about.html                  # About page
├── contact.html                # Contact page
├── portfolio-detail.html       # Portfolio detail page template
├── assets/
│   ├── css/
│   │   ├── style.css           # Main stylesheet
│   │   ├── about.css           # About page styles
│   │   ├── contact.css         # Contact page styles
│   │   └── portfolio.css       # Portfolio detail styles
│   ├── js/
│   │   ├── main.js             # Main JavaScript file
│   │   ├── portfolio.js        # Portfolio specific scripts
│   │   └── contact.js          # Contact form handling
│   └── img/
│       ├── portfolio/          # Portfolio images
│       ├── about/              # About page images
│       └── icons/              # UI icons
└── README.md                   # Project documentation
```

## Features

- Clean, minimalist design
- Responsive layout for all screen sizes
- Interactive portfolio grid with hover effects
- Detailed project view pages
- About page with team and services information
- Contact form with validation
- Navigation menu with mobile-friendly toggle

## Technical Details

The website is built using:

- HTML5 for structure
- CSS3 for styling (with CSS Grid and Flexbox for layouts)
- Vanilla JavaScript for interactivity
- Google Fonts (Montserrat) for typography

## Browser Compatibility

The website is compatible with the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Development Notes

### JavaScript Structure

- **main.js** - Handles navigation toggling, portfolio grid effects, and general UI interactions
- **portfolio.js** - Manages portfolio detail page content and interactions
- **contact.js** - Handles contact form validation and submission

### CSS Structure

- **style.css** - Contains global styles, reset, typography, and grid layout
- **about.css** - Styles specific to the About page
- **contact.css** - Styles specific to the Contact page
- **portfolio.css** - Styles specific to the Portfolio detail page

## Future Enhancements

- Add dark mode toggle
- Implement filtering options for portfolio items
- Add more animation effects for smooth transitions
- Integrate a CMS for easier content management
- Add multi-language support

## Credits

- Design inspiration: VLND design aesthetics
- Fonts: Google Fonts (Montserrat)