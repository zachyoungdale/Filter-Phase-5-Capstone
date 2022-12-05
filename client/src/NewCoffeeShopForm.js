import { useState } from "react";

function NewCoffeeShopForm({ cityOption, addNewCoffeeShop }) {
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopCity, setShopCity] = useState(null);
  const [shopWebsite, setShopWebsite] = useState("");
  const [shopSocials, setShopSocials] = useState("");

  function handleShopSubmit(e) {
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
        res.json().then((data) => alert(data.errors));
      }
    });
  }

  return (
    <div className="flex flex-col bg-black justify-center items-center text-white mt-20 font-sans">
      <h1 className="font-black text-4xl p-6">Add Coffee Shop</h1>

      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleShopSubmit}
      >
        <div className=" flex flex-col justify-center items-center space-y-2">
          <label className="font-bold text-lg">Name:</label>
          <input
            type="text"
            className="text-black font-sans font-bold p-1 w-60 rounded-md"
            onChange={(e) => setShopName(e.target.value)}
          ></input>
          <label className="font-bold text-lg">Address:</label>
          <input
            type="text"
            className="text-black font-sans font-bold p-1 w-60 rounded-md"
            onChange={(e) => setShopAddress(e.target.value)}
          ></input>
          <label className="font-bold text-lg">City:</label>
          <select
            onChange={(e) => setShopCity(parseInt(e.target.value))}
            className="text-black font-sans font-bold p-1 w-60 rounded-md"
          >
            <option>...</option>
            {cityOption}
          </select>
          <label className="font-bold text-lg">Website:</label>
          <input
            type="text"
            className="text-black font-sans font-bold p-1 w-60 rounded-md"
            onChange={(e) => setShopWebsite(e.target.value)}
          ></input>
          <label className="font-bold text-lg">Socials:</label>
          <input
            type="text"
            className="text-black font-sans font-bold p-1 w-60 rounded-md"
            onChange={(e) => setShopSocials(e.target.value)}
          ></input>
        </div>
        <input
          type="submit"
          className="transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-110 duration-300 text-black font-sans font-bold p-1 mt-5 w-40 rounded-md cursor-pointer"
        ></input>
      </form>
    </div>
  );
}

export default NewCoffeeShopForm;
