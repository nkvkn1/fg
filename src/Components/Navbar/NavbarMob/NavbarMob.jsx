import React from 'react'
import Link from 'next/link';

import NavbarSocialMedia from '../NavbarSocialMedia/NavbarSocialMedia';

const NavbarMob = () => {
  return (
    <>
    <div className='MobNavbarMenu'>
      <div className='MenuNavbarMob'>
        <ul className='unstyleMenuNavbarMob'>
          <li className='MenuNavbarMobList'><Link href="/portraits" className="Item_Link">Portraits</Link></li>
          <li className='MenuNavbarMobList'><Link href="/real-estate" className="Item_Link">Real estate</Link></li>
          <li className='MenuNavbarMobList'><Link href="/events-and-weddings" className="Item_Link">Events and weddings</Link></li>
          <li className='MenuNavbarMobList'><Link href="/about" className="Item_Link">About</Link></li>
          <li className='MenuNavbarMobList'><Link href="/book-now" className="Item_Link">Book now</Link></li>
        </ul>
        <NavbarSocialMedia/>
      </div>
    </div>
    </>
  )
}

export default NavbarMob
