import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import CoffeeShopsList from "./CoffeeShopsList";
import CoffeeShopCard from "./CoffeeShopCard";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState(null);
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

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

  function addBookmark(obj) {
    setBookmarks([...bookmarks, obj]);
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CoffeeShopsList
              cities={cities}
              coffeeShops={coffeeShops}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          }
        />

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route
          path="/shop/:id"
          element={<CoffeeShopCard user={user} addBookmark={addBookmark} />}
        />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}
export default App;
