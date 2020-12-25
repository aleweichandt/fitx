import styled from 'styled-components/native';

const Box = styled.View`
  border-radius: ${(props) => props.theme.shape.large.borderRadius}px;
  border-width: ${(props) => props.theme.shape.large.borderWidth}px;
  background-color: ${(props) => props.theme.color.surface};
  color: ${(props) => props.theme.color.onSurface};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.theme.spacing}px;
`;

export default Box;
