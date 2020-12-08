import styled from 'styled-components/native';

const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.surface};
  color: ${(props) => props.theme.color.onSurface};
  width: 100%;
  margin: ${(props) => props.theme.smallSpacing}px;
  padding: ${(props) => props.theme.smallSpacing}px;
  text-align: center;
`;

export default Input;
