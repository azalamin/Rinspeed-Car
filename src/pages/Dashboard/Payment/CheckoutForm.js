import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const totalPrice = order?.totalPrice;
  useEffect(() => {
    fetch("https://rinspeed-car.herokuapp.com/create-payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");

    // confirm card payment
    setSuccess("");
    setTransaction("");
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order?.name,
            email: order?.email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransaction(paymentIntent?.id);
      setSuccess("Congrats! Your payment is completed! ");
      const payment = {
        productPay: order?._id,
        transactionId: paymentIntent?.id,
      };
      // update database
      if (!order?.paid) {
        fetch(`https://rinspeed-car.herokuapp.com/payment-update/${order?._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              toast.success("Your payment is completed");
            }
          });
      } else {
        toast.error("Already paid");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-xs mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 text-center">{cardError}</p>}
      {success && (
        <div>
          <p className="text-success text-center">{success}</p>
          <p className="text-success text-center">
            Your transaction id is{" "}
            <span className="text-accent">{transaction}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
