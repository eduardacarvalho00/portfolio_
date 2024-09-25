import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@locale/en.json";
import ptTranslations from "@locale/pt.json";
import { LANGUAGE } from "@constants/languages";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations,
    },
    pt: {
      ...ptTranslations,
    },
  },
  fallbackLng: LANGUAGE.portuguese,
});
