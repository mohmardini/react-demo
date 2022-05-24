import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar/common.json';
import en from './locales/en/common.json';

export const resources = {
  en,
  ar,
};

export const supportedLngs = ['en', 'ar'];

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  supportedLngs,
  resources,
});

export default i18n;
