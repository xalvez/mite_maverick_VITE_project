import React, { useState, useEffect } from "react";
import "./About.css";

import enTranslations from "../../locales/en/About.json";
import arTranslations from "../../locales/ar/About.json";

import laptopImage from "../../assets/images/About/DatePicker.png";
import Doctors from "../../assets/images/About/Doctors.png";
import SyrianFlag from "../../assets/images/About/SyrianFlag.jpg";

const About = ({ language }) => {
  const translations = language === "ar" ? arTranslations : enTranslations;
  console.log("Current language in About:", language);  
  const isRtl = language === "ar";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy");
  const phoneNumber = "+963 958 903 045";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy"), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // ------------------------------------------ //

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section
    id="about-clients-section-for-btn-pationts"
className={`about-doctor-con-outer-container layout-stable ${isRtl ? "rtl-text" : "ltr-text"}`}
    >
      {/* first section */}
      <div className="about-calander-teal-card">
        <div className="about-section-image-container">
          <div className="image-container-about-section-box">
            {" "}
            <img
              src={laptopImage}
              alt="Laptop Mockup"
              className="laptop-img-in-about-section"
            />
          </div>

          <div className="laptop-placeholder">
            {/* This represents the laptop/mobile mockup from your image */}
            <div className="mockup-elements">
              <div className="laptop-shape"></div>
              <div className="mobile-shape"></div>
            </div>
          </div>
        </div>
        <div className="About-section-content">
          <h1 className="About-client-at-title">{translations.about.title}</h1>

          <div className="hero-description">
            <p>{translations.about.subtitle}</p>
            <p>
              {translations.about.search_prompt}

              {translations.about.features.map((features, index) => (
                <div key={index} className="feature-item">
                  {features}
                </div>
              ))}
            </p>

            <a href="#" className="doctor-hero-btn">
              {translations.about.cta_button}
            </a>
          </div>
        </div>
      </div>

      <section id="Doctor-About-For-Doctor-Center-hospital"></section>

      {/* second section */}
      <section className="medical-portal-full-bleed">
        <div className="medical-portal-card-container">
          <div className="doctor-hero-content">
            <h1 className="doctor-hero-title">
              {translations.doctor_section.title}
            </h1>
            <p className="doctor-hero-subtitle">
              {translations.doctor_section.subtitle}
            </p>
            <ul className="doctor-hero-square-bullets">
              <li>{translations.doctor_section.benefits[0]}</li>
              <li>{translations.doctor_section.benefits[1]}</li>
              <li>{translations.doctor_section.benefits[2]}</li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="doctor-start-now-btn"
              style={{ border: "none", cursor: "pointer" }}
            >
              <p className="startnow-doctor-white">
                {translations.doctor_section.cta_button}
              </p>
            </button>
          </div>
          <div className="medical-portal-img-box">
            <img src={Doctors} alt="Doctors" className="medical-portal-img" />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className="modal-body">
              <h3>{translations.modal.welcome_title}</h3>
              <p>{translations.modal.contact_instruction}</p>
              <div className="phone-container">
                <img src={SyrianFlag} alt="Flag" className="country-flag" />
                <h2 className="phone-number">{phoneNumber}</h2>
                <hr className="Doctor-about-section-divider" />
                <button className="copy-btn" onClick={handleCopy}>
                  {copyStatus}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
