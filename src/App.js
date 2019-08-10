import React from 'react';
// import logo from './logo.svg';
import {Router} from '@reach/router';
import Home from './js/container/home';
import './css/sidebar.css';
import Contact from './js/container/contact.js';
import Test from './js/components/picbubble';
import EventsPage from './js/container/eventspage';
import Departments from './js/components/deptspage';
// import Animation from './js/components/animation';

function App() {
    return (
        <div className="App">
            <Router>
                <Home path='/'/>
                <Contact path='/contact'/>
                <Test path='/test'/>
                <EventsPage path='/eventpage/:id'/>
                <Departments path='/department/:id'/>
                {/* <Animation/> */}
            </Router>
        </div>
    );
}

export default App;
