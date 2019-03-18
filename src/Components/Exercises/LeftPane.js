import React, { Component } from "react";

import { Grid, Paper } from "@material-ui/core/";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

class LeftPane extends Component {
  // //Component will recevice props from parent call
  // componentWillReceiveProps(nextProps) {

  // }
  render() {
    return <Paper style={this.props.style.Paper}>Left Pane</Paper>;
  }
}
export default LeftPane;
