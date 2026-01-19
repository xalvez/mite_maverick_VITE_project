import React from "react";
import "./InformationCards.css";
import enTranslations from "../../locales/en/Information.json";
import arTranslations from "../../locales/ar/Information.json";
// Image imports
import keyImage from "../../assets/images/Information/Vector.png";
import clockImage from "../../assets/images/Information/clock.png";
import suitcaseImage from "../../assets/images/Information/bag.png";

const InformationCards = ({ language }) => {
  const translations = language === "ar" ? arTranslations : enTranslations;
  const isRtl = language === "ar";

  const cardData = [
    {
      title: translations.key_features.title,
      image: keyImage,
      items: translations.key_features.items,
      className: "card-teal"
    },
    {
      title: translations.why_us.title,
      image: clockImage,
      items: translations.why_us.items,
      className: "card-dark-center"
    },
    {
      title: translations.how_it_works.title,
      image: suitcaseImage,
      items: translations.how_it_works.items,
      className: "card-teal"
    }
  ];

  return (
    <section id="information-section" className={`info-section ${isRtl ? "rtl-mode" : "ltr-mode"}`}>
      <h2 className="info-main-title">{translations.title_section}</h2>
      
      <div className="info-cards-container">
        {cardData.map((card, index) => (
          <div key={index} className={`info-card ${card.className}`}>
            
            <div className="card-image-box">
              <img src={card.image} alt={card.title} className="side-icon-img" />
            </div>

            <div className="card-content-box">
              <h3 className="card-title">{card.title}</h3>
              <ul className="card-list">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformationCards;