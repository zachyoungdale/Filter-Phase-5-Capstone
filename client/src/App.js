import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
function App() {
  const [user, setUser] = useState(null);
  const [needToRegister, setNeedToRegister] = useState(false);

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setUser(currentUser));
      }
    });
  }, []);

  console.log(user);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<h1>HomePage</h1>} />

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </div>
  );
}
export default App;
