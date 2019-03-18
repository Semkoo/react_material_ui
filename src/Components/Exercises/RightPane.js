import React, { Component } from "react";

import { Grid, Paper } from "@material-ui/core/";

class RightPane extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }

  render() {
    return <Paper style={this.props.style.Paper}>Right Pane</Paper>;
  }
}
export default RightPane;
