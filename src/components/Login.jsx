import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Login.css";

function Login({ setUser }) {

  const [userName, setUserName] = useState("");
  const [alert, setAlert] = useState(false);

  const displayAlert = () => {
    return (
      <div className="alert alert-danger" role="alert">
        Vous devez saisir votre nom avant de vous connecter !
      </div>
    );
  }

  const validateUserName = (event) => {
    event.preventDefault();
    if(userName!=="")
      setUser(userName);
    else
      setAlert(true);
  }

  return (
    <React.Fragment>
      <img
          className="login-messenger-logo"
          src={process.env.PUBLIC_URL + "/facebook_messenger_logo.png"}
          width="95"
          height="95"
          alt="Messenger"
      />
      <h3 className="login-app-title text-center text-light">Facebook Messenger</h3>
      <form className="login-form">
        <input size="50" className="form-control mb-4" onChange={(event)=>setUserName(event.target.value)} placeholder="Entrez votre nom..."/>
        <button className="login-button btn bg-white text-primary" onClick={(validateUserName)} type="submit">Se connecter</button>
      </form>
      {alert ? displayAlert() : <React.Fragment/>}
    </React.Fragment>
  );
}

Login.propTypes = {
  setUser: PropTypes.func
}

export default Login;
