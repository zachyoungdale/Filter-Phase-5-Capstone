import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoffeeShopReviews from "./CoffeeShopReviews";
import NewCoffeeShopReview from "./NewCoffeeShopReview";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";

const places = ["places"];

function CoffeeShopCard({
  user,
  addBookmark,
  userBookmarks,
  setUserBookmarks,
}) {
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [shopReviews, setShopReviews] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: places,
  });

  useEffect(() => {
    fetch(`/coffee_shops/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((obj) => setShop(obj));
      }
    });

    fetch(`/coffee_shops/${id}/reviews`).then((res) => {
      if (res.ok) {
        res.json().then((reviews) => setShopReviews(reviews));
      }
    });

    fetch(`/users/${user?.id}/bookmarks`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUserBookmarks(data));
      }
    });
  }, []);

  const bookmarkToggle = userBookmarks.filter((bookmark) => {
    if (bookmark.coffee_shop.id === shop.id) {
      return true;
    }
  });

  const shopReview = shopReviews?.map((review) => {
    return (
      <CoffeeShopReviews
        {...review}
        key={review.id}
        userName={review.user.name}
      />
    );
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
        res.json().then((bookmark) => {
          addBookmark(bookmark);
        });
      } else {
        res.json().then((event) => alert(event.errors));
      }
    });
  }

  if (!isLoaded) return <div>Loading...</div>;

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
        <div className="flex flex-row">
          <a href={shop.website}>
            <button className="font-sans bg-white text-black p-2 rounded-xl text-2xl font-bold m-3 hover:bg-gray-200">
              Website
            </button>
          </a>
          <a href={shop.socials}>
            <button className="font-sans bg-white text-black p-2 rounded-xl text-2xl font-bold m-3  hover:bg-gray-200">
              Socials
            </button>
          </a>
          <button
            className="font-sans bg-white text-black p-2 rounded-xl text-2xl font-bold m-3  hover:bg-gray-200"
            onClick={handleBookmark}
          >
            {bookmarkToggle.length > 0 ? "Bookmarked!" : "Bookmark"}
          </button>
        </div>
      </div>
      <Map latitude={shop?.latitude} longitude={shop.longitude} />
      <div className="bg-black text-white flex flex-col p-6">
        {shopReviews.length > 0 ? (
          <h1 className="font-sans font-black text-4xl">Reviews</h1>
        ) : null}
        {shopReview}
      </div>
      <NewCoffeeShopReview user={user} shop={shop} />
    </div>
  );
}

export default CoffeeShopCard;
