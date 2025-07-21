import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// This will be called from a Redux middleware or a React effect
export const setI18nLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { Welcome: "Welcome", Announcements: "Announcements" } },
    ar: { translation: { Welcome: "مرحبا", Announcements: "الإعلانات" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
