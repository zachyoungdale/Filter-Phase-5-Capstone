import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import CoffeeShopsList from "./CoffeeShopsList";
function App() {
  const [user, setUser] = useState(null);
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setUser(currentUser));
      }
    });

    fetch("/coffee_shops").then((res) => {
      if (res.ok) {
        res.json().then((shopArray) => setCoffeeShops(shopArray));
      }
    });

    fetch("/cities").then((res) => {
      if (res.ok) {
        res.json().then((cities) => setCities(cities));
      }
    });
  }, []);

  console.log(coffeeShops);

  console.log(user);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<CoffeeShopsList cities={cities} />} />

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </div>
  );
}
export default App;
