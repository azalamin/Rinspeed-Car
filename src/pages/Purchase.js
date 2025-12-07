import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../api";
import axiosPrivet from "../api/axiosPrivet";
import Loading from "../components/Loading";
import auth from "../firebase.init";

const Purchase = () => {
  const [part, setPart] = useState(null); // FIXED: null until loaded
  const [orderQuantity, setOrderQuantity] = useState(1); // FIXED default
  const [loading, setLoading] = useState(true); // FIXED
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { partId } = useParams();


  useEffect(() => {
    if (!user) {
      navigate(`/login?redirect=/purchase/${partId}`);
      return;
    }
  }, [user, navigate, partId]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.get(
          `https://rinspeed-car-server.onrender.com/parts/${partId}`
        );
        console.log(data)
        setPart(data);
        setOrderQuantity(data?.minQuantity || 1);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error?.response?.status === 401 || error?.response?.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [partId, navigate]);

  // ----------------- QUANTITY FIX -----------------
  const handleQuantity = (e) => {
    const newQty = Number(e.target.value);

    if (!part) return;

    if (newQty < part.minQuantity) {
      setOrderQuantity(part.minQuantity);
    } else if (newQty > part.quantity) {
      setOrderQuantity(part.quantity);
    } else {
      setOrderQuantity(newQty);
    }
  };
  // -------------------------------------------------

  // ----------------- ORDER SUBMIT ------------------
  const handleOrder = async (event) => {
    event.preventDefault();
    if (!part) return;

    const productPrice = Number(part.price);
    const productQuantity = Number(orderQuantity);
    const totalPrice = productPrice * productQuantity;

    const order = {
      name: user?.displayName,
      email: user?.email,
      phone: event.target.phone?.value,
      address: event.target.address?.value,
      productName: part.name,
      productQuantity,
      totalPrice,
    };

    try {
      setLoading(true);
      const { data } = await fetcher.post("/orders", order);

      if (data) {
        toast.success("Order placed successfully!");
      }
    } catch (err) {
      toast.error("Order failed!");
    } finally {
      setLoading(false);
    }
  };
  // -------------------------------------------------

  if (loading || !part) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen">
      <div className="sm:flex justify-evenly items-center">

        {/* PRODUCT CARD */}
        <div className="sm:w-[60%] text-right mb-14 sm:mb-0 mt-10 sm:mt-0">
          <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="h-60" src={part.image} alt={part.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {part.name}
                  <div className="badge badge-secondary">New</div>
                </h2>
                <h2 className="card-title">{part.quantity} in stock</h2>
                <p className="text-left">{part.description}</p>
                <div className="card-actions justify-end">
                  <Link to="/" className="badge badge-outline mt-1">
                    Get more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ORDER FORM */}
        <div className="bg-slate-300 sm:w-[40%]">
          <div className="md:p-3 text-center sm:text-left">
            <h1 className="text-2xl font-bold pt-10">ORDER KING</h1>
            <div className="bg-primary h-[4px] w-[20%] my-1 mx-auto sm:mx-0"></div>

            <form onSubmit={handleOrder}>
              <div className="card-body">

                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={user?.displayName || ""}
                    readOnly
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    value={user?.email || ""}
                    readOnly
                  />
                </div>

                {/* Address */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Address"
                    name="address"
                    className="input input-bordered"
                  />
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                </div>

                {/* Product Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={part.name}
                    readOnly
                  />
                </div>

                {/* PRODUCT QUANTITY */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Product Quantity (Min: {part.minQuantity})
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    value={orderQuantity}
                    onChange={handleQuantity}
                    min={part.minQuantity}
                    max={part.quantity}
                  />
                </div>

                {/* PRICE */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={part.price}
                    readOnly
                  />
                </div>

                {/* TOTAL PRICE */}
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl font-semibold">
                      Total Price: ${part.price * orderQuantity}
                    </span>
                  </label>
                </div>

                {/* SUBMIT */}
                <div className="form-control mt-6 pb-10">
                  <button
                    type="submit"
                    disabled={
                      orderQuantity < part.minQuantity ||
                      orderQuantity > part.quantity
                    }
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
