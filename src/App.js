import "./App.css";
import FunctionalComp, { Btn } from "./components/FunctionalComp";
import { ClassComp, ClassComp1 } from "./components/ClassComp";
import React from "react";
import State from "./components/State";

const Greeting = () => {
  return (
    <div>
      <h2>Hello React World</h2>
      <p>I am learning React and I love it!</p>
      <br />
      <FunctionalComp name="one">
        <button type="button">Click</button>
      </FunctionalComp>
      <FunctionalComp name="two" />
      <FunctionalComp name="three" />
      <br />
      <ClassComp />
      <ClassComp1 />
      <br />
      <Btn className="btn">Click</Btn>
      <br />
      <State />
    </div>
  );
};

function App() {
  return <Greeting />;
}

export default App;
