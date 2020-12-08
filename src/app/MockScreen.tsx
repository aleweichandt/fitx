import React from 'react';
import styled from 'styled-components/native';
import UserLogoutButton from '../login/container/UserLogoutButton';

//Mock main
const Container = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Mock = () => (
  <Container>
    <UserLogoutButton />
  </Container>
);

export default Mock;
