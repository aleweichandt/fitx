import React from 'react';
import {Headline} from '../..//base-ui';
import {useTranslation} from '../../localization';
import {STR_ROUTINES_NS} from '../localization';

const RoutineListHeader = () => {
  const {t} = useTranslation(STR_ROUTINES_NS);
  return <Headline>{t('myRoutines')}</Headline>;
};

export default RoutineListHeader;
