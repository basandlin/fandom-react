import React from "react";
import { SocialButtons } from "../../index";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left--top">SNOWFLAKES | MAGNETS | LIQUIDS</div>
        <div className="footer__left--bottom">
          Curse Front-End Design Challenge - Copyright 2020
        </div>
      </div>
      <div className="footer__right">
        <SocialButtons />
      </div>
    </div>
  );
}
