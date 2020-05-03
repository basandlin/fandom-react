import React from "react";

import "./SectionTitle.scss";

export default function SectionTitle(props) {
  return (
    <div className="container" style={{ width: `${props.width}px` }}>
      <div className="container__title">{props.title}</div>
    </div>
  );
}
