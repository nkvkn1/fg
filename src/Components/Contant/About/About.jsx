import React from 'react';

function About() {
  return (
    <div className="about-page-container">
      
      {/* Hero Section - Emulating the top banner with an image and title */}
      <div className="about-hero-section">
        <div className="about-hero-content">
          <p className="about-hero-tagline">MORE THAN JUST PHOTOS</p>
          <h1 className="about-hero-title">A VISIONARY BEHIND THE LENS</h1>
          <p className="about-hero-description">
            I believe every picture tells a story. Let me help you tell yours.
          </p>
        </div>
        {/* The background image for this section will be handled via CSS */}
      </div>

      {/* Main Content Section - Adapting the general content flow */}
      <div className="about-main-content">
        <div className="about-intro-section">
          <div className="about-intro-text">
            <h2 className="intro-title">WHO I AM</h2>
            <p className="intro-paragraph">
              Hello! I&apos;m niki, a passionate photographer based in aligarh. My journey into photography began 5000 years ago, fueled by a deep fascination with capturing life&apos;s fleeting moments and transforming them into timeless art. From the dramatic landscapes to the intimate portraits, I find beauty in every subject and strive to bring out its unique essence.
            </p>
            <p className="intro-paragraph">
              My approach is to create a comfortable and authentic experience for every client. I believe the best photographs emerge when people feel at ease, allowing their true personalities to shine through. I specialize in e.g., wedding, portrait, commercial, landscape photography, but my true passion lies in connecting with people and places to tell compelling visual stories.
            </p>
            <p className="intro-paragraph">
              When I&apos;m not behind the camera, you can find me [mention a hobby or interest, e.g., exploring nature, reading a good book, enjoying a cup of coffee]. I&apos;m always looking for new inspiration and opportunities to grow my craft.
            </p>
          
          </div>
          <div className="about-profile-photo-container">
            {/* TODO: Add your profile photo to public/images/profile-photo.jpg */}
            <img 
              src="/images/BookNowMainImage.jpeg" 
              alt="Your Profile" 
              className="profile-photo" 
            />
            <p className="photo-caption">niki - Photographer &amp; Artist</p>
          </div>
        </div>

     
        <div className="about-philosophy-section">
          <h2 className="philosophy-title">MY PHILOSOPHY</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Authenticity</h3>
              <p>Capturing genuine emotions and real-life moments that resonate.</p>
            </div>
            <div className="philosophy-item">
              <h3>Timelessness</h3>
              <p>Creating images that will be cherished and admired for generations.</p>
            </div>
            <div className="philosophy-item">
              <h3>Connection</h3>
              <p>Building strong relationships with clients to understand their vision.</p>
            </div>
            {/* <div className="philosophy-item">
              <h3>Artistry</h3>
              <p>Infusing every shot with creativity, unique perspective, and expert craftsmanship.</p>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;