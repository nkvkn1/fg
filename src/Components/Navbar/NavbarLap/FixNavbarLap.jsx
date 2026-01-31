import React from 'react'
import Link from 'next/link';

const FixNavbarLap = () => {
    return (
        <>
            <div className='FixNavbarLapInner'>
                <div className='MainMenuNavbar'>
                    <ul className="Unstyled_Menu_List">
                        <li className="Link_Item_Menu_Item">
                            <Link href="/portraits" className="Item_Link">Portraits</Link>
                        </li>
                        <li className="Link_Item_Menu_Item">
                            <Link href="/real-estate" className="Item_Link">Real estate</Link>
                        </li>
                        <li className="Link_Item_Menu_Item">
                            <Link href="/events-and-weddings" className="Item_Link">Events and weddings</Link>
                        </li>
                        <li className="Link_Item_Menu_Item">
                            <Link href="/about" className="Item_Link">About</Link>
                        </li>
                        <li className="Link_Item_Menu_Item">
                            <Link href="/book-now" className="Item_Link">Book now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FixNavbarLap
