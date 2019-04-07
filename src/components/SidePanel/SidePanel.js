import React from "react";
import UserPanel from "./UserPanel";

class SidePanel extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "minmax(100vh,max-content)",
          background: "green"
        }}
      >
        <UserPanel currentUser={currentUser} />
      </div>
    );
  }
}
export default SidePanel;
