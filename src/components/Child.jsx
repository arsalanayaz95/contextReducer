import React, { useContext, useReducer } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { nameReducer } from "../reducers/nameReducer";

const Child = () => {
  const context = useContext(GlobalContext);
  return (
    <div>
      <h1>First Child</h1>
      <h2>{context[0]}</h2>
      <button onClick={() => context[1]("Dahi Le Ao")}>Reveal Task</button>
    </div>
  );
};

export const ChildTwo = () => {
  const [value, dispatch] = useReducer(nameReducer, "Task");
  return (
    <div>
      <h1>Second Child</h1>
      <h2>{value}</h2>
      <button onClick={() => dispatch("CHANGE_NAME")}>Reveal Task</button>
    </div>
  );
};

export default Child;
