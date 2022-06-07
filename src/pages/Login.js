import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import SocialLogin from "../components/SocialLogin";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const [token, tokenLoading] = useToken(user);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  const {
    register,
    handleSubmit,
    isLoading,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
  };

  if (loading || isLoading || tokenLoading) {
    return <Loading />;
  }

  return (
    <section className="min-h-[80vh] flex justify-center items-center mt-20 py-10">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-2xl font-bold text-center mt-5 uppercase">
          Please Login
        </h3>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
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
              <label className="label">
                <p className="label-text-alt">
                  Don't have account?
                  <Link to="/signup" className="text-primary link link-hover">
                    Create New account
                  </Link>
                </p>
              </label>
              {error ? (
                <p>
                  <small className="text-red-600">
                    {error?.message.includes("user-not-found")
                      ? "No user found"
                      : ""}
                    {error?.message.includes("wrong-password")
                      ? "Wrong password"
                      : ""}
                  </small>
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <Link to="/reset" className="text-center text-red-500 block mt-3">
              Forgot password?
            </Link>
          </form>
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
