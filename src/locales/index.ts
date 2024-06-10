import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJSON from './lang/en.json'
import viJSON from './lang/vi.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    vi: { ...viJSON }
  },
  lng: 'en'
})
