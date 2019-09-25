import React, { Component } from "react";
import BoxContainer from "./BoxContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h3>Keep clicking until all the boxes have the same color =))</h3>
        <BoxContainer />
      </div>
    );
  }
}

export default App;
