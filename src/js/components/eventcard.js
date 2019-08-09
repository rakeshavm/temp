import React from 'react';
import {event} from './../../data/event';
import { TimelineLite } from 'gsap';
import hackathon from './../../images/car.jpg';
import './../../css/eventcard.css';
import { navigate } from '@reach/router/lib/history';

class EventCard extends React.Component{

    handleClick=()=>{
        console.log(event);
        navigate('/'+event.type+'/'+event.name);
    }

    render = ()=>{
        return(
            <div className="content-div">
                <div className="eventcard">
                        <img className="event-img" src={hackathon}/>
                        <div className="content-div">
                            <h3>{event.name}</h3>
                            <p>{event.desc}</p>
                            <div className="explorebtn" onClick={this.handleClick}><span>Explore More</span></div>
                        </div>
                </div>
            </div>
        )
    }
}

export default EventCard;