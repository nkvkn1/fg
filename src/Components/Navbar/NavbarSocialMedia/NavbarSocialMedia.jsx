import React from 'react'


const NavbarSocialMedia = () => {
  return (
    <>
      <div className='Navbar_Social_Media'>
        <div className="social_Media">
          <ul className="social_Media_unstyled">
            {/* Instagram */}
            <li className="social_Media_Item">
              <a href="https://www.instagram.com/_fotogracia_/" target="_blank" className="social_Media_Item_Link">
                <svg viewBox="0 0 512 512" className="social_Media_Insta" fill="currentColor">
                  {/* <!-- Outer Rounded Square --> */}
                  <path d="M349.33 69.33H162.67C111.5 69.33 69.33 111.5 69.33 162.67v186.66c0 51.17 42.17 93.34 93.34 93.34h186.66c51.17 0 93.34-42.17 93.34-93.34V162.67c0-51.17-42.17-93.34-93.34-93.34zm61.34 280c0 33.9-27.44 61.34-61.34 61.34H162.67c-33.9 0-61.34-27.44-61.34-61.34V162.67c0-33.9 27.44-61.34 61.34-61.34h186.66c33.9 0 61.34 27.44 61.34 61.34v186.66z" />
                  {/* <!-- Inner Circle (Lens) --> */}
                  <path d="M256 165.33c-50.06 0-90.67 40.61-90.67 90.67s40.61 90.67 90.67 90.67 90.67-40.61 90.67-90.67-40.61-90.67-90.67-90.67zm0 149.34c-32.31 0-58.67-26.36-58.67-58.67s26.36-58.67 58.67-58.67 58.67 26.36 58.67 58.67-26.36 58.67-58.67 58.67z" />
                  {/* <!-- Small Circle (Flash) --> */}
                  <circle cx="346.67" cy="165.33" r="20" />
                </svg>
              </a>
            </li>
            {/* Instagram END */}

            {/* Twitter */}
            {/* <li className="social_Media_Item_X_Media">
              <a href="#" target="_blank" className="social_Media_Item_Link">
                <svg viewBox="-40 -150 1000 1000" className="social_Media_Icon_X">
                  <path fill="currentColor" d="M904 228q-37 54-90 93v23q0 73-21 145t-64 139-103 117-144 82-181 30q-151 0-276-81 19 3 43 3 126 0 224-77-59-2-105-36t-64-89q19 2 34 2 24 0 48-6-63-13-104-62T60 396v-2q38 21 82 23-37-25-59-64t-22-86q0-49 25-91 68 83 164 133t208 55q-5-21-5-41 0-75 53-127t127-53q79 0 132 57 61-12 114-44-20 64-79 100 52-6 104-28z"></path>
                </svg>
              </a>
            </li> */}
            {/* Twitter_END */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarSocialMedia
