import React, { Component } from "react";

//My mods
import { Header, Footer } from "./Layouts";
import Excercies from "./Exercises";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Excercies />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
