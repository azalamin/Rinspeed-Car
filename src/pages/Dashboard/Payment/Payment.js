import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../../../api";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1coQGG3ma1uWWsM4JIJaRyLFegPVPXpMINK2jFntm7xtdqxIqzCQwkehvstag7tFTKesToNNTLTD6fIF0AeBC300JDnSChsU"
);

const Payment = () => {
  const { orderId } = useParams();
  console.log(orderId);
  const [order, setOrder] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await fetcher.get(`/payment/${orderId}`);
      console.log(data);
      setOrder(data);
    })();
  }, [orderId]);

  return (
    <div style={{ height: "100vh" }} className="">
      <div className="md:flex justify-center items-center mt-20 px-1 sm:px-10 ">
        <div className="md:w-[30%] md:mr-20 mb-10 md:mb-0">
          <div class="card shadow-2xl bg-primary text-white">
            <div class="card-body">
              <h5 class="text-xl font-bold">{order?.productName}</h5>
              <h5 className="font-semibold">
                Total Quantity:{" "}
                <span className="bg-[orange] text-black font-bold px-3">
                  {order?.productQuantity}
                </span>
              </h5>
              <h5 className="font-semibold">
                Total Amount:{" "}
                <span className="bg-[orange] text-black font-bold px-3">
                  ${order?.totalPrice}
                </span>
              </h5>
              <h6 className="font-semibold">Address: {order?.address}</h6>
              <h6 className="font-semibold">Email: {order?.email}</h6>
            </div>
          </div>
        </div>
        <div className="md:w-[40%] border-2 border-primary rounded-2xl">
          <div className="card shadow-lg py-10 px-10">
            <h5 className="text-center pb-4 font-bold mb-4 text-primary">
              Payment card
            </h5>
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
