function CoffeeShopReviews({ rating, content }) {
  return (
    <div className="bg-white p-6 text-black rounded-xl max-w-md flex flex-col mt-4 mb-4">
      <h1 className="font-sans font-bold text-2xl">{`Rating: ${rating}/5`}</h1>
      <p className="font-sans font-medium">{content}</p>
    </div>
  );
}

export default CoffeeShopReviews;
