import { useState } from "react";
import CoffeeShopPreviewCard from "./CoffeeShopPreviewCard";
import NewCoffeeShopForm from "./NewCoffeeShopForm";

function CoffeeShopsList({
  cities,
  coffeeShops,
  selectedCity,
  setSelectedCity,
  addNewCoffeeShop,
}) {
  let cityOption = cities.map((city) => {
    return (
      <option key={city.name} value={city.id}>
        {city.name}
      </option>
    );
  });

  const filteredCoffeeShopArray = coffeeShops.filter((shop) => {
    if (shop.city.id === selectedCity) {
      return shop;
    }
  });

  const coffeeShopPreviewCard = filteredCoffeeShopArray.map((shop) => {
    return <CoffeeShopPreviewCard {...shop} key={shop.id} />;
  });
  return (
    <div>
      <h1 className="flex justify-center m-10 font-san font-black text-4xl">
        Select Your City
      </h1>
      <div className="flex justify-center mb-20 font-sans text-xl">
        <select
          onChange={(e) => setSelectedCity(parseInt(e.target.value))}
          className="p-3"
        >
          <option>...</option>
          {cityOption}
        </select>
      </div>
      <div className="grid grid-cols-2">{coffeeShopPreviewCard}</div>
      <NewCoffeeShopForm
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        cityOption={cityOption}
        addNewCoffeeShop={addNewCoffeeShop}
      />
    </div>
  );
}

export default CoffeeShopsList;
