import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = ({ order }) => {
  const { name, email, _id } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const price = 299;
  // useEffect(() => {
  //   fetch("http://localhost:5000/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ price }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.clientSecret) {
  //         setClientSecret(data?.clientSecret);
  //       }
  //     });
  // }, [price]);

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
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransaction(paymentIntent?.id)
      setSuccess("Congrats! Your payment is completed! ");

      const payment = {
        service: _id,
        transactionId: paymentIntent?.id,
      };
      // update database
      // fetch(`http://localhost:5000/order/${_id}`, {
      //     method: 'PATCH',
      //     headers: {
      //         'content-type' : 'application/json'
      //     },
      //     body: JSON.stringify(payment)
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //   });
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
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-danger text-center">{cardError}</p>}
      {success && (
        <div>
          <p className="text-success text-center">{success}</p>
          <p className="text-success text-center">
            Your transaction id is <span className="text-warning">{transaction}</span>
          </p>
        </div>
      )}
    </>
  );
};
export default CheckoutForm;
