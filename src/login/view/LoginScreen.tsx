import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import {useTranslation} from '../../localization';
import {STR_LOGIN_NS} from '../localization';

type Props = {
  locked: boolean;
  onLogin: () => void;
};

const Container = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginScreen = ({locked, onLogin}: Props) => {
  const {t} = useTranslation(STR_LOGIN_NS);
  return (
    <Container>
      <Button disabled={locked} onPress={onLogin} title={t('login')} />
    </Container>
  );
};

export default LoginScreen;
