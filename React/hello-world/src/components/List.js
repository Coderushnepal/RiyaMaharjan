// import React, { useContext } from "react";
// import { listContext } from "./App";
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { addList } from "../actions/list";

function List() {
  // const [list, onAdd] = useContext(listContext);
 const list = useSelector((state)=> state.list);
 const dispatch = useDispatch();
 function handleListAdd() {
  const enteredFruit = prompt("Enter the name of fruit");

  if (!enteredFruit) {
    return;
  }

  dispatch(addList(enteredFruit));
}

  return (
    <>
      <ul>
        {list.map((items, index) => (
          <li key={index}> {items} </li>
        ))}
      </ul>
      <button onClick={handleListAdd}>+</button>
    </>
  );
}

export default List;
