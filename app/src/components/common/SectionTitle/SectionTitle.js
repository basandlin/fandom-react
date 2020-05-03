import React from "react";

import "./SectionTitle.scss";

export default function SectionTitle(props) {
  return (
    <div
      className={props.right ? "container has-right" : "container"}
      style={{ width: `${props.width}px` }}
    >
      <div className="container__title">{props.title}</div>
      <div className="container__right">{props.right}</div>
    </div>
  );
}
