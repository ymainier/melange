import React, { Component } from "react";

import ColorMixView from "./ColorMixView";
import ColorPickerView, { COLORS } from "./ColorPickerView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      left: COLORS[0],
      right: COLORS[4],
      side: "left",
      mix: true
    };

    this.choose = this.choose.bind(this);
    this.mix = this.mix.bind(this);
  }

  choose(side) {
    this.setState({
      ...this.state,
      mix: false,
      side
    });
  }

  mix(color) {
    this.setState({
      ...this.state,
      [this.state.side]: color,
      mix: true
    });
  }

  render() {
    if (this.state.mix) {
      return (
        <ColorMixView
          left={this.state.left}
          right={this.state.right}
          onChooseColor={this.choose}
        />
      );
    } else {
      return <ColorPickerView onMixColor={this.mix} />;
    }
  }
}

export default App;
