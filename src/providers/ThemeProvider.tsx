import React from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';

const palette = {
  white: '#ffffff',
  black: '#000000',
  overlay: 'rgba(0, 0, 0, 0.2)',
  typo: '#242424',
  primary: {
    main: '#0079bf',
    dark: '#005a8f',
    light: '#005a8f',
    contrastText: '#ffffff',
  },
  neutral: {
    main: '#bfbfbf',
    dark: '#616161',
  },
};

const fontFamily = 'Roboto';

const theme = createTheme({
  palette,
  spacing: 1,
  shape: {
    borderRadius: 1,
  },
  typography: {
    h1: {
      fontSize: 34,
      fontFamily,
    },
    h2: {
      fontSize: 20,
      fontFamily,
    },
    h3: {
      fontSize: 16,
      fontFamily,
    },
    allVariants: {
      color: palette.typo,
    },
  },
});

const ThemeProvider: React.FC<any> = ({ children }: { children: React.ReactNode }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
