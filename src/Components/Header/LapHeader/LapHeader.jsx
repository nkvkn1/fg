"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLap from '../../Navbar/NavbarLap/NavbarLap';
import FixNavbarLap from '../../Navbar/NavbarLap/FixNavbarLap';

const LapHeader = () => {
  const [scrolledPast, setScrolledPast] = useState(false);
  // This ref will watch the whole "Top Section" (Logo + Normal Navbar)
  const topSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the top section is NOT intersecting (gone from screen), show fixed navbar
        setScrolledPast(!entry.isIntersecting);
      },
      { threshold: 0 } 
    );

    if (topSectionRef.current) {
      observer.observe(topSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='Header_Navbar'>
      
      {/* WRAPPER: This <div> has no class and no styles. 
          It only exists to group the Logo and Normal Menu 
          so our code knows when they leave the screen.
      */}
      <div ref={topSectionRef}>
        
        {/* 1. The Logo Section (Restored to original position) */}
        <div className='HeaderLap'>
          <div className='HeaderLapLogo'>
            <Link href="/" className='HeaderLapLogoLink'>
              <Image
                className='HeaderLapLogoImg'
                src="/images/FotograciaLOGO.png"
                alt="FOTOGRACIA"
                width={300}
                height={110}
              />
            </Link>
          </div>
        </div>

        {/* 2. The Normal Navbar (Restored to be a sibling, not a child) */}
        <div className={`NavbarLap ${scrolledPast ? 'hide' : ''}`}>
           <NavbarLap />
        </div>

      </div>
      {/* End of Wrapper */}

      {/* 3. Fixed Navbar (Stays outside as before) */}
      <div className={`FixNavbarLap ${scrolledPast ? 'show' : ''}`}>
        <FixNavbarLap />
      </div>

    </div>
  );
};

export default LapHeader;
