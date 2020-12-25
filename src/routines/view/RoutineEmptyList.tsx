import React from 'react';
import styled from 'styled-components/native';
import {Paragraph} from '../../base-ui';
import {useTranslation} from '../../localization';
import {STR_ROUTINES_NS} from '../localization';

const P = styled(Paragraph)`
  align-self: center;
`;

type Props = {};

const RoutineEmptyList = ({}: Props) => {
  const {t} = useTranslation(STR_ROUTINES_NS);
  return <P>{t('noRoutines')}</P>;
};

export default RoutineEmptyList;
