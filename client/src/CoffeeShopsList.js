import CoffeeShopPreviewCard from "./CoffeeShopPreviewCard";
import NewCoffeeShopForm from "./NewCoffeeShopForm";
import NewCityForm from "./NewCityForm";

function CoffeeShopsList({
  cities,
  coffeeShops,
  selectedCity,
  setSelectedCity,
  addNewCoffeeShop,
  addNewCity,
  user,
}) {
  let cityOption = cities.map((city) => {
    return (
      <option key={city.id} value={city.id}>
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

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a
        className="font-medium text-2xl italic underline mt-4"
        href={`mailto:${email}${params}`}
      >
        {children}
      </a>
    );
  };

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
      {user?.admin === true ? (
        <NewCoffeeShopForm
          cityOption={cityOption}
          addNewCoffeeShop={addNewCoffeeShop}
        />
      ) : (
        <div className="flex flex-col justify-center items-center font-sans font-black text-4xl mt-72 p-48">
          <h1>Don't see a coffee shop or city?</h1>
          <Mailto
            email="FilterCoffeeApp@gmail.com"
            subject="Coffee shop or city request"
            body=""
          >
            Email here to submit a request
          </Mailto>
        </div>
      )}
      {user?.admin === true ? <NewCityForm addNewCity={addNewCity} /> : null}
    </div>
  );
}

export default CoffeeShopsList;
