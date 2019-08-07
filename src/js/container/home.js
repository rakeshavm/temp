import React from 'react';
import ReactPageScroller from "react-page-scroller";
import Landing from '../components/landing';
// import poly from './../../svg/poly.svg';

class Home extends React.Component{
    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
      }

    render = ()=>{
        return(
            <div>
                <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <Landing/>
                    <Landing/>
                </ReactPageScroller>
            </div>
        )
    }
}
export default Home;