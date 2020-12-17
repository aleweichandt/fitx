import {
  LocalizationLang,
  LocalizationResource,
} from 'src/localization/model/types';

export const STR_LOGIN_NS = 'STR/LOGIN';

export const strResources: Record<LocalizationLang, LocalizationResource> = {
  en: {
    login: 'Login',
    logout: 'Logout',
  },
};
