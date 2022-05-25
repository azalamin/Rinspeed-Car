import React from "react";
import { Link } from "react-router-dom";

const Order = ({ order, index, setDeleteConfirm }) => {
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
            <p>Transaction Id:</p>
            <p>
              <span className="text-accent">{transactionId}</span>
            </p>
          </>
        ) : (
          <>
            <label
              onClick={() => setDeleteConfirm(order)}
              htmlFor="delete-confirm"
              className="btn btn-link"
            >
              Cancel
            </label>
            <Link to={`/payment/${_id}`} className="btn btn-link">
              Pay Now
            </Link>
          </>
        )}
      </td>
      <td>
        {status === "shipped" ? (
          <p>Shipped</p>
        ) : paid ? (
          <p>Pending</p>
        ) : (
          "unpaid"
        )}
      </td>
    </tr>
  );
};

export default Order;
