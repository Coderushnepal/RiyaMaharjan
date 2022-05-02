import React from "react";
import List from "./List";
import Welcome from "./Welcome";
import ClickMe from "./ClickMe";
import HoverMe from "./HoverMe";
import Heading from "./Heading";

import { Calculator } from "./Calculator";
import SpeedIndicator from "./SpeedIndicator";

export const listContext = React.createContext("list");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ["Apple", " Mango", "Orange", "Banana"],
    };
    this.handleListAdd = this.handleListAdd.bind(this);
  }

  handleListAdd() {
    const enteredFruit = prompt("Enter the name of fruit");

    if (!enteredFruit) {
      return;
    }

    this.setState({ list: [...this.state.list, enteredFruit] });

    console.log(enteredFruit);
  }

  render() {
    return (
      <>
        <Welcome name="Riya" />
        <SpeedIndicator />
        <listContext.Provider value={[this.state.list, this.handleListAdd]}>
          <Heading />
          <List />
        </listContext.Provider>
        <ClickMe />
        <HoverMe />
        <Calculator />
      </>
    );
  }
}

export default App;
