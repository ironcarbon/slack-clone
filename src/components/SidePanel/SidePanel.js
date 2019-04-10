import React from "react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

class SidePanel extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div style={{ background: "var(--very-dark-gray)" }}>
        <UserPanel currentUser={currentUser} />
        <Channels currentUser={currentUser} />
      </div>
    );
  }
}
export default SidePanel;
