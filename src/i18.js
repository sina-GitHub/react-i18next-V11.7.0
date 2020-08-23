import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "hello world": "Hello World",
        },
      },
      fa: {
        translation: {
          "hello world": "سلام دنیا",
        },
      },
    },
    // lng: "fa",
    // defines language, but we want "LanguageDetector" to work
    fallbackLng: "fa",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
