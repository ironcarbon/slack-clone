import React from "react";
import { Input, Button1, Div } from "../Styled";

class MessageForm extends React.Component {
  render() {
    return (
      <div style={{ margin: "1rem", background: "var(--white)" }}>
        <Input type="text" medium placeholder="Write your message" />
        <Div>
          <Button1 messageBtn reply>Reply</Button1>
          <Button1 messageBtn update>Upload Media</Button1>
        </Div>
      </div>
    );
  }
}

export default MessageForm;
