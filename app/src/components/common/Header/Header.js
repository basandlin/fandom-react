import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>stuff here</div>
    </div>
  );
}
