import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translation data
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      cta: "Book Consultation",
    },
    hero: {
      title: "Transform Your Business with AI Automation",
      subtitle:
        "Streamline operations, boost efficiency, and accelerate growth with cutting-edge AI automation solutions designed specifically for African SMEs.",
      cta: "Start Your Automation Journey",
      demo: "Watch Demo",
    },
    services: {
      title: "Complete AI Automation Solutions for African SMEs",
    },
    pricing: {
      title: "Simple, Transparent Pricing",
    },
    contact: {
      title: "Let's Transform Your Business Together",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      pricing: "Tarifs",
      blog: "Blog",
      contact: "Contact",
      cta: "Réserver une Consultation",
    },
    hero: {
      title: "Transformez Votre Entreprise avec l'IA",
      subtitle:
        "Rationalisez les opérations, augmentez l'efficacité et accélérez la croissance avec des solutions d'automatisation IA conçues spécifiquement pour les PME africaines.",
      cta: "Commencer Votre Parcours d'Automatisation",
      demo: "Voir la Démo",
    },
    services: {
      title: "Solutions Complètes d'Automatisation IA pour les PME Africaines",
    },
    pricing: {
      title: "Tarification Simple et Transparente",
    },
    contact: {
      title: "Transformons Votre Entreprise Ensemble",
    },
  },
};

// Available languages
const supportedLanguages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Load saved preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language");
    if (
      savedLanguage &&
      supportedLanguages.some((lang) => lang.code === savedLanguage)
    ) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage, t, languages: supportedLanguages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
