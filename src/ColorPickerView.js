import React from "react";
import PropTypes from "prop-types";

import ColorPickerItem from "./ColorPickerItem";

export const COLORS = [
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#000000",
  "#FF00FF",
  "#800080",
  "#FF0000",
  "#800000",
  "#FFFF00",
  "#808000",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#008080",
  "#0000FF",
  "#000080"
];

export default function ColorPickerView(props) {
  return (
    <div className="ColorPickerView">
      {COLORS.map((color, index) => (
        <ColorPickerItem key={index} index={index} color={color} onSelect={props.onMixColor} />
      ))}
    </div>
  );
}

ColorPickerView.propTypes = {
  onMixColor: PropTypes.func.isRequired
};
