import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import fetcher from "../api/index";
import auth from "../firebase.init";

const Purchase = () => {
  const [part, setPart] = useState({});
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const { name, description, price, minQuantity, quantity, image } = part;
  const [orderQuantity, setOrderQuantity] = useState(minQuantity);
  const [orderError, setOrderError] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await fetcher.get(`/parts/${partId}`);
      setPart(data);
    })();
  }, [partId]);

  const handleQuantity = (event) => {
    const newQuantity = event.target.value;
    if (newQuantity < minQuantity) {
      setOrderQuantity(minQuantity);
    }
    if (newQuantity > quantity) {
      setOrderQuantity(minQuantity);
    }
    setOrderQuantity(newQuantity);
  };

  const handleOrder = (event) => {};

  return (
    <section className="min-h-screen">
      <div className="sm:flex justify-evenly items-center">
        <div className="sm:w-[60%] text-right mb-14 sm:mb-0 mt-10 sm:mt-0">
          <div className="flex justify-center">
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-60" src={image} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {name}
                  <div class="badge badge-secondary">New</div>
                </h2>
                <h2 className="card-title">{quantity} in stock</h2>
                <p className="text-left">{description}</p>
                <div class="card-actions justify-end">
                  <div class="">
                    <label class="swap swap-flip text-xl">
                      <input type="checkbox" />
                      <div class="swap-on">😈</div>
                      <div class="swap-off">😇</div>
                    </label>
                  </div>
                  <Link to="/" class="badge badge-outline mt-1">
                    Get more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 sm:w-[40%]">
          <div className="md:p-3 text-center sm:text-left">
            <h1 className="text-2xl font-bold pt-10">ORDER KING</h1>
            <div className="bg-primary h-[4px] w-[20%] my-1 mx-auto sm:mx-0"></div>
            <form onSubmit={handleOrder}>
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={user?.displayName || ""}
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    class="input input-bordered"
                    value={user?.email || ""}
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={name || ""}
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Product Quantity</span>
                  </label>
                  <input
                    type="number"
                    class="input input-bordered"
                    onChange={handleQuantity}
                    defaultValue={orderQuantity || minQuantity}
                    min={minQuantity}
                    max={quantity}
                  />
                  {orderQuantity < minQuantity ? (
                    <p className="text-red-500">
                      <small>Please order minimum {minQuantity}</small>
                    </p>
                  ) : (
                    ""
                  )}
                  {orderQuantity > quantity ? (
                    <p className="text-red-500">
                      <small>Maximum order quantity {quantity}</small>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={price || ""}
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="text-2xl font-semibold">
                      Total Price: $
                      {price * orderQuantity || price * minQuantity}
                    </span>
                  </label>
                </div>

                <div class="form-control mt-6 pb-10">
                  <button
                    disabled={
                      orderQuantity < minQuantity || orderQuantity > quantity
                        ? true
                        : false
                    }
                    type="submit"
                    class="btn btn-primary"
                  >
                    Place The Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
