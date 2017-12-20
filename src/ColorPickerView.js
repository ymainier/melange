import React from "react";
import PropTypes from "prop-types";

import ColorPickerItem from "./ColorPickerItem";

export const COLORS = [
  "#F44336",
  "#F06292",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF9800",
  "#795548",
  "#607D8B",
  "#9E9E9E",
  "#E0E0E0",
  "#000000",
  "#424242",
  "#F5F5F5",
  "#FFFFFF"
];

export default function ColorPickerView(props) {
  return (
    <div className="ColorPickerView">
      {COLORS.map((color, index) => (
        <ColorPickerItem
          key={index}
          index={index}
          color={color}
          onSelect={props.onMixColor}
        />
      ))}
    </div>
  );
}

ColorPickerView.propTypes = {
  onMixColor: PropTypes.func.isRequired
};
