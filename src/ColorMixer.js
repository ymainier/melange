import React from "react";
import PropTypes from "prop-types";
import Color from "color";

export function pad(string = "") {
  if (string.length >= 6) return string;
  return `${"0".repeat(6 - string.length)}${string}`;
}

export function mix(left, right) {
  const color = Color(left)
    .mix(Color(right))
    .rgbNumber();
  return `#${pad(color.toString(16))}`;
}

export default function ColorMixer(props) {
  return (
    <div
      className="ColorMixer"
      style={{ backgroundColor: mix(props.left, props.right) }}
    />
  );
}

ColorMixer.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
};
