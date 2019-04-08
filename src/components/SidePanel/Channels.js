import React from "react";
import repeat from ".././img/repeat.png";
import add from ".././img/add.png";
import { Image } from "../Styled";

class Channels extends React.Component {
  state = {
    channels: [],
    addChannels: false,
    channelName: "",
    channelDetails: ""
  };

  closeAddChannels = () => this.setState({ addChannels: false });

  openAddChannels = () => this.setState({ addChannels: true });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { channels, addChannels, channelName, channelDetails } = this.state;
    return (
      <React.Fragment>
        <div style={{ display: "float" }}>
          <div style={{ float: "left" }}>
            <Image icon src={repeat} />
            <p style={{ display: "inline-block" }}>CHANNELS</p>
            <span>({channels.length})</span>
          </div>
          <Image
            icon
            src={add}
            style={{ float: "right" }}
            onClick={this.openAddChannels}
          />
        </div>
        {addChannels ? (
          <div>
            <div>Add a Channel</div>
            <form>
              <input
                type="text"
                label="Name of Channel"
                name="Name of Channel"
                placeholder="Name
                of Channel"
                onChange={this.handleChange}
              />
              <input
                type="text"
                label="About the Channel"
                name="About the Channel"
                placeholder="About the Channel"
                onChange={this.handleChange}
              />
              <div>
                <button onClick={this.addChannels}>Add</button>
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
