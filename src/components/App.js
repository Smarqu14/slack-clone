import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Message from "./Message/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

const App = () => (
  <Grid>
    <ColorPanel />
    <SidePanel />
    <Message />
    <MetaPanel />
  </Grid>
);

export default App;
