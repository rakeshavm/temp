import React from 'react';
import logo from './logo.svg';
import {Router} from '@reach/router';
import Home from './js/container/home';

function App() {
  return (
    <div className="App">
     <Router>
       <Home path='/'/>
     </Router>
    </div>
  );
}

export default App;
