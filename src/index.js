import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

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
    heroText: {
      fontSize: '2.5rem',
      fontWeight: 300,
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    },
    button: {
      fontFamily: ['Lexend', 'sans-serif'].join(','),
    }
  },
  colours: {
    cream: {
      color: '#f0c090',
    }
  }
});


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
