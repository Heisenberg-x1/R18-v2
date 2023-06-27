import React from "react";
import "./Styles.css";
import { useState } from "react";

const Props = (props) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>{props.first}</li>
        <li>{props.second}</li>
        <li>{props.third}</li>
        <li>{props.fourth}</li>
      </ul>
    </nav>
  );
};

export const Main = () => {
  const [message, setMessage] = useState("Welcome to Our Site! Who We Are");
  const change = () => {
    setMessage("Thank You");
  };
  return (
    <div className="main">
      <h2>Welcome to Our Site! Who We Are</h2>
      <br />

      <p>
        We are a team of passionate individuals dedicated to making your life
        easier. Our mission is to provide you with the best products and
        services that will help you achieve your goals and improve your quality
        of life.
      </p>
      <br />
      <p>{message}</p>
      <button type="button" onClick={change}>
        Click
      </button>
    </div>
  );
};

export const Side = () => {
  return (
    <div className="side">
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Products</li>
      </ul>
    </div>
  );
};

export default Props;
