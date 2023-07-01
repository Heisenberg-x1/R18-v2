import React from "react";
import "./Styles.css";
import { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="button-count">
      <p>The button has been clicked {count} times</p>
      <br />
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default Hooks;
