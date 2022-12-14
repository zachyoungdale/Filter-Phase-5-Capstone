import { useNavigate } from "react-router-dom";

function ReviewedShopCard({ name, city, id }) {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white font-sans p-6 mt-4 mb-4 lg:max-w-lg rounded-xl md:max-w-xs hover:shadow-xl shadow-black transition ease-in-out delay-50 hover:-translate-y-1">
      <h1 className="font-extrabold text-3xl">{name}</h1>
      <h2 className="font-semibold">{city}</h2>
      <button
        onClick={() => navigate(`/shop/${id}`)}
        className="bg-white text-black font-sans font-bold text-xl p-2 rounded-xl mt-3 hover:bg-gray-200"
      >
        See More
      </button>
    </div>
  );
}

export default ReviewedShopCard;
