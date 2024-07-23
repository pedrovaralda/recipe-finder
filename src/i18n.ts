import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções
const resources = {
  en: {
    translation: {
      "search_placeholder": "Type ingredients...",
      "ingredients": "Ingredients:",
      "instructions": "Instructions:"
      // Adicione mais traduções aqui
    }
  },
  pt: {
    translation: {
      "search_placeholder": "Digite os ingredientes...",
      "ingredients": "Ingredientes:",
      "instructions": "Instruções:"
      // Adicione mais traduções aqui
    }
  }
  // Adicione mais idiomas conforme necessário
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language.slice(0, 2) || 'en', // Detecta o idioma do navegador
    fallbackLng: 'en', // Idioma padrão se o idioma detectado não estiver disponível
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
