import locales from "@/assets/locales";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use({
    type: "languageDetector",
    init: () => {},
    detect: () => {},
  })
  .use(initReactI18next)
  .init({
    fallbackLng: "ko",
    resources: locales,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
