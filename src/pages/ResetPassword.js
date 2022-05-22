import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const email = data?.email;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
    reset();
  };
  return (
    <section className="min-h-[80vh] flex justify-center items-center mt-10 py-10">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-2xl font-bold text-center mt-5 uppercase">
          Reset Password
        </h3>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Reset
              </button>
            </div>
            <Link to="/login" class="text-center block mt-3 hover:text-primary">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
