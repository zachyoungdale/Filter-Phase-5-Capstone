import { useState } from "react";

function NewCoffeeShopReview({ shop, user }) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  function handleSubmitReview(e) {
    e.preventDefault();
    const newReviewObj = {
      rating: rating,
      content: content,
      user_id: user.id,
      coffee_shop_id: shop.id,
    };
    fetch(`/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => console.log(data));
        window.location.reload();
      } else {
        res.json().then((data) => alert(data.errors));
      }
    });
  }

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
                id="star-btn"
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
        <input
          type="submit"
          className="transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-110 duration-300 text-black font-sans font-bold p-1 ml-4 rounded-md cursor-pointer w-52 mt-6"
        ></input>
      </form>
    </div>
  );
}

export default NewCoffeeShopReview;
