import { useEffect, useState } from "react";
import BookmarkedShopCard from "./BookmarkedShopCard";
import ReviewedShopCard from "./ReviewedShopCard";

function Profile({ user, deleteBookmark }) {
  const [reviewedShops, setReviewedShops] = useState([]);
  const [userBookmarks, setUserBookmarks] = useState([]);

  useEffect(() => {
    fetch(`/users/${user?.id}/reviewed_shops`).then((res) => {
      if (res.ok) {
        res.json().then((shops) => setReviewedShops(shops));
      }
    });

    fetch(`/users/${user?.id}/bookmarks`).then((res) => {
      if (res.ok) {
        res.json().then((bookmarks) => setUserBookmarks(bookmarks));
      }
    });
  }, []);

  function deleteUserBookmark(obj) {
    const filteredBookmarks = userBookmarks.filter(
      (bookmark) => bookmark.id !== obj.id
    );
    setUserBookmarks(filteredBookmarks);
  }

  const reviewedShopCard = reviewedShops.map((shop) => {
    return <ReviewedShopCard {...shop} key={shop.id} city={shop.city.name} />;
  });

  const bookmarkedShopCard = userBookmarks.map((bookmark) => {
    return (
      <BookmarkedShopCard
        {...bookmark}
        key={bookmark.id}
        shopId={bookmark.coffee_shop.id}
        name={bookmark.coffee_shop.name}
        address={bookmark.coffee_shop.address}
        deleteUserBookmark={deleteUserBookmark}
      />
    );
  });
  return user ? (
    <div className="flex flex-col m-20">
      <h1 className="font sans font-black text-6xl">{`Hi,  ${user?.name}!`}</h1>
      <h2>{user?.image}</h2>
      <h2 className="font-sans font-extrabold text-3xl">Reviewed Shops</h2>
      {reviewedShopCard}
      <h2 className="font-sans font-extrabold text-3xl">Bookmarks</h2>
      {bookmarkedShopCard}
    </div>
  ) : (
    <h1 className="font sans font-black text-6xl m-20">Loading Profile...</h1>
  );
}

export default Profile;
