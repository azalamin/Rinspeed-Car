import React from "react";

const Order = ({ order, index, setDeleteConfirm }) => {
  const { productName, productQuantity, totalPrice, address } = order;

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
        <button className="btn btn-link">Pay now</button>
      </td>
    </tr>
  );
};

export default Order;
