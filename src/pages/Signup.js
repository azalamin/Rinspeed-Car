import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import SocialLogin from "../components/SocialLogin";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const [token, tokenLoading] = useToken(user);
  const location = useLocation();
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

  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data.password;
    const fullName = data.fullName;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: fullName });
    reset();
  };

  if (loading || isLoading || tokenLoading) {
    return <Loading />;
  }

  return (
    <section className="min-h-[80vh] flex justify-center items-center pt-32 mb-20 z-0">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-2xl font-bold text-center mt-5 uppercase">
          Please Sign Up
        </h3>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                type="password"
                placeholder="Password"
                className="input input-bordered"
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
              <label className="label">
                <p className="label-text-alt">
                  Already have account?
                  <Link to="/login" className="text-primary link link-hover">
                    Login
                  </Link>
                </p>
              </label>
              {error ? (
                <p>
                  <small className="text-red-600">{error?.message}</small>
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default Signup;
