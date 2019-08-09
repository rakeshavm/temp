import React,{Component} from 'react';

import {navigate} from '@reach/router';
import EventCard from '../components/eventcard';
import Sidebar from './../components/sidebar';

class EventsPage extends Component{

    render(){
        return(
            <div style={{backgroundColor:"black",color:"white"}}>
                <Sidebar navigate={navigate}/>
                <div className="event-center">
                    <h1>Event</h1>
                </div>
                <div className="flex-container"> 
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                </div> 
            </div>
        )
    }
}


export default EventsPage;