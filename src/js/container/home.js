import React from 'react';
import ReactPageScroller from "react-page-scroller";
import Landing from '../components/landing';
// import poly from './../../svg/poly.svg';
import Sidebar from './../components/sidebar';
import {navigate} from '@reach/router';
// import {Pager} from 'react-bootstrap'; import EventsPage from './eventspage';
import About from './../components/about';
import Animation from '../components/animation';
import PropTypes from 'prop-types'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            show: true,
            scrollup: false,
            scrolldwn: false
        };
        this._pageScroller = null;
    }

    static propTypes = {
        currentPage: PropTypes.number
    }

    goToPage = (pageNumber) => {
        this
            .reactPageScroller
            .goToPage(pageNumber);
    }

    blockScrollUp = () => {
        this.setState({scrollup: true});
        console.log('Scrolled Up')
    }
    blockScrollDown = () => {
        if (!this.scrolldwn) {
            this.setState({
                scrolldwn: !this.scrolldwn
            })
        }
        console.log('Scrolled Down')
    }
    pageOnChange = (number) => {

        // if (this.currentPage === 1) {     console.log('Reached 2 via 1?'); }
        // console.log(this.currentPage)
        console.log(this.state.currentPage)
        if (this.state.currentPage === 1) {
            this.setState({scrolldwn: true, scrollup: false})
        }
        if (this.state.currentPage === 2) {
            this.setState({scrollup: true, scrolldwn: false})
        }
        this.setState({currentPage: number});
    };

    render = () => {
        return (
            <div>
                <Sidebar navigate={navigate}/> {/* <EventsPage /> */}
                <ReactPageScroller
                    ref={c => this.reactPageScroller = c}
                    pageOnChange={this.pageOnChange}>
                    <Animation
                        scrolldwn={this.state.scrolldwn}
                        scrollup={this.state.scrollup}
                        currentPage={this.state.currentPage}/>
                    <Landing/>
                    <About/>

                </ReactPageScroller>
            </div>
        )
    }
}

export default Home;