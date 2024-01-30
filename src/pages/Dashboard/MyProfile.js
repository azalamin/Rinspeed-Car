import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivet from "../../api/axiosPrivet";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.get(
          `https://rinspeed-car-server.vercel.app/user/${user?.email}`
        );
        setUserInfo(data);
      } catch (error) { }
    })();
  }, [user]);

  const {
    register,
    handleSubmit,
    isLoading,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data.email = user?.email;
      if (user) {
        const res = await axiosPrivet.put(
          `https://rinspeed-car-server.vercel.app/user/${user?.email}`,
          data
        );
        console.log(res.data.result);
        if (res.data.result.modifiedCount) {
          toast.success("Profile updated");
        } else {
          toast.error("No new information!");
        }
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-3xl font-bold py-5 text-center">MY profile</h3>
      <div className="md:w-[50%] mx-5 md:mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              defaultValue={userInfo?.name}
              {...register("name", { required: "Name is required" })}
            />
            {errors?.name ? (
              <p>
                <small className="text-red-600">{errors.name?.message}</small>
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
              value={userInfo?.email || ""}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              defaultValue={userInfo?.number}
              className="input input-bordered"
              {...register("number")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="City"
              defaultValue={userInfo?.city}
              className="input input-bordered"
              {...register("city")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin Profile</span>
            </label>
            <input
              type="text"
              placeholder="Your linkedin profile link"
              className="input input-bordered"
              defaultValue={userInfo?.linkedin}
              {...register("linkedin")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Profile</span>
            </label>
            <input
              type="text"
              placeholder="Your github profile link"
              className="input input-bordered"
              defaultValue={userInfo?.github}
              {...register("github")}
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
