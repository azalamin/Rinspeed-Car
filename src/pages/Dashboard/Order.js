import React from "react";
import { Link } from "react-router-dom";

const Order = ({ order, index, setDeleteConfirm }) => {
  const { productName, productQuantity, totalPrice, address, _id } = order;

  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{productQuantity}</td>
      <td>{totalPrice}$</td>
      <td>{address}</td>
      <td>
        <label
          onClick={() => setDeleteConfirm(order)}
          for="delete-confirm"
          class="btn btn-link"
        >
          Cancel
        </label>
        <Link to={`/payment/${_id}`} className="btn btn-link">
          Pay Now
        </Link>
      </td>
    </tr>
  );
};

export default Order;
