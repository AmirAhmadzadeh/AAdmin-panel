import i18n from 'i18next';
import { pt, en } from './locals';
import LanguageDetector from 'i18next-browser-languagedetector';


const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: true,

  // lng: 'en',

  resources: {
    pt: {
      common: pt['pt-BR'],
    },
    en: {
      common: en.en,
    },
  },

  fallbackLng: 'en',

  ns: ['common'],

  defaultNS: 'common',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n
  .use(LanguageDetector)
  .init(options)
  .changeLanguage('en', (err, t) => {
    if (err) return console.log('something went wrong with i18n ');
  });

export default i18n;   