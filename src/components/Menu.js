import React from "react";
import { NavLink } from "react-router-dom";



function Menu() {
  const activeClassName = 'menu__item-active';
  return (
    <nav className="menu">
      <NavLink exact to='/'  className="menu__item" activeClassName={activeClassName} >Главная</NavLink>
      <NavLink to="/drift"  className="menu__item" activeClassName={activeClassName}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack"  className="menu__item" activeClassName={activeClassName}>Time Attack</NavLink>
      <NavLink to="/forza" className="menu__item" activeClassName={activeClassName}>Forza Karting</NavLink>
    </nav>
  );
}

export default Menu;