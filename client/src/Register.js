import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register({ setUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();
    const newUser = {
      username,
      password,
      name,
    };
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => console.log(user));
        navigate("/login");
      } else {
        res.json().then((event) => alert(`Sign Up: ${event.errors}`));
      }
    });
  }
  return (
    <div>
      <h1>Sign Up:</h1>
      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit" />
        {/* <button type="button" onClick={cancelClick}>Cancel</button> */}
      </form>
    </div>
  );
}
export default Register;
