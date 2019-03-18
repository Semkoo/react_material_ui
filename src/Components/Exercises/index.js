import React, { Component } from "react";

import { Grid, Paper } from "@material-ui/core/";

export default class extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm>
          <Paper>Left Pane</Paper>
        </Grid>
        <Grid item sm>
          <Paper>Right Pane</Paper>
        </Grid>
      </Grid>
    );
  }
}
