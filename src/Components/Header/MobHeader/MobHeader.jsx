import React, { useState } from 'react'
import Link from 'next/link';

import NavbarMob from '../../Navbar/NavbarMob/NavbarMob';

const MobHeader = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (<>
    <div className='Header_Mob'>
      <div className='Header_Mob_Logo_Div'>
        <div className='Header_Mob_Logo'>
          <Link className='Header_Mob_Logo_Link' href="/">
            <img
              className='Mob_Logo_Link'
              src="/images/FotograciaLOGO.png"
              alt="FOTOGRACIA"
              width={140}
              height={40}
            />
          </Link>
        </div>

        <button className='Header_Mob_Menu' onClick={toggleMenu}>

          {/* Hamburger icon (default) */}
          {!isMenuOpen && (
            <svg className="menu-inactive" width="20" height="14" viewBox="0 0 20 14" >
              <path d="M0 1.25C0 .56.556 0 1.25 0h17.5C19.44 0 20 .555 20 1.25c0 .69-.556 1.25-1.25 1.25H1.25C.56 2.5 0 1.945 0 1.25zm0 11.5c0-.69.556-1.25 1.25-1.25h17.5c.69 0 1.25.555 1.25 1.25 0 .69-.556 1.25-1.25 1.25H1.25C.56 14 0 13.445 0 12.75zM0 7c0-.69.556-1.25 1.25-1.25h17.5c.69 0 1.25.555 1.25 1.25 0 .69-.556 1.25-1.25 1.25H1.25C.56 8.25 0 7.695 0 7z" fillRule="evenodd">
              </path>
            </svg>
          )}

          {/* Close icon */}
          {isMenuOpen && (
            <svg className="menu-active" width="16" height="16" viewBox="0 0 16 16" >
              <path d="M6.464 8l-6.15 6.15c-.41.41-.417 1.105.007 1.53.428.426 1.11.426 1.53.005L8 9.535l6.15 6.15c.41.412 1.105.418 1.53-.006.426-.428.426-1.11.005-1.53L9.535 8l6.15-6.15c.412-.41.418-1.105-.006-1.53-.428-.426-1.11-.426-1.53-.005L8 6.465 1.85.314C1.44-.097.746-.103.32.32-.105.75-.105 1.43.316 1.85L6.465 8z" fillRule="evenodd">
              </path>
            </svg>
          )}

        </button>
      </div>
      {isMenuOpen && <NavbarMob />}
      {/* <NavbarMob/> */}
    </div>
  </>
  )
}

export default MobHeader
