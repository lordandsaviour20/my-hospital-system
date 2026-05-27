import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
return(
    <div>
    {/* Put the Navbar inside here so background images run underneath its glass panels */}
    <nav className="navbar">
    <ul>
      <div className="navbarIcons">          
        <li><Link to="/">Home</Link></li>
      </div>

      <div className="navbarIcons">
        <li><Link to="/about">About Us</Link></li>
      </div>

      <div className="navbarIcons">
      <li className="has-dropdown">
        <span className="dropdown-trigger">Booking</span>
        <ul className="dropdown-submenu">
          <li><Link to="/booking">Doctor Channelling</Link></li>
          <li><Link to="/checkup-booking">Medical Checkup</Link></li>
          <li><Link to="/visiting-pass">Visitor Pass</Link></li>
        </ul>
      </li>
      </div>

      <div className="navbarIcons">
        <li><Link to="/contactus">Contact</Link></li>
      </div>
      
      <div className="navbarIcons">
        <li><Link to="/services">Services</Link></li>
      </div>
    </ul>
  </nav>
  </div>
    );

}; 

export default NavBar;