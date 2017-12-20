import React from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js"

export function mix(left, right) {
  return chroma.mix(left, right, 0.5, "hsl");
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
