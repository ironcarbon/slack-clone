import React from "react";
import { ChannelDiv, Header, Div, Input } from "../Styled";

class MessagesHeader extends React.Component {
  render() {
    return (
      <ChannelDiv>
        <div>
          <Header left>Channel</Header>2 Users
        </div>
        <Input type="text" small placeholder="Search Messages" />
      </ChannelDiv>
    );
  }
}

export default MessagesHeader;
