import React from "react";
import { facebook, twitter, youtube } from "../../../assets";

import "./SocialButtons.scss";

export default function SocialButtons() {
  return (
    <div className="social-buttons">
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={youtube} alt="youtube" />
    </div>
  );
}
