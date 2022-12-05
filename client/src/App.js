import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import CoffeeShopsList from "./CoffeeShopsList";
import CoffeeShopCard from "./CoffeeShopCard";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";

function App() {
  const [user, setUser] = useState(null);
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [userBookmarks, setUserBookmarks] = useState([]);

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
    setUserBookmarks([...userBookmarks, obj]);
  }

  function addNewCoffeeShop(obj) {
    setCoffeeShops([...coffeeShops, obj]);
  }

  function addNewCity(obj) {
    setCities([...cities, obj]);
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
              addNewCoffeeShop={addNewCoffeeShop}
              addNewCity={addNewCity}
              user={user}
            />
          }
        />

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route
          path="/shop/:id"
          element={
            <CoffeeShopCard
              user={user}
              addBookmark={addBookmark}
              userBookmarks={userBookmarks}
              setUserBookmarks={setUserBookmarks}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route
          path="/updateprofile"
          element={<UpdateProfile user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}
export default App;
