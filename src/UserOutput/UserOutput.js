import React from "react";

const UserOutput = props => {
  return (
    <div>
      <p>Private Username: {props.userName}</p>
      <p>Public Username: {props.stickyUserName}</p>
    </div>
  );
};

export default UserOutput;
