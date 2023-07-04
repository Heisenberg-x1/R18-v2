import React from "react";
import "./Styles.css";
import { useState } from "react";
import { useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  const style = {
    color: "white",
    background: "green",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
  };
  useEffect(() => {
    console.log("useEffect");
  });
  const [message, setMessage] = useState("one");
  return (
    <div className="button-count">
      <p>The button has been clicked {count} times</p>
      <br />
      <button onClick={increment}>Click Me</button>
      <br />
      <p>Three buttons</p>
      <br />
      <div>
        <button
          style={style}
          onClick={() => {
            setMessage("one");
          }}
        >
          one
        </button>
        <button
          style={style}
          onClick={() => {
            setMessage("two");
          }}
        >
          two
        </button>
        <button
          style={style}
          onClick={() => {
            setMessage("three");
          }}
        >
          Three
        </button>
        <br />
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Hooks;
