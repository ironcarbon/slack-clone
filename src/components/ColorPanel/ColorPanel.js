import React from "react";
import addFriend from "../img/add-friend.png";
import { Image } from "../Styled.js";

class ColorPanel extends React.Component {
  render() {
    return (
      <div style={{ background: "var(--blue)" }}>
        <Image border src={addFriend} />
      </div>
    );
  }
}
export default ColorPanel;
