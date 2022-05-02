import React from "react";
import withCounter from "./hoc/withCounter";

class ClickMe extends React.Component {
  render() {
    return (
      <>
        <h2> Click Count : {this.props.count} </h2>
        <button onClick={this.props.onIncrease}> Click Me </button>
      </>
    );
  }
}
export default withCounter(ClickMe);
