import { useNavigate } from "react-router-dom";

function BookmarkedShopCard({ name, address, id, shopId, deleteUserBookmark }) {
  const navigate = useNavigate();

  function handleBookmarkDelete() {
    fetch(`bookmarks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => deleteUserBookmark(id));
  }

  return (
    <div className="bg-black text-white font-sans p-6 mt-4 mb-4 max-w-lg rounded-xl hover:shadow-xl shadow-black transition ease-in-out delay-50 hover:-translate-y-1">
      <h1 className="font-extrabold text-3xl">{name}</h1>
      <h2 className="font-semibold">{address}</h2>
      <button
        onClick={() => navigate(`/shop/${shopId}`)}
        className="bg-white text-black font-sans font-bold text-xl p-2 rounded-xl mt-3 mr-3 hover:bg-gray-200"
      >
        See More
      </button>
      <button
        onClick={handleBookmarkDelete}
        className="bg-white text-black font-sans font-bold text-xl p-2 rounded-xl mt-3  hover:bg-red-500 hover:text-white"
      >
        Delete Bookmark
      </button>
    </div>
  );
}

export default BookmarkedShopCard;
