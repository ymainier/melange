import React from "react";
import PropTypes from "prop-types";

export default function ColorChooser(props) {
  return (
    <div
      className={`ColorChooser ${props.side}`}
      style={({backgroundColor: props.color})}
      onClick={() => props.onChange(props.side)}
    />
  );
}

ColorChooser.propTypes = {
  side: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
