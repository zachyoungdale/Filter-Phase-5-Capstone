function CoffeeShopPreviewCard({ name, address }) {
  return (
    <div className="bg-black text-white font-sans p-6 m-6 flexitems-center rounded-xl">
      <h3 className="font sans text-3xl font-bold">{name}</h3>
      <h4>{address}</h4>
    </div>
  );
}

export default CoffeeShopPreviewCard;
