import React, { Component } from "react";

import { Grid } from "@material-ui/core/";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default class extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item sm={4}>
          <LeftPane style={style} />
        </Grid>
        <Grid item sm>
          <RightPane style={style} />
        </Grid>
      </Grid>
    );
  }
}
