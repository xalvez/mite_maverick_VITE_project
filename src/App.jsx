import React, { useState, useEffect } from "react";
import "./styles/global.css";
import Navbar from "../src/components/navbar/Navbar";
import HeroSection from "../src/components/Hero/HeroSection";
import About from "../src/components/About/About";
import Information from "./components/Information/InformationCards";
import AboutUs from "./components/AboutUs/AboutUs";
import Download from "./components/Download/Download";

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;

    // Add appropriate font based on language
    if (language === "ar") {
      document.body.style.fontFamily = "var(--font-family-ar)";
    } else {
      document.body.style.fontFamily = "var(--font-family-en)";
    }
  }, [language]);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <div className={`app ${language === "ar" ? "rtl" : "ltr"}`}>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <About language={language} />
      <Information language={language} />
      <AboutUs language={language} />
      <Download language={language} />
    </div>
  );
}

export default App;
