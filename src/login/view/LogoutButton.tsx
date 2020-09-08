import React from 'react';
import styled from 'styled-components/native';

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

const LogoutButton = ({locked, onLogout}: Props) => (
  <Button disabled={locked} onPress={onLogout} title="Logout" />
);

export default LogoutButton;
