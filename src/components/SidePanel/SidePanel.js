import React from "react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

class SidePanel extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div style={{ background: "green" }}>
        <UserPanel currentUser={currentUser} />
        <Channels />
      </div>
    );
  }
}
export default SidePanel;
