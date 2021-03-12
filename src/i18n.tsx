import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from './translations/en.json';
import common_fr from './translations/fr.json';
import common_ar from './translations/ar.json';

const resources = {
    en:{
        translation: common_en
    },
    ar:{
        translation: common_ar
    },
    fr:{
        translation: common_fr
    }
}

i18n.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;