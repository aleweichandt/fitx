import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

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

const LoginScreen = ({locked, onLogin}: Props) => (
  <Container>
    <Button disabled={locked} onPress={onLogin} title="Login" />
  </Container>
);

export default LoginScreen;
