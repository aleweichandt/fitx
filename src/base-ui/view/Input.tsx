import styled from 'styled-components/native';

const Input = styled.TextInput`
  border-radius: ${(props) => props.theme.shape.small.borderRadius}px;
  border-width: ${(props) => props.theme.shape.small.borderWidth}px;
  border-color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.surface};
  color: ${(props) => props.theme.color.onSurface};
  width: 100%;
  margin: ${(props) => props.theme.smallSpacing}px;
  padding: ${(props) => props.theme.smallSpacing}px;
  text-align: center;
`;

export default Input;
