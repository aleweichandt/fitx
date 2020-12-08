import styled from 'styled-components/native';

const Layout = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding ${(props) => props.theme.spacing}px;
`;

export default Layout;
