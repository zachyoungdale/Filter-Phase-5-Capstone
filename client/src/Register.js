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
    <div className="flex flex-col justify-center items-center font-sans mt-20">
      <form
        onSubmit={handleRegister}
        className="flex flex-col justify-center items-start m-6"
      >
        <h3 className="font-sans font-black text-6xl mb-10">SIGN UP</h3>
        <div className="flex flex-col space-y-6">
          <label className="font-sans font-bold text-3xl mr-4">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-sans font-bold p-2 text-2xl border-4 border-black"
          />
          <label className="font-sans font-bold text-3xl mr-4">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="font-sans font-bold p-2 text-2xl border-4 border-black"
          />
          <label className="font-sans font-bold text-3xl mr-4">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-sans font-bold p-2 text-2xl border-4 border-black"
          />
          <label className="font-sans font-bold text-3xl mr-4">
            Confirm Password:
          </label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="font-sans font-bold p-2 text-2xl border-4 border-black"
          />
          <input
            type="submit"
            className="font-sans font-bold bg-black text-white text-2xl p-3 rounded-lg hover:animate-bounce"
          />
          {/* <button type="button" onClick={cancelClick}>Cancel</button> */}
        </div>
      </form>
    </div>
  );
}
export default Register;
