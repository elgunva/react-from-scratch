import React, {useState} from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = () => {
  const [usingState, SettingState] = useState({
    userName: "Elgun"
  });
  // console.log(usingState);

  const [stickyUserName, setStickyUserName] = useState("Elgun");

  const nameChangeHandler = event => {
    // console.log("Handler Works", event.target.value);
    SettingState({
      userName: event.target.value
    });
  };

  return (
    <div className="App">
      <UserInput change={nameChangeHandler} currentName={usingState.userName} />
      <UserOutput
        userName={usingState.userName}
        stickyUserName={stickyUserName}
      />
    </div>
  );
};

export default App;
