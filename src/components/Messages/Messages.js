import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import { ChannelGrid } from "../Styled";
import firebase from '../../firebase';
import Message from './Message';

class Messages extends React.Component {
  state = {
    messageRef: firebase.database().ref('messages'),
    messages: [],
    messagesLoading: true,
    channel: this.props.currentChannel,
    user: this.props.currentUser
  }

  componentDidMount = () => {
    const { channel, user } = this.state;
    if (channel && user) {
      this.addListener(channel.id);
    }
  }

  addListener = (channelId) => {
    this.addMessageListener(channelId);
  }

  addMessageListener = (channelId) => {
    let loadedMessages = [];
    this.state.messageRef.child(channelId).on('child_added', snapshot => {
      loadedMessages.push(snapshot.val());
      this.setState({
        messages: loadedMessages,
        messagesLoading: false
      })
    })
  }

  displayMessages = messages => {
    return (
      messages.length > 0 && messages.map(message => (
        <Message key={message.timestamp} message={message} user={this.state.user}/>
      ))
    )
  }

  render() {
    const { messageRef, messages, channel, user } = this.state;
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

          {this.displayMessages(messages)}
        </div>
        <MessageForm messageRef={messageRef} currentChannel={channel} currentUser={user} />
      </ChannelGrid>
    );
  }
}
export default Messages;
