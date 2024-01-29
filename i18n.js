import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pl from './src/translation/pl/translations.json'
import en from './src/translation/en/translations.json'

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ["en","pl"],
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: en
      },
      pl: {
        translation: pl
      }
    }
  });

export default i18n;