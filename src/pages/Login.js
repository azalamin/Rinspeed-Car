import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const user = false;
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="min-h-[80vh] flex justify-center items-center mt-10 py-10">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-2xl font-bold text-center mt-5 uppercase">
          Please Login
        </h3>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
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
                <p class="label-text-alt">
                  Don't have account?
                  <Link to="/signup" className="text-primary link link-hover">
                    Create New account
                  </Link>
                </p>
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
            <Link to="/reset" class="text-center text-red-500 block mt-3">
              Forgot password?
            </Link>
          </form>
          <div class="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
