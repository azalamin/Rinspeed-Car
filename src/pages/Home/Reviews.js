import React from "postcss";
import { useEffect, useState } from "react";
import fetcher from "../../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetcher.get("/review");
      setReviews(data);
    })();
  }, []);

  return (
    <section className="px-5 md:px-10 pt-28 pb-16 bg-slate-50" id="reviews">
      <h2 className="text-center pt-10 font-bold text-xl pb-2">Testimonials</h2>
      <h1 className="text-center text-4xl font-bold uppercase mb-20">
        What <span className="text-primary">Our Client</span> Says
      </h1>
      <div className="w-full md:grid grid-cols-2 gap-10">
        {reviews?.slice(0, 4).map((review, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl shadow-xl mb-10 md:mb-0"
          >
            <div className="w-full flex justify-center p-5 text-center">
              <div>
                <div className="avatar flex justify-center pt-10">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review?.photoURL} alt="" />
                  </div>
                </div>
                <div className="rating py-5">
                  {[...Array(Number(review?.rating)).keys()].map((number) => (
                    <input key={number}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  ))}
                </div>
                <p>{review?.description}</p>
                <h2 className="font-semibold py-10"> - {review?.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
