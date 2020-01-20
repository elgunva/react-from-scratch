import React from "react";

const userInput = props => {
  return (
    <div>
      <label>Type private username</label> <br></br>
      <input onChange={props.change} value={props.currentName}></input>
    </div>
  );
};

export default userInput;
