import { useEffect, useState } from "react";
import fetcher from "../../api";
import Loading from "../../components/Loading";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);

        const res = await fetcher.get("/review");

        // Ensure reviews is always an array
        const reviewData = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];

        setReviews(reviewData);
      } catch (error) {
        console.error("Failed to load reviews:", error);
        setReviews([]); // prevent crash
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="px-5 md:px-10 pt-28 pb-16 bg-slate-50" id="reviews">
      <h2
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="800"
        className="text-center pt-10 font-bold text-xl pb-2"
      >
        Testimonials
      </h2>
      <h1
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="800"
        className="text-center text-4xl font-bold uppercase mb-20"
      >
        What <span className="text-primary">Our Client</span> Says
      </h1>

      <div className="w-full md:grid grid-cols-2 gap-10">
        {reviews.slice(0, 4).map((review, index) => (
          <div
            key={index}
            data-aos="zoom-in-down"
            data-aos-delay="200"
            data-aos-duration="800"
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
                  {[...Array(Number(review?.rating || 0)).keys()].map(
                    (number) => (
                      <input
                        key={number}
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                      />
                    )
                  )}
                </div>

                <p>{review?.description}</p>
                <h2 className="font-semibold py-10">- {review?.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
