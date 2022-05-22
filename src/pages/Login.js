import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="min-h-[80vh] flex justify-center items-center mt-10">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-2xl font-bold text-center mt-5">Please Login</h3>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
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
                placeholder="password"
                class="input input-bordered"
                {...register("password", { required: "Password is required" })}
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
              <label class="label">
                <Link to="/login" class="label-text-alt">
                  Don't have account?{" "}
                  <span className="text-primary link link-hover">
                    Create New account
                  </span>
                </Link>
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
            <Link to="/login" class="text-center text-red-500 block mt-3">
              Forgot password?
            </Link>
          </form>
          <div class="divider">OR</div>
          <button className="btn btn-outline btn-primary">
              <FaGoogle className="mr-2"/>
              Continue With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
