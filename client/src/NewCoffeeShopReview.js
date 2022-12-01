import { useState } from "react";

function NewCoffeeShopReview() {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  function handleSubmitReview(e) {
    e.preventDefault();
    const newReviewObj = {
      rating: rating,
      content: content,
    };
    console.log(newReviewObj);
  }

  console.log(rating);
  return (
    <div className="flex flex-col bg-black justify-center items-center text-white font-sans pt-60 pb-40">
      <h1 className="font-extrabold text-5xl flex justify-center">
        Leave a Review?
      </h1>
      <form
        onSubmit={handleSubmitReview}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-row m-5">
          <label className="font-bold text-4xl mr-3">Rating</label>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= rating ? "on" : "off"}
                onClick={() => setRating(index)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          <textarea
            placeholder="write review here..."
            onChange={(e) => setContent(e.target.value)}
            className="font-sans text-black text-xl font-medium p-3 resize h-40 w-96"
          ></textarea>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewCoffeeShopReview;
