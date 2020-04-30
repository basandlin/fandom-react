import React from "react";
import { NavBarItem } from "../index";
import { NAV_ITEMS } from "../../utils/constants";

import "./navbar.scss";

export default function NavBar() {
  return (
    <div>
      {NAV_ITEMS.map((item, index) => (
        <NavBarItem
          key={index}
          path={item.path}
          src={item.src}
          alt={item.alt}
        ></NavBarItem>
      ))}
    </div>
  );
}
