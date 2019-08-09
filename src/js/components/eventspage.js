import React,{Component} from 'react';

import Sidebar from './../components/sidebar'
import {navigate} from '@reach/router';
import EventCard from './eventcard';

class EventsPage extends Component{

    render(){
        return(
            <div style={{flexWrap:'wrap'}}> 
            <h1>Fuck u</h1>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            </div> 
        )
    }
}


export default EventsPage;