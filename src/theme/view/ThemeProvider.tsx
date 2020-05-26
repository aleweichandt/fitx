import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from '../model';

interface Props {
  children?: React.ReactNode;
}

const Provider = (props: Props) => <ThemeProvider theme={theme} {...props} />;

export default Provider;
