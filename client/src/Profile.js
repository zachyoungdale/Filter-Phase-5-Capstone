import { useEffect, useState } from "react";
import BookmarkedShopCard from "./BookmarkedShopCard";
import ReviewedShopCard from "./ReviewedShopCard";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Profile({ user, setUser }) {
  const [reviewedShops, setReviewedShops] = useState([]);
  const [userBookmarks, setUserBookmarks] = useState([]);

  const navigate = useNavigate();

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
  }, [user]);

  function deleteUserBookmark(id) {
    const filteredBookmarks = userBookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });
    setUserBookmarks(filteredBookmarks);
    console.log(filteredBookmarks);
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

  const deleteUser = async () => {
    await fetch(`/users/${user.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setUser(null);
    navigate("/");
  };

  function handleDeleteUser() {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to delete your account?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteUser();
          },
        },
        {
          label: "No",
        },
      ],
    });
  }
  return user ? (
    <div className="flex flex-col m-20">
      <h1 className="font sans font-black text-6xl">{`Hi,  ${user?.name}!`}</h1>
      <div className="flex flex-row">
        <button
          onClick={() => navigate("/updateprofile")}
          className="font-sans font-bold bg-black text-white max-w-xs mt-4 mr-4 mb-10 p-3 rounded-md hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200"
        >
          Update Profile
        </button>
        <button
          className="font-sans font-bold bg-black text-white max-w-x mt-4 mb-10 p-3 rounded-md hover:bg-red-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200"
          onClick={handleDeleteUser}
        >
          Delete Profile
        </button>
      </div>
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
