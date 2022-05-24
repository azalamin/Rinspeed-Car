import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import fetcher from "../../api";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.name = user?.displayName;
    data.email = user?.email;
    data.photoURL = user.photoURL || "https://i.ibb.co/JnsL8m4/unknown.png";
    console.log(data);
    const res = await fetcher.post("/review", data);
    console.log(res);
    if (res?.data?.insertedId) {
      toast.success("Review added");
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="md:w-[50%] mx-5 md:mx-auto">
        <h3 className="text-3xl font-bold py-5 text-center">Add A Review</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Give rating 1 to 5"
              className="input input-bordered"
              {...register("rating", {
                required: "Rating is required 1 to 5",
                max: {
                  value: 5,
                  message: "Maximum rating number is 5",
                },
              })}
            />
            {errors?.rating ? (
              <p>
                <small className="text-red-600">{errors.rating?.message}</small>
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="textarea input-bordered"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 character",
                },
                maxLength: {
                  value: 250,
                  message: "Maximum 250 character",
                },
              })}
            />
            {errors?.description ? (
              <p>
                <small className="text-red-600">
                  {errors.description?.message}
                </small>
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
