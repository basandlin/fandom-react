import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBarItem(props) {
  return (
    <div>
      <NavLink to={props.path}>
        <img src={props.src} alt={props.alt} />
      </NavLink>
    </div>
  );
}
