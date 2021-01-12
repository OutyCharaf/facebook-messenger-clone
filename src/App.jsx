import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Messages from "./components/Messages";

function App() {

  const [user, setUser] = useState("");

  const renderLoginPage = () => {
    let app = document.getElementById("body");
    app.style.backgroundColor="#0b81ff";
    return(
      <Login setUser={setUser}/>
    )
  }

  const renderMessagesPage = () => {
    let app = document.getElementById("body");
    app.style.backgroundColor="white";
    return(
      <Messages user={user}/>
    )
  }

  return (
    <React.Fragment>
      {user==="" ? renderLoginPage() : <React.Fragment/>}
      {user!=="" ? renderMessagesPage() : <React.Fragment/>}
    </React.Fragment>
  )
}

export default App;
