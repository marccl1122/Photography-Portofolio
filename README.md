# Photography Portfolio Website

## Project Overview
This project is a personal **Photography Portfolio** built using **React**. It showcases photography work with a minimalistic, Apple-inspired design. The site is fully responsive, supports **dark/light mode**, and includes a custom "Hire Me" button styled as a camera, linking directly to WhatsApp for easy client communication.

## Features
- **Responsive Design:** Fully responsive for desktops, tablets, and smartphones.
- **Dark/Light Mode Toggle:** Users can switch between dark and light modes using a toggle button.
- **Camera-style 'Hire Me' Button:** A custom button that resembles a camera icon, linking directly to WhatsApp.
- **Smooth Hover Animations:** Added to buttons and project cards to improve user experience.
- **Optimized for Performance:** Lightweight and fast.

## Technologies Used
- **React**: A JavaScript library for building the user interface.
- **HTML5**: Structure of the webpage.
- **CSS3**: Styling with a minimalistic, Apple-inspired design, including flexbox and CSS transitions.
- **JavaScript (ES6)**: Used for functionality, including the dark/light mode toggle and button interactions.
- **WhatsApp API**: Integrated with a custom button to allow users to directly message the photographer.
- **React Hooks (useState, useEffect)**: Managing the dark/light mode theme state.
- **Mobile-First Design**: Ensures optimal experience on mobile devices with adaptive layouts for larger screens.

## Project Structure

photography-portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Main CSS file for styling
│   ├── hero.jpg            # Image for the hero section
├── src/
│   ├── components/
│   │   ├── About.js        # About section
│   │   ├── Contact.js      # Contact form
│   │   ├── Footer.js       # Footer section
│   │   ├── Hero.js         # Hero section with image and "Hire Me" button
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── ProjectList.js  # List of projects with images and descriptions
│   ├── app.js              # Main App component combining all sections
│   ├── index.js            # ReactDOM render file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation


## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
cd photography-portfolio
npm install
npm start
## Future Improvements
Adding more projects dynamically from a backend or content management system.
Integration of Google Analytics for tracking user interactions.
Enhanced SEO optimization for better visibility.
