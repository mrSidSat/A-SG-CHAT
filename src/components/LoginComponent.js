import React from "react";
import "../styles/login.css";
import { useState } from "react";
import { useHistory } from "react-router";
export default function Login() {
  const [loginError, setloginError] = useState(0);
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value + " " + e.target[1].value);
    if (e.target[0].value == "chat-user" && e.target[1].value == "chat-pass") {
      console.log(localStorage.getItem("username"));
      history.push("/");
    } else {
      document.getElementsByTagName("form")[0].reset();
      setloginError(1);
    }
  }
  return (
    <>
      <div className="mainConatiner">
        <div className="supportBox">
          <div className="loginBox">
            <h1>Login In</h1>
            <form onSubmit={handleSubmit}>
              <span className="inputFieldTitle">User</span>
              <input className="inputField" type="text" />
              <span className="inputFieldTitle">Password</span>
              <input className="inputField" type="password" />
              <button type="submit" className="loginButton">
                Login In
              </button>
            </form>
            {loginError ? <div>wrong login credentials</div> : <div></div>}
          </div>
        </div>
      </div>
    </>
  );
}
