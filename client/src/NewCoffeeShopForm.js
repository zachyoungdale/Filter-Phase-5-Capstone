import { useState } from "react";

function NewCoffeeShopForm({
  selectedCity,
  setSelectedCity,
  cityOption,
  addNewCoffeeShop,
}) {
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopCity, setShopCity] = useState(null);
  const [shopWebsite, setShopWebsite] = useState("");
  const [shopSocials, setShopSocials] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newShop = {
      name: shopName,
      address: shopAddress,
      city_id: shopCity,
      website: shopWebsite,
      socials: shopSocials,
    };

    console.log(newShop);

    fetch(`/coffee_shops`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newShop),
    }).then((res) => {
      if (res.ok) {
        res.json().then((shop) => addNewCoffeeShop(shop));
        setShopName("");
        setShopAddress("");
        setShopCity("");
        setShopWebsite("");
        setShopSocials("");
      } else {
        res.json().then((data) => setErrors(data.errors));
      }
    });
  }
  return (
    <div className="flex flex-col bg-black justify-center items-center text-white mt-6 font-sans">
      <h1 className="font-black text-4xl p-6">
        Don't see a coffee shop? Add it here!
      </h1>
      {errors.length > 0 && (
        <ul>
          <li className="font-sans text-red-500 font-bold text-2xl">Errors:</li>
          {errors.map((error) => (
            <li
              key={error}
              className="text-red-500 font-sans font-bold text-xl"
            >
              {error}
            </li>
          ))}
        </ul>
      )}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label>Name:</label>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setShopName(e.target.value)}
        ></input>
        <label>Address:</label>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setShopAddress(e.target.value)}
        ></input>
        <label>City:</label>
        <select
          onChange={(e) => setShopCity(parseInt(e.target.value))}
          className=" text-black"
        >
          <option>...</option>
          {cityOption}
        </select>
        <label>Website:</label>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setShopWebsite(e.target.value)}
        ></input>
        <label>Socials:</label>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setShopSocials(e.target.value)}
        ></input>
        <input
          type="submit"
          className="bg-white rounded-lg text-black p-1 m-3"
        ></input>
      </form>
    </div>
  );
}

export default NewCoffeeShopForm;
