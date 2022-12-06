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
    <div className="flex flex-col justify-center items-center font-sans mt-52">
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-start m-6"
      >
        <h3 className="font-sans font-black text-6xl mb-10">LOGIN</h3>
        <div className="flex flex-col space-y-6">
          <label className="font-sans font-bold text-4xl mr-4">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="font-sans font-bold p-2 text-2xl border-4 border-black"
          />
          <label className="font-sans font-bold text-4xl mr-4">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-sans font-bold p-2 text-2xl border-4 border-black"
          />
          <input
            type="submit"
            className="font-sans font-bold bg-black text-white text-2xl p-3 rounded-lg hover:animate-bounce"
          />
        </div>
      </form>
    </div>
  );
}
export default Login;
