import React from 'react';
import './../../css/landing.css';
import PolyComp from './poly';
import { stack as Menu } from 'react-burger-menu'
import Sidebar from './../components/sidebar'
import './dots.css'

// import logo from './../../svg/poly.svg';
class Landing extends React.Component{

    
    
    renderDots(){

        return(
            <div className="dotstyle dotstyle-dotmove">
            <ul>
                <li className="current"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            
            </ul>
        </div>
        )
    }


   render = ()=>{
       return(
           <div className="landing">
               {/* <Sidebar/> */}
               {this.renderDots()}
               {/* <PolyComp/> */}
           </div>
       )
   }
}
export default Landing;