import React, { Component } from 'react';
import './App.css';

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr)
`

class App extends Component {
  render() {
    return (
      <Grid>
       <ColorPanel/>
       <SidePanel />
       <Messages />
       <MetaPanel />
      </Grid>
    );
  }
}

export default App;
