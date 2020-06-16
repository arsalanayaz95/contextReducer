import React from "react";
import Child, { ChildTwo } from "./Child";
const Parent = () => {
  return (
    <div>
      <h1>Pakistani Parent</h1>
      <Child />
      <ChildTwo />
    </div>
  );
};

export default Parent;
