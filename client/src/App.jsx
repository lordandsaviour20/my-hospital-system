import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Bookingmain from './pages/Bookings/DoctorChannelling/BookingMain';
import Home from './pages/Home Page/HomeMain';
import AboutMain from './pages/About Page/AboutMain';
import ContactUs from './pages/ContactUs/ContactUs';
import Services from './pages/Services/Services';

// Subpages of Booking
import MedicalCheckup from './pages/Bookings/MedicalCheckups/MedicalCheckup';
import VisitingPass from './pages/Bookings/VisitingPass/VisitingPass';

function ScrollToContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targetRoutes = ['/booking', '/checkup-booking', '/visiting-pass'];

    if (targetRoutes.includes(pathname)) {
      setTimeout(() => {
        const headerMain = document.getElementById('header-main');
        if (headerMain) {
          const headerHeight = headerMain.getBoundingClientRect().height;
          
          window.scrollTo({
            top: headerHeight,
            behavior: 'smooth'
          });
        }
      }, 120);
    }
  }, [pathname]);

  return null; 
}

// Captures state instantly without passive thread blocks
function ScrollBarSetting() {
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Injects state class onto root layer instantly
      document.body.classList.add('is-scrolling');
      
      clearTimeout(scrollTimeout);
      
      // Fades out and hides 1 second after stillness
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);
    };

    // Dropped { passive: true } so engine prioritizes class injection immediately
    window.addEventListener('scroll', handleScroll, { capture: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null; 
}

function App() {
  return (
    <>
      <ScrollToContent /> 
      <ScrollBarSetting />
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />

          <Route path="/booking" element={<Bookingmain />} />
          <Route path="/checkup-booking" element={<MedicalCheckup />} />
          <Route path="/visiting-pass" element={<VisitingPass />} />
        </Routes>
      </div>
    </>
  );
}

export default App;