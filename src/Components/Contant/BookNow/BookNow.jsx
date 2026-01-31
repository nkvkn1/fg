import React from 'react';
import Link from 'next/link';

// TODO: Add your actual images to public/images/ folder
// For now using the existing about-hero-background.jpg as placeholder
const heroImage = '/images/BookNowMainImage.jpeg';
const smallImage1 = '/images/Youie-and-Serafin-51.webp';
const smallImage2 = '/images/Youie-and-Serafin-25-1-768x512.webp';
const smallImage3 = '/images/IMG_4328-683x1024.webp';
const smallImage4 = '/images/IMG_4178-683x1024.webp';

const BookNow = () => {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div> 
        <div className="hero-content">
          <h1>Wedding Photography, <br /> but different</h1>
          <p className="hero-subtitle">- Since (2000)</p> 
        </div>
      </div>

      
      <div className="philosophy-section">
        <p className="subtitle">WE TELL STORIES</p>
        <h2>
          For the unfussy, heart on your sleeve, tears on your <br />
          cheek couples. The ones who love boldly, dare greatly, <br />
          and seek the good in everyday.
        </h2>
        <Link href="/book-now"><button className="Book-Now-button">Book Now</button></Link>
      </div>

      
      <div className="bio-gallery-section">
        <div className="bio-content">
          <p className="subtitle">jydgdkl ikudkgd ufkckc</p>
          <h3>Husband and wife photographers based <br />in hfxhgxfj ikfkglfjhf. We found each <br />other in a film class and fell in love over <br />a bag of popcorn.</h3>
          <p>
            We’ve spent the last decade of our lives closely connected to love. We love being the ones who get to capture the emotions from couples leaning into our faith, helping other photographers reignite their passion for photography, and doing our best to savor and celebrate life’s small and big moments.
          </p>
          <p>
            We’re honored you’re here and would love to learn about you and your story!
          </p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item large" style={{ backgroundImage: `url(${smallImage1})` }}></div>
          <div className="gallery-item" style={{ backgroundImage: `url(${smallImage2})` }}></div>
          <div className="gallery-item" style={{ backgroundImage: `url(${smallImage3})` }}></div>
          <div className="gallery-item" style={{ backgroundImage: `url(${smallImage4})` }}></div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;