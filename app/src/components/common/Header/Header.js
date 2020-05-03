import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets";
import { Button, SocialButtons } from "../../index";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header__right">
        <SocialButtons />
        <input placeholder="Search" />
        <Button text="Search" />
      </div>
    </div>
  );
}
