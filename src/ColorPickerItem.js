import React from "react";
import PropTypes from "prop-types";

export function top(index) {
  return `${5 + Math.floor(index / 4) * 23.75}%`;
}

export function left(index) {
  return `${5 + (index % 4) * 23.75}%`;
}

export default function ColorPickerItem(props) {
  return (
    <div
      className="ColorPickerItem"
      style={{
        backgroundColor: props.color,
        top: top(props.index),
        left: left(props.index),
        marginBottom: "5%"
      }}
      onClick={() => props.onSelect(props.color)}
      onTouchStart={event =>
        event.stopPropagation() && props.onSelect(props.color)
      }
    />
  );
}

ColorPickerItem.propTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
