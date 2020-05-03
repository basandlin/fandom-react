import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

export default function NavBarItem(props) {
  return (
    <NavLink
      exact
      to={props.path}
      className="navlink"
      activeClassName="navlink-selected"
    >
      <div className="navbar__item">
        <img src={props.src} alt={props.alt} height="25" width="25" />
        <div className="navbar__item--text">{props.label}</div>
      </div>
    </NavLink>
  );
}
