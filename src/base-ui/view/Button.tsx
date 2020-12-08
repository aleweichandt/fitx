import styled from 'styled-components/native';

const Button = styled.Button`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.onPrimary};
`;

export default Button;
