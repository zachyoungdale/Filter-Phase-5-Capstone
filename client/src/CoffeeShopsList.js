import { useState } from "react";

function CoffeeShopsList({ cities }) {
  const [selectedCity, setSelectedCity] = useState("");

  let cityOption = cities.map((city) => {
    return (
      <option key={city.name} value={city.id}>
        {city.name}
      </option>
    );
  });

  console.log(selectedCity);
  return (
    <div>
      <select onChange={(e) => setSelectedCity(e.target.value)}>
        <option>Select Your City</option>
        {cityOption}
      </select>
    </div>
  );
}

export default CoffeeShopsList;
