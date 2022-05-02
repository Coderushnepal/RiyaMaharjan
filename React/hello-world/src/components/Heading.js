import React from "react";
import { useSelector } from "react-redux";
function Heading() {
  const list = useSelector((state) => state.list);
  return <h2>Number of fruits = {list.length}</h2>;
}

export default Heading;
