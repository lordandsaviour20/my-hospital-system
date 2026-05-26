import React from 'react';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="med-master-footer">
      {/* Decorative top wave/glow accent bar */}
      <div className="footer-top-accent"></div>

      <div className="footer-bounded-container">
        
        {/* ==========================================
           1️⃣ TOP ROW: BRAND, EMERGENCY HOTLINE & CONTACT INFO
           ========================================== */}
        <div className="footer-top-grid">
          {/* Brand Identity Column */}
          <div className="footer-brand-column">
            <div className="footer-logo-wrapper">
              <span className="logo-text-main">SJGH</span>
              <span className="logo-text-sub">SRI JAYAWARDHANAPURA GENERAL HOSPITAL</span>
            </div>
            <p className="brand-mission-statement">
              Dedicated to delivering premier healthcare through clinical excellence, advanced medical technologies, and compassionate patient care. Operating as a leading medical institution serving our community with integrity and trust.
            </p>
            <div className="footer-social-wrapper">
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram"><FaInstagram /></a>
              <a href="#twitter" className="social-icon-btn" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="#linkedin" className="social-icon-btn" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#youtube" className="social-icon-btn" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Support / Contact Column */}
          <div className="footer-contact-column">
            <h3 className="footer-column-title">Quick Contacts</h3>
            <p className="contact-assistance-text">If you have any questions or need immediate help, feel free to contact us for medical assistance.</p>
            
            <div className="emergency-hotline-card">
              <div className="hotline-pulse-container">
                <span className="live-pulse-dot"></span>
                <span className="hotline-label">24/7 EMERGENCY HOTLINE</span>
              </div>
              <a href="tel:+94112778610" className="hotline-number-anchor">+94 11 277 8610</a>
            </div>

            <ul className="direct-contact-list">
              <li>
                <FaPhoneAlt className="contact-inline-icon" />
                <a href="tel:+94112778610" className="contact-link">+94 11 277 8610</a>
              </li>
              <li>
                <FaEnvelope className="contact-inline-icon" />
                <a href="mailto:info@sjgh.lk" className="contact-link">info@sjgh.lk</a>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-inline-icon" />
                <span className="contact-text-span">Thalapathpitiya, Nugegoda, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider-line" />

        {/* ==========================================
           2️⃣ MIDDLE ROW: INTERACTIVE MEDICAL NETWORK & EXCELLENCE GRIDS
           ========================================== */}
        <div className="footer-middle-grid">
          {/* Hospital Hospital Services Column */}
          <div className="links-navigation-block">
            <h4 className="links-grid-title">Patient Resources</h4>
            <div className="sub-links-dual-flex">
              <ul>
                <li><a href="#opd-services">OPD Services</a></li>
                <li><a href="#ward-information">Ward Information</a></li>
                <li><a href="#consultant-directory">Consultant Directory</a></li>
              </ul>
              <ul>
                <li><a href="#laboratory-services">Laboratory Services</a></li>
                <li><a href="#radiology-imaging">Radiology & Imaging</a></li>
                <li><a href="#pharmacy">Hospital Pharmacy</a></li>
              </ul>
            </div>
          </div>

          {/* Centres of Excellence Column */}
          <div className="links-navigation-block">
            <h4 className="links-grid-title">Centres of Excellence</h4>
            <div className="sub-links-dual-flex">
              <ul>
                <li><a href="#accident-emergency" className="highlighted-link-item">Accident & Emergency</a></li>
                <li><a href="#cardiology-unit">Cardiology Unit</a></li>
                <li><a href="#nephrology-dialysis">Nephrology & Dialysis</a></li>
                <li><a href="#intensive-care">Intensive Care Units (ICU)</a></li>
              </ul>
              <ul>
                <li><a href="#neurology-clinic">Neurology Clinic</a></li>
                <li><a href="#surgical-departments">Surgical Specialties</a></li>
                <li><a href="#paediatrics">Paediatric Care</a></li>
                <li><a href="#maternity-services">Maternity & Women's Health</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
           3️⃣ BOTTOM ROW: LEGAL CREDITS & COMPLIANCE
           ========================================== */}
        <div className="footer-bottom-bar">
          <p className="copyright-notice">
            &copy; {currentYear} <span className="brand-bold">SRI JAYAWARDHANAPURA GENERAL HOSPITAL</span>. All Rights Reserved.
          </p>
          <div className="legal-links-dock">
            <a href="#privacy-policy" className="legal-link">Privacy Policy</a>
            <span className="legal-dot-separator">•</span>
            <a href="#terms" className="legal-link">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;