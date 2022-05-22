import React from "postcss";

const Reviews = () => {
  const reviews = [
    {
      name: "Asraf Jaman",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem earum repellendus fugit itaque id.",
      image: "https://api.lorem.space/image/face?hash=3175",
      start: 5,
    },
    {
      name: "Asraf Jaman",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem earum repellendus fugit itaque id.",
      image: "https://api.lorem.space/image/face?hash=3174",
      start: 5,
    },
    {
      name: "Asraf Jaman",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem earum repellendus fugit itaque id.",
      image: "https://api.lorem.space/image/face?hash=3173",
      start: 5,
    },
    {
      name: "Asraf Jaman",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem earum repellendus fugit itaque id.",
      image: "https://api.lorem.space/image/face?hash=3172",
      start: 5,
    },
    {
      name: "Asraf Jaman",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem earum repellendus fugit itaque id.",
      image: "https://api.lorem.space/image/face?hash=3171",
      start: 5,
    },
    {
      name: "Asraf Jaman",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem earum repellendus fugit itaque id.",
      image: "https://i.ibb.co/XFNS6Mh/tom-Cruise.jpg",
      start: 5,
    },
  ];
  return (
    <section className="px-5 md:px-10 pt-28 pb-16 bg-slate-50" id="reviews">
      <h2 className="text-center pt-10 font-bold text-xl pb-2">Testimonials</h2>
      <h1 className="text-center text-4xl font-bold uppercase mb-20">
        What <span className="text-primary">Our Client</span> Says
      </h1>
      <div class="w-full md:grid grid-cols-2 gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            class="w-full bg-white rounded-2xl shadow-xl mb-10 md:mb-0"
          >
            <div class="w-full flex justify-center p-5 text-center">
              <div>
                <div class="avatar flex justify-center pt-10">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review?.image} alt="" />
                  </div>
                </div>
                <div class="rating py-5">
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>
                  “ During the time I have worked with SCG on this project, I
                  have found Mike Campbell and his team to be highly
                  knowledgeable and results-driven. Based on preliminary pilot
                  testing and a strong understanding of subsurface. conditions,
                  in particular fractured bedrock environments. ased on their
                  work on this project. "
                </p>
                <h2 class="font-semibold py-10"> - {review?.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
