import React from 'react';
import './App.css';
import Home from './pages/homepage/homepage.js';
import Contact from './pages/contact/contact.js';
import About from './pages/about/about.js'; 
import Vans from './pages/shoes/vans';
import Nike from './pages/shoes/nike';
import KidsShoes from './pages/shoes/kids-shoes';
import { Route } from 'react-router-dom';
import NavBar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import GlobalCss from './globalCSS';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lexend',
      'sans-serif'
    ].join(','),
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalCss />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/nike" component={Nike} />
        <Route exact path="/vans" component={Vans} />
        <Route exact path="/kids-shoes" component={KidsShoes} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
