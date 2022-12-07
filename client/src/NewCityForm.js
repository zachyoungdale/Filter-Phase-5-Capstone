import { useState } from "react";

function NewCityForm({ addNewCity }) {
  const [newCity, setNewCity] = useState("");
  function handleCitySubmit(e) {
    e.preventDefault();
    const newCityObj = {
      name: newCity,
    };

    fetch("/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCityObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((city) => addNewCity(city));
        setNewCity("");
        alert("City added successfully!");
      } else {
        res.json().then((data) => alert(data.errors));
      }
    });
  }

  return (
    <div className="flex flex-col bg-black justify-center items-center text-white p-10 font-sans">
      <h1 className="font-black text-4xl p-6">Add City</h1>
      <form
        onSubmit={handleCitySubmit}
        className="flex flex-row justify-center items-center"
      >
        <label className="font sans font-bold 2xl:text-lg sm:text-md mr-2">
          Name and State:
        </label>
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          className="font-sans font-bold text-black p-1 rounded-md"
        ></input>
        <input
          type="submit"
          className="transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-110 duration-300 text-black font-sans font-bold p-1 ml-4 rounded-md cursor-pointer"
        ></input>
      </form>
    </div>
  );
}

export default NewCityForm;
