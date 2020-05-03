import React from "react";

import "./Home.scss";
import TalentPathItem from "./TalentPathItem";

export default function TalentPath(props) {
  return (
    <div className="talent-path">
      <div className="talent-path__title">{props.title}</div>
      <div className="talent-path__paths">
        {props.path.map((item, index) => (
          <TalentPathItem
            setSpent={props.setSpent}
            spent={props.spent}
            key={index}
            item={item}
            canSelect={
              props.path[index - 1]
                ? props.path[index - 1].isSelected === true
                : true
            }
          ></TalentPathItem>
        ))}
      </div>
    </div>
  );
}
