import {
  LocalizationLang,
  LocalizationResource,
} from 'src/localization/model/types';

export const STR_LOGIN_NS = 'STR/LOGIN';

export const strings: Record<LocalizationLang, LocalizationResource> = {
  en: {
    login: 'Login',
    logout: 'Logout',
  },
  es: {
    login: 'Conectarme',
    logout: 'Desconectarme',
  },
};
