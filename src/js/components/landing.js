import React from 'react';
import './../../css/landing.css';
import PolyComp from './poly';
import { slide as Menu } from 'react-burger-menu'
import Sidebar from './../components/sidebar'

// import logo from './../../svg/poly.svg';
class Landing extends React.Component{
   render = ()=>{
       return(
           <div className="landing">
               <Sidebar/>
               <PolyComp/>
           </div>
       )
   }
}
export default Landing;