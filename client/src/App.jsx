import { Routes, Route } from 'react-router-dom'; // Import the page switcher
import Bookingmain from './pages/Bookings/DoctorChannelling/bookingMain';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

//Subpages of Booking
import MedicalCheckup from './pages/Bookings/MedicalCheckups/MedicalCheckup';
import VisitingPass from './pages/Bookings/VisitingPass/VisitingPass';

function App() {
  
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />

      <Route path="/booking" element={<Bookingmain />} />
      <Route path="/checkup-booking" element={<MedicalCheckup />} />
      <Route path="/visiting-pass" element={<VisitingPass />} />

    </Routes>
  );
}
export default App;