import i18n from 'i18next'
import  LanguageDetector  from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import EN from '../languages/translationEn.json'
import RUS from '../languages/translationRu.json'
import AM from '../languages/translationAm.json'


const resources = {
    en: {
        translation: EN
    },
    ru: {
        translation: RUS
    },

    am: {
        translation: AM
    }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ru',
    resources,
    detection: {
        caches: ['cookie', 'localStorage']
    }

})

export default i18n