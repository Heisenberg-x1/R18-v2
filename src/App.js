import "./App.css";
import React, { createContext } from "react";
import Props from "./components/Parts";
import { Main } from "./components/Parts";
import "./App.css";
import { Side } from "./components/Parts";
const Greeting = () => {
  return (
    <div className="App">
      <Props first="Home" second="Contact" third="About" fourth="Products" />
      <Main />
      <Side />
    </div>
  );
};

function App() {
  return <Greeting />;
}

export default App;
