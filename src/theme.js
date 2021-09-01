import { createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: ['Lexend', 'sans-serif'].join(','),
    h1: {
      fontSize: '1.75rem',
      fontWeight: 300,
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 300,
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 300,
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    },
    button: {
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    }
  },
});

export default theme;
