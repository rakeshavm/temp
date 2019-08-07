import React from "react";
import logo from './../../svg/poly.svg'
import { bubble as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <img src="logo"></img>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
