import React from 'react';
import './App.css';
import Home from './pages/homepage/homepage.js';
import Contact from './pages/contact/contact.js';
import About from './pages/about/about.js'; 
import Vans from './pages/shoes/vans';
import Nike from './pages/shoes/nike';
import KidsShoes from './pages/shoes/kids-shoes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import GlobalCss from './globalCSS';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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
  colours: {
    cream: {
      color: '#f0c090',
    }
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalCss />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/nike" component={Nike} />
            <Route exact path="/vans" component={Vans} />
            <Route exact path="/kids-shoes" component={KidsShoes} />
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
