import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import ProjectStatus from "./components/projects/ProjectStatus";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ProjectStatus />
        </div>
      </Provider>
    );
  }
}

export default App;
