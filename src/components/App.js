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
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
`;

class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Grid>
        <ColorPanel />
        <SidePanel currentUser={currentUser} />
        <Messages />
        <MetaPanel />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
