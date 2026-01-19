import React, { useState, useEffect } from "react";
import "./Navbar.css";
import enTranslations from "../../locales/en/Navbar.json";
import arTranslations from "../../locales/ar/Navbar.json";

import imagelogotababati from "../../assets/images/Navbar/tababati.png";

const Navbar = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translations = language === "ar" ? arTranslations : enTranslations;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
 

  const handleLanguageChange = () => {
    const newLang = language === "en" ? "ar" : "en";
    onLanguageChange(newLang);
    closeMenu();
  };

  return (
    <nav className={`navbar ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="navbar-container">
        {/* Logo/Brand on the left */}
        <div className="navbar-brand">
          <img
            src={imagelogotababati}
            alt="Tababati Logo"
            className="navbar-logo"
          />
        </div>

        {/* Navigation and language switcher on the right */}
        <div className="navbar-right-group">
          {/* Desktop Navigation Menu - Now on the right side */}
          <div className="navbar-menu desktop-menu">
            <ul className="nav-links">
              <li>
                <a href="#Hero-Section" className="nav-link">
                  {translations.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#about-clients-section-for-btn-pationts"
                  className="nav-link"
                >
                  {translations.nav.findDoctor}
                </a>
              </li>
              <li>
                <a href="#information-section" className="nav-link">
                  {translations.nav.hospitals}
                </a>
              </li>
              <li>
                <a href="#aboutus-section" className="nav-link">
                  {translations.nav.centers}
                </a>
              </li>
              <li>
                <a href="#Download-section" className="nav-link">
                  {translations.nav.forDoctors}
                </a>
              </li>
            </ul>
          </div>

          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              className="lang-btn"
              onClick={handleLanguageChange}
              aria-label={
                language === "en" ? "Switch to Arabic" : "Switch to English"
              }
            >
              {language === "en" ? "En" : "Ar"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <button className="close-menu-btn" onClick={closeMenu}>&times;</button>
          <ul className="mobile-nav-links">
            <li>
              <a href="#Hero-Section" className="nav-link" onClick={closeMenu}>
                {translations.nav.home}
              </a>
            </li>
            <li>
              <a
                href="#about-clients-section-for-btn-pationts"
                className="nav-link"
                onClick={closeMenu}
              >
                {translations.nav.findDoctor}
              </a>
            </li>
            <li>
              <a href="#information-section" className="nav-link" onClick={closeMenu}>
                {translations.nav.hospitals}
                
              </a>
            </li>
            <li>
              <a href="#aboutus-section" className="nav-link"  onClick={closeMenu}>
                {translations.nav.centers}
              </a>
            </li>
            <li>
              <a href="#Download-section" className="nav-link" onClick={closeMenu}>
                {translations.nav.forDoctors}
              </a>
            </li>
            <li className="language-mobile">
              <button className="lang-btn" onClick={handleLanguageChange}>
                {language === "en" ? "العربية" : "English"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
