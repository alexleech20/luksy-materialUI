import React from 'react';
import './App.css';
import Home from './pages/homepage/homepage.js';
import Contact from './pages/contact/contact.js';
import About from './pages/about/about.js';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
