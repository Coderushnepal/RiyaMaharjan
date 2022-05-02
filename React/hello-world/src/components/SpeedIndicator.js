import React from "react";

class MaxSpeedIndicator extends React.Component {
  componentDidMount = () => {
    console.log("Max Speed indicator component did mount");
  };

  render() {
    return <h3>Max Limit reached</h3>;
  }
}

class MinSpeedIndicator extends React.Component {
  componentDidMount = () => {
    console.log("Min Speed indicator component did mount");
  };

  render() {
    return <h3>Min Limit reached</h3>;
  }
}

class OnRangeSpeedIndicator extends React.Component {
  constructor() {
    super();

    this.state = {
      timerId: 0,
    };
  }
  render() {
    return <h3>Speed on Range</h3>;
  }
}

class SpeedIndicator extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  speedIndicator = () => {
    if (this.state.count > 10) return <MaxSpeedIndicator />;
    if (this.state.count < 0) return <MinSpeedIndicator />;
    return <OnRangeSpeedIndicator />;
  };

  componentDidMount = () => {
    console.log("Component Did mount");
  };

  componentDidUpdate = (preProps, prevState) => {
    if (prevState.count > 10) {
      console.log("Speed out of range");
    }
  };

  shouldComponentUpdate = (preProps, prevState) => {
    console.log(this.state.count);
    if (this.state.count > 10) {
      return false;
    }
    return true;
  };

  render() {
    const { count } = this.state;
    return (
      <>
        {this.speedIndicator()}
        <button onClick={this.handleIncrement}>+</button>
        <span> {count} </span>
        <button onClick={this.handleDecrement}>-</button>
      </>
    );
  }
}

export default SpeedIndicator;
