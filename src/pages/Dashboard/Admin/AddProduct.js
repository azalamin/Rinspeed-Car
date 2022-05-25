import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const [uploading, setUploading] = useState(false);
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorage_key = `52615529fc784d6bcf37f81d22cb4827`;

  const onSubmit = async (data) => {
    setUploading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageStorage_key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const parts = {
            name: data.name,
            email: user?.email,
            description: data.description,
            minQuantity: Number(data.minQuantity),
            quantity: Number(data.quantity),
            price: Number(data.price),
            image: image,
          };
          //   Send to your database
          fetch("http://localhost:5000/post-part", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(parts),
          })
            .then((res) => res.json())
            .then((inserted) => {
              setUploading(false);
              console.log(inserted);
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the product ");
              }
            });
        }
      });
  };

  if (uploading) {
    return <Loading />;
  }
  return (
    <div className="mt-10 ml-5">
      <h3 className="text-3xl font-bold text-center py-5">Add New Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex justify-around">
          <div className="sm:w-[40%]">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || ""}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Product Name"
                className="input input-bordered w-full"
                {...register("minQuantity", {
                  required: {
                    value: true,
                    message: "Minimum quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.minQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minQuantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label htmlFor="image" className="label">
                <span className="label-text border w-full py-3 text-center rounded-xl hover:bg-slate-200 cursor-pointer">
                  upload image
                </span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full hidden"
                id="image"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image?.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="sm:w-[40%]">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Total Product Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Product Quantity"
                className="input input-bordered w-full"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea input-bordered"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
