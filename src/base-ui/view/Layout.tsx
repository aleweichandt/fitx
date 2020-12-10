import styled from 'styled-components/native';

const Layout = styled.View`
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.onBackground};
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.theme.spacing}px;
`;

export default Layout;
