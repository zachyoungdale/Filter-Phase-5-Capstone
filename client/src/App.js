import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
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
      <Login setUser={setUser} />
      <Register setUser={setUser} />
    </div>
  );
}
export default App;
