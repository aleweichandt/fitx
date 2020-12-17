import i18n from './i18n';
import {LocalizationResource, LocalizationLang} from './types';

const addResource = (
  ns: string,
  resources: Record<LocalizationLang, LocalizationResource>,
) => {
  const keys = Object.keys(resources) as LocalizationLang[];
  keys.forEach((lng: LocalizationLang) =>
    i18n.addResourceBundle(lng, ns, resources[lng], true, true),
  );
};

export default addResource;
