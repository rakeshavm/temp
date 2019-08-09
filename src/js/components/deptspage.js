import React from 'react';
import './../../css/landing.css';
import PolyComp from './poly';
import { stack as Menu } from 'react-burger-menu'
import Sidebar from './../components/sidebar'
import './dots.css'
import Picbubble from '../components/picbubble'
import {navigate} from '@reach/router';

class Department extends React.Component{
    constructor(props){
        super(props);
        this.state={details:[{
            name: "Nitin",
            desc: "Web dev",
            capsule: 'capsule'
        },
        {
            name: "Nitin",
            desc: "Web dev",
            capsule: 'capsule'
        },
        {
            name: "Nitin",
            desc: "Web dev",
            capsule: 'capsule'
        }]}
    }
    componentDidMount(){

            //  this.setState({})   set details of depts from json

        
    }

    
    
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
    
    renderDepts(){

        return(
            <div style={{alignItems:'center'}}>
                <h1 style={{color:'white'}}>Events</h1>
                <Picbubble details={this.state.details}/>
            </div>
        )
    }

   render = ()=>{
       return(
           <div className="landing">
               
               <Sidebar navigate={navigate}/>
               {this.renderDepts()}
               {/* <Sidebar/> */}
               
               {/* <PolyComp/> */}
           </div>
       )
   }
}
export default Department;