import React, { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Parent from "./components/Parent";
import "./App.css";

function App() {
  let userName = useState("Task");
  return (
    <GlobalContext.Provider value={userName}>
      <div className="App">
        <Parent />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
