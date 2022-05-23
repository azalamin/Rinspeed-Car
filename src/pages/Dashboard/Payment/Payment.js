import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../../../api";
import CheckoutForm from "../Payment/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2fKSBoNy6B09LpoJyG0TaRvjw1dGebMlhIht09GjHwCTbd8unIMQBOkUy9mbkrFJMZ1U1BE2Enx5fIINwAlOlA00dH0graDY"
);

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await fetcher.get(`/payment/${orderId}`);
      setOrder(data);
    })();
  }, [orderId]);

  return (
    <div style={{ height: "60vh" }}>
      <div className="md:flex justify-center items-center mt-20 px-1 sm:px-10">
        <div className="md:w-[30%] md:mr-20 mb-10 md:mb-0">
          <div className="card shadow-2xl bg-primary text-white">
            <div className="card-body">
              <h5 className="text-xl font-bold">{order?.productName}</h5>
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
              Make Payment
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
