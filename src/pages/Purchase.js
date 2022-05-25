import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivet from "../api/axiosPrivet";
import fetcher from "../api/index";
import Loading from "../components/Loading";
import auth from "../firebase.init";

const Purchase = () => {
  const [part, setPart] = useState({});
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const { name, description, price, minQuantity, quantity, image } = part;
  const [orderQuantity, setOrderQuantity] = useState(minQuantity);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.get(
          `http://localhost:5000/parts/${partId}`
        );
        setPart(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [partId, navigate]);

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

  const handleOrder = async (event) => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const phone = event.target.phone?.value;
    const address = event.target.address?.value;
    const productName = event.target.productName?.value;
    const productQuantity = event.target.productQuantity?.value;
    const productPrice = event.target.price?.value;
    const totalPrice = productPrice * productQuantity;

    const order = {
      name,
      email,
      phone,
      address,
      productName,
      productQuantity,
      totalPrice,
    };
    setLoading(true);
    const { data } = await fetcher.post("/orders", order);
    if (data) {
      toast.success("Placed order successfully.");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen">
      <div className="sm:flex justify-evenly items-center">
        <div className="sm:w-[60%] text-right mb-14 sm:mb-0 mt-10 sm:mt-0">
          <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-60" src={image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {name}
                  <div className="badge badge-secondary">New</div>
                </h2>
                <h2 className="card-title">{quantity} in stock</h2>
                <p className="text-left">{description}</p>
                <div className="card-actions justify-end">
                  <div className="">
                    <label className="swap swap-flip text-xl">
                      <input type="checkbox" />
                      <div className="swap-on">😈</div>
                      <div className="swap-off">😇</div>
                    </label>
                  </div>
                  <Link to="/" className="badge badge-outline mt-1">
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
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={user?.displayName || ""}
                    name="fullName"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    value={user?.email || ""}
                    name="email"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered"
                    name="address"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={name || ""}
                    name="productName"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    onChange={handleQuantity}
                    defaultValue={orderQuantity || minQuantity}
                    name="productQuantity"
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={price || ""}
                    name="price"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl font-semibold">
                      Total Price: $
                      {price * orderQuantity || price * minQuantity}
                    </span>
                  </label>
                </div>

                <div className="form-control mt-6 pb-10">
                  <button
                    disabled={
                      orderQuantity < minQuantity || orderQuantity > quantity
                        ? true
                        : false
                    }
                    type="submit"
                    className="btn btn-primary"
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
