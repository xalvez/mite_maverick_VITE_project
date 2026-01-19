import React, { useMemo } from "react";
import "./Download.css";
import enTranslations from "../../locales/en/Download.json";
import arTranslations from "../../locales/ar/Download.json";

// Import your two images here
import apple from "../../assets/images/Download/apple.png";
import android from "../../assets/images/Download/android.png";
import windows from "../../assets/images/Download/windows.png";

// Social Icon Imports
import Facebook from "../../assets/images/Download/iconoir_facebook.png";
import Instagram from "../../assets/images/Download/line-md_instagram.png";
import Whatsapp from "../../assets/images/Download/mdi_whatsapp.png";
import Linkedin from "../../assets/images/Download/basil_linkedin-outline.png";
import Telegram from "../../assets/images/Download/Telegram.png";

const AboutUs = ({ language }) => {
  const translations = language === "ar" ? arTranslations : enTranslations;
 

  // Memoize social links
  const socialLinks = useMemo(
    () => [
      { platform: "Facebook", img: Facebook, url: "#" },
      { platform: "Instagram", img: Instagram, url: "#" },
      { platform: "WhatsApp", img: Whatsapp, url: "#" },
      { platform: "LinkedIn", img: Linkedin, url: "#" },
      { platform: "Telegram", img: Telegram, url: "#" },
    ],
    []
  );

  return (
    <section
    id="Download-section"
      className={`about-us-section ${language === "ar" ? "rtl" : "ltr"}`}
    >
      <h2 className="about-us-title"> {translations.Download_title} </h2>

      {/* New Container for the two images under the title */}
      <div className="Download-images-row">
        <img src={apple} alt="About 1" className="about-mid-img" />
        <img src={android} alt="About 2" className="about-mid-img" />
        <img src={windows} alt="About 2" className="about-mid-img" />
      </div>
      <hr className="section-divider" />

      <p className="copy-right-Download">
        {" "}
        {translations.Copy_right}{" "}
      </p>

      <div className="zenith-social-grid">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="zenith-social-item"
            aria-label={social.platform}
          >
            <img
              src={social.img}
              alt={social.platform}
              className="zenith-icon-asset"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
