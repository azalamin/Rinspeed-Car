import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
//   if (true) {
//       return <Loading />;
//   }
  return (
    <section className="min-h-[80vh] flex justify-center items-center my-20">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-2xl font-bold text-center mt-5 uppercase">
          Please Sign Up
        </h3>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
                {...register("fullName", { required: "Name is required" })}
              />
              {errors?.fullName ? (
                <p>
                  <small className="text-red-600">
                    {errors.fullName?.message}
                  </small>
                </p>
              ) : (
                ""
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered"
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email ? (
                <p>
                  <small className="text-red-600">
                    {errors.email?.message}
                  </small>
                </p>
              ) : (
                ""
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                class="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum length should be 6",
                  },
                })}
              />
              {errors?.password ? (
                <p>
                  <small className="text-red-600">
                    {errors.password?.message}
                  </small>
                </p>
              ) : (
                ""
              )}
              {errors?.password ? (
                <p>
                  <small className="text-red-600">
                    {errors.password?.minLength?.message}
                  </small>
                </p>
              ) : (
                ""
              )}
              <label class="label">
                <p class="label-text-alt">
                  Already have account?
                  <Link to="/login" className="text-primary link link-hover">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
          <div class="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default Signup;
