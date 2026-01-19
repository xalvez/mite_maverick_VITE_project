import React from "react";
import "./AboutUs.css";
import enTranslations from "../../locales/en/AboutUs.json";
import arTranslations from "../../locales/ar/AboutUs.json";
// Import your two images here
import imageLeft from "../../assets/images/AboutUs/apostroph.png";
import imageRight from "../../assets/images/Asset 2@4x.png";

const AboutUs = ({ language }) => {
  const translations = language === "ar" ? arTranslations : enTranslations;
  const about = translations.aboutUs || {};

  return (
    <section
    id="aboutus-section"
      className={`about-us-section ${
        language === "ltr" ? "ltr-direction" : ""
      }`}
    >
      <h2 className="about-us-title">{translations.title}</h2>

      {/* New Container for the two images under the title */}
      <div className="about-us-images-row">
        <img src={imageLeft} alt="About 1" className="about-mid-img1" />
        <img src={imageRight} alt="About 2" className="about-mid-img2" />
      </div>

      <div className="about-us-content">
        <p className="about-us-text">
          {translations.about_us_section.paragraph}
        </p>
        <button className="get-to-know-btn">
          {translations.get_know_us_btn}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
