import React from "react";
import { toast } from "react-toastify";

const OrderRow = ({ order, index, setDeleteConfirm, refetch }) => {
  const {
    productName,
    productQuantity,
    totalPrice,
    address,
    _id,
    paid,
    transactionId,
    status,
  } = order;

  const handleConfirmShipped = (id) => {
    console.log(id);
    fetch(`https://rinspeed-car.herokuapp.com/confirm-order/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          toast.success("Accepted order");
        } else {
          toast.error("Cannot accept order");
        }
        refetch();
      });
  };

  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{productQuantity}</td>
      <td>{totalPrice}$</td>
      <td>{address}</td>
      <td className="text-center font-bold">
        {paid ? (
          <>
            <p className="text-success">Paid</p>
          </>
        ) : (
          <>
            <label
              onClick={() => setDeleteConfirm(order)}
              htmlFor="delete-confirm"
              className="btn btn-link"
            >
              Delete
            </label>
          </>
        )}
      </td>
      <td>
        {paid ? (
          <p>{status === "shipped" ? "Shipped" : "Pending"}</p>
        ) : (
          <p>unpaid</p>
        )}
      </td>
      <td>
        {paid &&
          (status === "shipped" ? (
            <button className="btn btn-primary btn-sm capitalize" disabled>
              Shipped
            </button>
          ) : (
            <button
              onClick={() => handleConfirmShipped(_id)}
              className="btn btn-primary btn-sm capitalize"
            >
              Confirm
            </button>
          ))}
      </td>
    </tr>
  );
};

export default OrderRow;
