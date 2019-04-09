import React from "react";
import firebase from "../../firebase";
import repeat from ".././img/repeat.png";
import add from ".././img/add.png";
import { Image } from "../Styled";

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
        <div
          style={{
            display: "flex",
            flexFlow: "row"
          }}
        >
          <Image icon src={repeat} style={{ alignSelf: "flex-start" }} />
          <p style={{ display: "inline-block" }}>CHANNELS</p>
          <span>({channels.length})</span>

          <Image
            icon
            src={add}
            style={{ marginLeft: "auto" }}
            onClick={this.openAddChannels}
          />
        </div>
        {addChannels ? (
          <div>
            <div>Add a Channel</div>
            <form onSubmit={this.onSubmitHandler}>
              <input
                type="text"
                label="Name of Channel"
                name="channelName"
                placeholder="Name of Channel"
                onChange={this.handleChange}
              />
              <input
                type="text"
                label="About the Channel"
                name="channelDetails"
                placeholder="About the Channel"
                onChange={this.handleChange}
              />
              <div>
                <button onClick={this.onSubmitHandler}>Add</button>
                <button onClick={this.closeAddChannels}>Cancel</button>
              </div>
            </form>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Channels;
