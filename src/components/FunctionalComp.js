import React from "react";

function FunctionalComp(props) {
  return (
    <div>
      <p>This is a functional component</p>
      <p>Hello React developer {props.name}</p>
      <section>{props.children}</section>
    </div>
  );
}
export function Btn(props){
    return(
        <button className={props.className}>
            {props.children}
        </button>
    )
}

export default FunctionalComp;
