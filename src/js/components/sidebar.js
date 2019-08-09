import React from "react";
// import logo from './../../svg/poly.svg'
import { stack as Menu } from "react-burger-menu";

class Sidebar extends React.Component {

  handleNavigate = (event)=>{
    console.log(event.target.id)
    this.props.navigate('/'+event.target.id)
  }

  render(){
  let list = [
    <div className="menu-item" id={""} onClick={this.handleNavigate}>
        Home
      </div>,
      <div className="menu-item" id={"about"} onClick={this.handleNavigate}>
        About
      </div>,
      <div className="menu-item" id={"contact"} onClick={this.handleNavigate}>
        Contact Us
      </div>,
      <div className="menu-item" id={"eventpage/hackathon"} onClick={this.handleNavigate}>
        Event
      </div>
  ]
  return (
    <Menu right='true'>
      {list}
    </Menu>
  );
  }
};

export default Sidebar;
