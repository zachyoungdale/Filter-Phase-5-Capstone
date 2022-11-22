import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register({ setUser }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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
      image,
    };
    console.log(newUser);
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
        navigate("/login");
      } else {
        res.json().then((event) => alert(`Sign Up: ${event.error}`));
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
        <label>Profile Picture:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
