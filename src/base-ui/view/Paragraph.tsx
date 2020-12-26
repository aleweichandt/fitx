import styled from 'styled-components/native';

const Paragraph = styled.Text`
  font-size: 15px;
  font-weight: 300;
  padding: ${(props) => props.theme.smallSpacing}px 0px;
`;

export default Paragraph;
