import React from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Heading from "./components/Heading";
import Display from "./components/Display";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: [],
      currentDisplay: "0",
      operation: "",
    };
  }

  enter = (event) => {
    console.log(typeof event.target.value);
    const { currentDisplay, display } = this.state;
    console.log(display);
    if ("0123456789".includes(event.target.value)) {
      this.setState({
        currentDisplay: currentDisplay + event.target.value,
        //currentDisplay: [...display, event.target.value],
      });
    } else {
      this.setState({
        display: [...display, currentDisplay, event.target.value],
        currentDisplay: "0",
        operation: event.target.value,
      });
    }
  };

  equal = () => {
    const { display, currentDisplay } = this.state;
    this.setState({
      display: [...display, currentDisplay],
    });
    console.log(display, "hi", currentDisplay);
  };

  clear = () => {
    this.setState({
      display: [],
      currentDisplay: "0",
      operation: "",
    });
  };

  render() {
    return (
      <div className="App">
        <Heading />
        <Display currentDisplayHandler={this.state.currentDisplay} />
        <Buttons
          enterHandler={this.enter}
          equalHandler={this.equal}
          clearHandler={this.clear}
        />
      </div>
    );
  }
}

export default App;
