import React from 'react';
import ReactPageScroller from "react-page-scroller";
import Landing from '../components/landing';
// import poly from './../../svg/poly.svg';
import Sidebar from './../components/sidebar';
import {navigate} from '@reach/router';
// import {Pager} from 'react-bootstrap';
// import EventsPage from './eventspage';
import About from './../components/about';
import Animation from '../components/animation';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {currentPage: 1,show:true};
        this._pageScroller = null;
    }


    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
      }
    

    render = ()=>{
        return(
            <div>
                <Sidebar navigate={navigate}/>
                {/* <EventsPage /> */}
                <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <Animation/>
                    <Landing/>
                    <About/>
                    
                 </ReactPageScroller> 
            </div>
        )
    }
}


export default Home;