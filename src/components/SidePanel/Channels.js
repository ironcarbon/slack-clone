import React from "react";
import firebase from "../../firebase";
import repeat from ".././img/repeat.png";
import add from ".././img/add.png";
import checked from ".././img/checked.png";
import cancel from ".././img/cancel.png";

import { Image, Div, Modal, P, Input, Button, Form } from "../Styled";

class Channels extends React.Component {
  state = {
    user: this.props.currentUser,
    channels: [],
    addChannels: false,
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels")
  };

  closeAddChannels = () => this.setState({ addChannels: false });

  openAddChannels = () => this.setState({ addChannels: true });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };

  isFormValid = ({ channelName, channelDetails }) =>
    channelName && channelDetails;

  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state;
    const key = channelsRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDetails: "" });
        this.closeAddChannels();
        console.log("channel added");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { channels, addChannels } = this.state;
    return (
      <React.Fragment>
        <Div
          style={{
            display: "flex",
            flexFlow: "row"
          }}
        >
          <Image icon src={repeat} style={{ alignSelf: "flex-start" }} />
          <p
            style={{
              display: "inline-block",
              color: "var(--blue)"
            }}
          >
            CHANNELS
          </p>

          <span style={{ color: "var(--blue)", fontSize: "1.25rem" }}>
            ({channels.length})
          </span>

          <Image
            icon
            src={add}
            style={{ marginLeft: "auto" }}
            onClick={this.openAddChannels}
          />
        </Div>
        {addChannels ? (
          <Modal>
            <Div modal>
              <Div
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "var(--white)"
                }}
              >
                Add a Channel
              </Div>
              <Form onSubmit={this.onSubmitHandler}>
                <Input
                  type="text"
                  label="Name of Channel"
                  name="channelName"
                  placeholder="Name of Channel"
                  onChange={this.handleChange}
                />
                <Input
                  type="text"
                  label="About the Channel"
                  name="channelDetails"
                  placeholder="About the Channel"
                  onChange={this.handleChange}
                />
                <div
                  style={{
                    display: "flex",
                    flexFlow: "flex-end",
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                  }}
                >
                  <Button channelButton add onClick={this.onSubmitHandler}>
                    <Image checked icon src={checked} /> Add
                  </Button>
                  <Button channelButton cancel onClick={this.closeAddChannels}>
                    <Image checked icon src={cancel} />
                    Cancel
                  </Button>
                </div>
              </Form>
            </Div>
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Channels;
