import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import {HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <router>
          <div className="App">
          <Nav />
          {routes}
          </div>
      </router>
      
    );
  }
}

export default App;
