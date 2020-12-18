import {LanguageDetectorAsyncModule, ThirdPartyModule} from 'i18next';
import {useCallback} from 'react';
import {NativeModules, Platform} from 'react-native';

const getLocale = async () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const langDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  /** Set to true to enable async detection */
  async: true,
  init: () => {},
  /** Must call callback passing detected language */
  detect: async (callback) => {
    const locale = await getLocale();
    callback(locale);
  },
  cacheUserLanguage: () => {},
};

export default langDetector;
