import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import the page switcher
import Booking from './pages/Booking';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

function App() {
  
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contactus" element={<ContactUs />} />

      <Route path="/booking" element={<Booking />} />

      <Route path="/services" element={<Services />} />

    </Routes>
  );
}
export default App;