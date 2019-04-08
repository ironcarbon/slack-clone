import React from "react";
import repeat from ".././img/repeat.png";
import add from ".././img/add.png";
import { Image } from "../Styled";

class Channels extends React.Component {
  render() {
    return (
      <div style={{ display: "float" }}>
        <div style={{ float: "left" }}>
          <Image icon src={repeat} />
          <p style={{ display: "inline-block" }}>CHANNELS</p>
        </div>
        <Image icon src={add} style={{ float: "right" }} />
      </div>
    );
  }
}

export default Channels;
