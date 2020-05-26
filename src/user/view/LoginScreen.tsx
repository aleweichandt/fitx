import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginScreen = () => (
  <Container>
    <Text>Login</Text>
  </Container>
);

export default LoginScreen;
