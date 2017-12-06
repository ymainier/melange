import React from "react";
import PropTypes from "prop-types";

import ColorMixer from "./ColorMixer";
import ColorChooser from "./ColorChooser";

export default function ColorMixView(props) {
  return (
    <div className="ColorMixView">
      <ColorMixer left={props.left} right={props.right} />
      <ColorChooser side="left" color={props.left} onChange={props.onChooseColor} />
      <ColorChooser side="right" color={props.right} onChange={props.onChooseColor} />
    </div>
  );
}

ColorMixView.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  onChooseColor: PropTypes.func.isRequired
};
