📸 Fotogracia - Professional Photography Portfolio

A modern, elegant photography portfolio website built with Next.js 14 and React 18. This project showcases professional photography services including portraits, real estate photography, and events/weddings coverage.

🌟 Features

Responsive Design - Fully responsive with separate layouts for desktop (Laptop) and mobile devices

Dynamic Image Gallery - Lazy-loaded image galleries with smooth loading animations

Multiple Photography Categories:

📷 Portraits - Professional portrait photography showcase

🏠 Real Estate - Property and architectural photography

💒 Events & Weddings - Wedding and special event coverage

SEO Optimized - Each page includes proper meta tags and SEO descriptions

Modern UI/UX - Clean, professional design focused on showcasing photography work

Book Now Feature - Easy booking/contact system for potential clients

🛠️ Tech Stack

Technology

Version

Purpose

Next.js

14.2.35

React framework with SSR/SSG support

React

18.3.1

UI component library

React DOM

18.3.1

React rendering for web

ESLint

8.57.1

Code linting and quality

📁 Project Structure

fotogracia-next/
├── public/
│   └── images/              # Static images and photos
├── src/
│   ├── Components/
│   │   ├── Contant/         # Main content components
│   │   │   ├── About/       # About page content
│   │   │   ├── BookNow/     # Booking/contact section
│   │   │   ├── Eventsandweddings/  # Events gallery
│   │   │   ├── Portraits/   # Portrait gallery
│   │   │   └── Realestate/  # Real estate gallery
│   │   ├── Footer/          # Site footer
│   │   ├── Header/          # Site header
│   │   │   ├── LapHeader/   # Desktop header
│   │   │   └── MobHeader/   # Mobile header
│   │   ├── Layout/          # Page layout wrapper
│   │   └── Navbar/          # Navigation components
│   │       ├── NavbarLap/   # Desktop navigation
│   │       ├── NavbarMob/   # Mobile navigation
│   │       └── NavbarSocialMedia/  # Social links
│   ├── pages/               # Next.js pages (routing)
│   │   ├── _app.js          # App wrapper with global styles
│   │   ├── _document.js     # Custom document
│   │   ├── index.js         # Home (redirects to /portraits)
│   │   ├── about.js         # About page
│   │   ├── book-now.js      # Booking page
│   │   ├── portraits.js     # Portraits gallery
│   │   ├── real-estate.js   # Real estate gallery
│   │   ├── events-and-weddings.js  # Events gallery
│   │   └── api/             # API routes
│   └── styles/              # Global styles
        ├── globals.css      # Global CSS
        ├── App.css          # App-level styles
        └── index.css        # Index styles
├── package.json
├── next.config.mjs
├── jsconfig.json            # Path aliases configuration
└── eslint.config.mjs


🚀 Getting Started

Prerequisites

Make sure you have the following installed:

Node.js (v18.x or higher recommended)

npm, yarn, pnpm, or bun

Installation

Clone the repository

git clone <repository-url>
cd fotogracia-next


Install dependencies

npm install
# or
yarn install
# or
pnpm install


Run the development server

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Open your browser

Navigate to http://localhost:3000 to see the website.

📜 Available Scripts

Command

Description

npm run dev

Start development server with hot-reload

npm run build

Build the application for production

npm run start

Start the production server

npm run lint

Run ESLint to check code quality

📄 Pages Overview

Route

Page

Description

/

Home

Automatically redirects to /portraits

/portraits

Portraits

Gallery showcasing portrait photography

/real-estate

Real Estate

Property and architecture photos

/events-and-weddings

Events & Weddings

Wedding and event photography

/about

About

Photographer's story and philosophy

/book-now

Book Now

Contact and booking information

🎨 Component Architecture

Layout System

The project uses a Layout wrapper (Layout.jsx) that automatically wraps pages with:

Header - Contains both desktop and mobile navigation

Main Content - The page-specific content

Footer - Copyright and additional links

Pages can opt-out of the layout by defining a custom getLayout function.

Responsive Design

Desktop (LapHeader/NavbarLap) - Full navigation menu with all links visible

Mobile (MobHeader/NavbarMob) - Compact, mobile-friendly navigation

Image Galleries

Images are loaded from JSON configuration files (e.g., ImgPortrait1.json)

Lazy loading with opacity transitions for smooth UX

Grid-based responsive layouts

🖼️ Adding Your Own Images

Place your images in the public/images/ folder

Update the corresponding JSON files in the content folders:

src/Components/Contant/Portraits/ImgPortrait1.json

src/Components/Contant/Realestate/Real_estate.json

src/Components/Contant/Eventsandweddings/Events_and_weddings.json

🌐 Deployment

Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using the Vercel Platform:

Push your code to a Git repository (GitHub, GitLab, Bitbucket)

Import your project on Vercel

Vercel will automatically detect Next.js and configure the build

Other Deployment Options

Netlify - Supports Next.js deployments

AWS Amplify - Full AWS integration

Docker - Containerized deployment

Self-hosted - Run npm run build then npm run start

🔧 Configuration

Path Aliases

The project uses @/ as an alias for the src/ directory, configured in jsconfig.json:

{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}


Styles

Global styles are imported in _app.js including:

Global CSS (globals.css, App.css, index.css)

Component-specific CSS files for each major component

📞 Contact & Support

For questions about this project or to hire photography services:

Visit the Book Now page on the live website

Email: [Add your email]

Social Media: [Add your links]

📝 License

This project is private and proprietary. All rights reserved.

🙏 Acknowledgments

Built with Next.js

Styled with custom CSS

Fonts optimized with next/font

Made with ❤️ for Fotogracia Photography