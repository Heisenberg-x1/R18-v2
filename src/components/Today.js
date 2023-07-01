import React from "react";

const Today = (props) => {
  return (
    <div className="today">
      <p>Today's Date:</p>
      <p>{props.date.toLocaleDateString()}</p>{" "}
      {/* Render the date as a string */}
    </div>
  );
};


export default Today;
