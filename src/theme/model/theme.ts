import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      onPrimary: string;
      onSecondary: string;
    };
    spacing: number;
  }
}

const theme: DefaultTheme = {
  color: {
    primary: '#03a9f4',
    secondary: '#03f4c8',
    onPrimary: '#000000',
    onSecondary: '#000000',
  },
  spacing: 16,
};

export default theme;
