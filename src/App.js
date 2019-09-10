import React, { Component } from "react";
import Text from "./containers/Text.js";
import "./css/App.css";

import Image from "./Image.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Text></Text>
        <Image className="image-size"></Image>
      </div>
    );
  }
}

export default App;
