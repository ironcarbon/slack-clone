import React, { Component } from "react";
import "./App.css";

import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import styled from "styled-components";
import { connect } from "react-redux";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 10fr 4fr;
  grid-template-rows: minmax(100vh, max-content);
`;

class App extends Component {

  render() {

    const { currentUser, currentChannel } = this.props;

    return (
      <Grid>
        <ColorPanel />
        <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser && currentUser.uid} currentChannel={currentChannel} />
        <Messages key={currentChannel && currentChannel.id} currentChannel={currentChannel} currentUser={currentUser} />
        <MetaPanel />
      </Grid>
    );
  }
}

const mapStateToProps = state =>
  (
    {
      currentUser: state.user.currentUser,
      currentChannel: state.channel.currentChannel
    }

  );

export default connect(mapStateToProps)(App);
