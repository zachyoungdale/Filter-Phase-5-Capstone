import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoffeeShopReviews from "./CoffeeShopReviews";

function CoffeeShopCard({ user, addBookmark }) {
  const { id } = useParams();
  const [shop, setShop] = useState({});

  useEffect(() => {
    fetch(`/coffee_shops/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((obj) => setShop(obj));
      }
    });
  }, []);

  const shopReview = shop?.reviews?.map((review) => {
    return <CoffeeShopReviews {...review} key={review.id} />;
  });

  function handleBookmark() {
    const newBookmark = {
      user_id: user.id,
      coffee_shop_id: parseInt(id),
    };

    fetch("/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookmark),
    }).then((res) => {
      if (res.ok) {
        res.json().then((bookmark) => addBookmark(bookmark));
      } else {
        res.json().then((event) => alert(event.error));
      }
    });
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-black p-6 text-white">
        <h1 className="font-sans font-black text-6xl mb-3">{shop.name}</h1>
        <h3 className="font-sans font-extrabold text-4xl mb-3">
          {shop.city?.name}
        </h3>
        <h2 className="font-sans font-extrabold text-3xl mb-3">
          {shop.address}
        </h2>
        <a href={shop.website}>
          <button className="font-sans bg-white text-black p-2 rounded-xl text-2xl font-bold mb-3">
            Website
          </button>
        </a>
        <a href={shop.socials}>
          <button className="font-sans bg-white text-black p-2 rounded-xl text-2xl font-bold mb-3">
            Socials
          </button>
        </a>
        <button
          className="font-sans bg-white text-black p-2 rounded-xl text-2xl font-bold mb-3"
          onClick={handleBookmark}
        >
          Bookmark
        </button>
      </div>
      <div className="bg-black text-white flex flex-col p-6">
        <h1 className="font-sans font-black text-4xl">Reviews</h1>
        {shopReview}
      </div>
    </div>
  );
}

export default CoffeeShopCard;
