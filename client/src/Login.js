import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin(event) {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    fetch(`/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
        setUsername("");
        setPassword("");
        navigate("/profile");
      } else {
        res.json().then((event) => alert(event.error));
      }
    });
  }
  return (
    <form onSubmit={handleLogin}>
      <h3>LOGIN</h3>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
      {/* <button type="button" onClick={registerClick} >Register</button> */}
    </form>
  );
}
export default Login;
