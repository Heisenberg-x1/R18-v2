import React from "react";
import { useState } from "react";

const styles = {
    border:"1px solid teal",
    padding:"10px",
    margin:"10px",
    width:"fit-content",
    borderRadius: "5px"}
export default function State() {
    // An array of 6 friends
    const friends = ["John", "Jane", "Jack", "Jill", "Joe", "Jenny"];
  const [name, setName] = useState(friends[0]);
  const [age, setAge] = useState(25);
  const change = () => {
let random = Math.floor(Math.random() * friends.length);
    setName(friends[random]);
    setAge(Math.ceil(Math.random()*17));
  };
  return (
<div className="State" style={styles}>
      <button type="button" onClick={change}>
        Click
      </button>
      <br />
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </div>
  );
}
