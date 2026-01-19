import React from "react";
import "./HeroSection.css";
import enTranslations from "../../locales/en/hero.json";
import arTranslations from "../../locales/ar/hero.json";
import laptopImage from "../../assets/images/Hero/laptop-image.png";

const HeroSection = ({ language }) => {
  const isAr = language === "ar";
  const translations = isAr ? arTranslations : enTranslations;

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <section
      id="Hero-Section"
      className={`hero-outer-container ${isAr ? "rtl" : "ltr"}`}
      /* Ensures the browser handles text direction logic for Arabic */
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="hero-teal-card">
        <div className="hero-content">
          <h1 className="hero-title">{translations.hero.title}</h1>

          <div className="hero-description">
            <p>{translations.hero.subtitle}</p>
            <p>{translations.hero.orJoin}</p>
          </div>

          <div className="hero-action-buttons">
            <button 
              onClick={() => handleScrollToSection("about-clients-section-for-btn-pationts")} 
              className="btn-client"
            >
              {translations.hero.forClient}
            </button>
            <button 
              className="btn-doctor" 
              onClick={() => handleScrollToSection("Doctor-About-For-Doctor-Center-hospital")}
            >
              {translations.hero.forDoctor}
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={laptopImage} alt="Laptop Mockup" className="laptop-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;