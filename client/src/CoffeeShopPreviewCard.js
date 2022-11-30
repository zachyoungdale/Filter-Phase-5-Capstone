import { useNavigate } from "react-router-dom";

function CoffeeShopPreviewCard({ name, address, id }) {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white font-sans p-6 m-6 flexitems-center rounded-xl hover:shadow-xl shadow-black transition ease-in-out delay-50 hover:translate-y-1 ">
      <h3 className="font sans text-3xl font-bold">{name}</h3>
      <h4>{address}</h4>
      <button
        onClick={() => navigate(`/shop/${id}`)}
        className="bg-white text-black font-sans font-bold text-xl p-2 rounded-xl mt-3"
      >
        See More
      </button>
    </div>
  );
}

export default CoffeeShopPreviewCard;
