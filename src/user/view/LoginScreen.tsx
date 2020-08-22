import React from 'react';
import {Button, Text} from 'react-native';
import styled from 'styled-components/native';
import {User} from '../model';

type Props = {
  user: User | undefined;
  locked: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

const Container = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginScreen = ({user, locked, onLogin, onLogout}: Props) => (
  <Container>
    {user != null ? (
      <>
        <Text>{user}</Text>
        <Button disabled={locked} onPress={onLogout} title="Logout" />
      </>
    ) : (
      <Button disabled={locked} onPress={onLogin} title="Login" />
    )}
  </Container>
);

export default LoginScreen;
