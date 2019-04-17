import React from "react";
import { Input, Button1, Div } from "../Styled";
import firebase from '../../firebase';

class MessageForm extends React.Component {
  state = {
    message: '',
    channel: this.props.currentChannel,
    user: this.props.currentUser,
    loading: false,
    errors: []
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  createMessage = () => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      },
      content: this.state.message
    }
    return message;
  }

  sendMessage = () => {
    const { messageRef } = this.props;
    const { message, channel } = this.state;

    if (message) {
      this.setState({ loading: true })
      messageRef
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, message: '', errors: [] })
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            errors: this.state.errors.concat(err)
          })
        })
    } else {
      this.setState({
        errors: this.state.errors.concat({ message: 'Add a message' })
      })
    }

  }

  render() {
    const { errors, message, loading } = this.state;
    return (
      <div style={{ margin: "1rem", background: "var(--white)" }}>
        <Input
          type="text"
          name='message' medium
          placeholder="Write your message"
          onChange={this.onChangeHandler}
          value={message}
          disabled={loading}
          className={
            errors.some(error => error.message.includes('message')) ? 'error' : ''
          } />
        <Div>
          <Button1 messageBtn reply onClick={this.sendMessage}>Reply</Button1>
          <Button1 messageBtn update>Upload Media</Button1>
        </Div>
      </div>
    );
  }
}

export default MessageForm;
