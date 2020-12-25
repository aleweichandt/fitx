import {DefaultTheme} from 'styled-components';

export type Shape = {
  borderRadius: number;
  borderWidth: number;
  elevation: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      onPrimary: string;
      onSecondary: string;
      onBackground: string;
      onSurface: string;
    };
    shape: {
      small: Shape;
      large: Shape;
    };
    spacing: number;
    smallSpacing: number;
  }
}

const theme: DefaultTheme = {
  color: {
    primary: '#03a9f4',
    secondary: '#03f4c8',
    background: '#f5f5f5',
    surface: '#dfdfdf',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: '#1d1d1d',
    onSurface: '#3a3a3a',
  },
  shape: {
    small: {
      borderRadius: 5,
      borderWidth: 0.5,
      elevation: 3,
    },
    large: {
      borderRadius: 25,
      borderWidth: 2,
      elevation: 2,
    },
  },
  spacing: 16,
  smallSpacing: 8,
};

export default theme;
