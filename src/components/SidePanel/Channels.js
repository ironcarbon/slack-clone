import React from "react";
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions";
import repeat from ".././img/repeat.png";
import add from ".././img/add.png";
import checked from ".././img/checked.png";
import cancel from ".././img/cancel.png";


import { Image, Div, Modal, P, Input, Button, Form } from "../Styled";

class Channels extends React.Component {
  state = {
    activeChannel: "",
    user: this.props.currentUser,
    channels: [],
    addChannels: false,
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels"),
    firstLoad: true
  };

  closeAddChannels = () => this.setState({ addChannels: false });

  openAddChannels = () => this.setState({ addChannels: true });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changeChannel = channel => {
    this.setActiveChannel(channel);
    this.props.setCurrentChannel(channel);
    //console.log(channel);
  };

  setActiveChannel = channel => {
    this.setState({ activeChannel: channel.id });
  };

  displayChannels = channels =>
    channels.length > 0 &&
    channels.map(channel => (
      <Div
        key={channel.id}
        onClick={() => this.changeChannel(channel)}
        name={channel.name}
        style={{ opacity: "0.7", color: "var(--cyan)", margin: "0.1rem" }}
        active={channel.id === this.state.activeChannel}
      >
        #{channel.name}
      </Div>
    ));

  onSubmitHandler = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };

  isFormValid = ({ channelName, channelDetails }) =>
    channelName && channelDetails;

  componentDidMount() {
    this.addChannels();
  }

  componentWillUnmount() {
    this.removeChannels();
  }

  addChannels = () => {
    let loadedChannels = [];
    this.state.channelsRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
      //console.log(loadedChannels);
    });
  };

  removeChannels = () => {
    this.state.channelsRef.off();
  };

  setFirstChannel = () => {
    let firstChannel = this.state.channels[0];
    if (this.state.firstLoad && this.state.channels.length > 0) {
      this.props.setCurrentChannel(firstChannel);
      this.setActiveChannel(firstChannel);
    }
    this.setState({ firstLoad: false });
  };

  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state;
    const key = channelsRef.push().key; //it is gonna give unique identifier for every channel thats added

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
        <Div> {this.displayChannels(channels)}</Div>

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

export default connect(
  null,
  { setCurrentChannel }
)(Channels);
