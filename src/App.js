import React from 'react';
import logo from './logo.svg';
import {Router} from '@reach/router';
import Home from './js/container/home';
import './css/sidebar.css';
import Contact from './js/container/contact.js';
import AboutUs from './js/container/aboutus.js';

function App() {
  return (
    <div className="App">
     <Router>
       <Home path='/'/>
       <Contact path='/contact'/> 
       <AboutUs path='/about'/>
     </Router>
    </div>
  );
}

export default App;
