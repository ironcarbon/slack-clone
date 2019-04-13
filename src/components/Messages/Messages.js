import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import { ChannelGrid } from "../Styled";
import firebase from '../../firebase';

class Messages extends React.Component {
  state = {
    messageRef: firebase.database().ref('messages'),
    channel: this.props.currentChannel,
    user: this.props.currentUser
  }
  render() {
    const { messageRef, channel, user } = this.state;
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
        <MessageForm messageRef={messageRef} currentChannel={channel} currentUser={user} />
      </ChannelGrid>
    );
  }
}
export default Messages;
