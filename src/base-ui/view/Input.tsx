import styled from 'styled-components/native';

const Input = styled.TextInput`
  background-color:  ${(props) => props.theme.color.secondary};
  color:  ${(props) => props.theme.color.onSecondary};
  width: 100%;
  padding ${(props) => props.theme.spacing}px;
  text-align: center;
`;

export default Input;
