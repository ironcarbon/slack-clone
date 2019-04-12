import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import { ChannelGrid } from "../Styled";

class Messages extends React.Component {
  render() {
    return (
      <ChannelGrid>
        <MessagesHeader />
        <div
          style={{
            padding: "100px",
            background: "var(--white)",
            margin: "1rem"
          }}
        >
          Messages
        </div>
        <MessageForm />
      </ChannelGrid>
    );
  }
}
export default Messages;
