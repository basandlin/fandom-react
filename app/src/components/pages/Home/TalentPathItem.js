import React, { useState } from "react";

import "./Home.scss";

export default function TalentPathItem(props) {
  const [image, setImage] = useState(props.item.deselected_src);

  function handleClick(props) {
    if (props.item.isSelected) {
      return;
    }

    if (props.spent < 6 && props.canSelect) {
      setImage(props.item.selected_src);
      props.setSpent(spent => spent + 1);
      props.item.isSelected = !props.item.isSelected;
    } else if (props.spent > 5) {
      alert("You have used all of your points!");
    } else {
      alert("Previous talent must be selected first.");
    }
  }

  function handleRightClick(e, props) {
    e.preventDefault();

    if (!props.item.isSelected) {
      return;
    }

    setImage(props.item.deselected_src);
    props.setSpent(spent => spent - 1);
    props.item.isSelected = !props.item.isSelected;
  }

  return (
    <div className="talent-path__item">
      <img
        src={image}
        alt={props.name}
        height="50"
        width="50"
        className={props.item.isSelected ? "item-selected" : ""}
        onClick={() => handleClick(props)}
        onContextMenu={e => handleRightClick(e, props)}
      />
    </div>
  );
}
