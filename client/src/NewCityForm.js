import { useState } from "react";

function NewCityForm({ addNewCity }) {
  const [newCity, setNewCity] = useState("");
  const [cityErrors, setCityErrors] = useState([]);
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
        alert("City added successfully!");
      } else {
        res.json().then((data) => setCityErrors(data.errors));
      }
      setNewCity("");
    });
  }

  return (
    <div className="flex flex-col bg-black justify-center items-center text-white pb-10 pt-10 font-sans">
      <h1 className="font-black text-4xl p-6">
        Dont see your city? Add it here!
      </h1>
      <form
        onSubmit={handleCitySubmit}
        className="flex flex-row justify-center items-center"
      >
        {cityErrors.length > 0 && (
          <ul>
            <li className="font-sans text-red-500 font-bold text-2xl">
              Errors:
            </li>
            {cityErrors.map((error) => (
              <li
                key={error}
                className="text-red-500 font-sans font-bold text-xl"
              >
                {error}
              </li>
            ))}
          </ul>
        )}
        <label className="font sans font-bold mr-2">Name and State:</label>
        <input
          type="text"
          onChange={(e) => setNewCity(e.target.value)}
          className="font-sans text-black p-1"
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
