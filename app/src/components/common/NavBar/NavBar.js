import React from "react";
import { NavBarItem } from "../../index";
import { NAV_ITEMS } from "../../../utils/constants";

import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      {NAV_ITEMS.map((item, index) => (
        <NavBarItem
          key={index}
          label={item.label}
          path={item.path}
          src={item.src}
          alt={item.alt}
        ></NavBarItem>
      ))}
    </div>
  );
}
