import '@/styles/globals.css';
import '@/styles/index.css';
import '@/styles/App.css';

// CONTANT
import '@/Components/Contant/About/About.css';
import '@/Components/Contant/BookNow/BookNow.css';
import '@/Components/Contant/Eventsandweddings/Events_and_weddings.css';
import '@/Components/Contant/Portraits/Portrait1.css';
import '@/Components/Contant/Realestate/Real_estate.css';

// HEADER
import '@/Components/Header/Header.css';
import '@/Components/Header/LapHeader/LapHeader.css';
import '@/Components/Header/MobHeader/MobHeader.css';

// NAVBAR
import '@/Components/Navbar/NavbarLap/NavbarLap.css';
import '@/Components/Navbar/NavbarLap/FixNavbarLap.css';
import '@/Components/Navbar/NavbarMob/NavbarMob.css';
import '@/Components/Navbar/NavbarSocialMedia/NavbarSocialMedia.css';

// FOOTER
import '@/Components/Footer/Footer.css';

// Layout Component
import Layout from '@/Components/Layout/Layout';

export default function App({ Component, pageProps }) {
  // Check if the page has a custom layout, otherwise use the default Layout
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  
  return getLayout(<Component {...pageProps} />);
}
