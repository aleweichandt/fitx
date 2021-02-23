import React from 'react';
import {Headline} from '../..//base-ui';
import {useTranslation} from '../../localization';
import {STR_EXERCISES_NS} from '../localization';

const RoutineListHeader = () => {
  const {t} = useTranslation(STR_EXERCISES_NS);
  return <Headline>{t('exercises')}</Headline>;
};

export default RoutineListHeader;
