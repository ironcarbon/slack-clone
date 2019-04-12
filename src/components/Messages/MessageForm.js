import React from "react";
import { Input, Button1 } from "../Styled";

class MessageForm extends React.Component {
  render() {
    return (
      <div style={{ margin: "1rem", background: "var(--white)" }}>
        <Input type="text" placeholder="Write your message" />
        <div>
          <Button1>Reply</Button1>
          <Button1>Upload Media</Button1>
        </div>
      </div>
    );
  }
}

export default MessageForm;
