import React from 'react';
import styled from 'styled-components/native';
import {useTranslation} from '../../localization';
import {STR_LOGIN_NS} from '../localization';

type Props = {
  locked: boolean;
  onLogout: () => void;
};

const Button = styled.Button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.onSecondary};
  align-items: center;
  justify-content: center;
`;

const LogoutButton = ({locked, onLogout}: Props) => {
  const {t} = useTranslation(STR_LOGIN_NS);
  return <Button disabled={locked} onPress={onLogout} title={t('logout')} />;
};

export default LogoutButton;
