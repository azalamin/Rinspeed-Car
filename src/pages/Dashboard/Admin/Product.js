import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Product = ({ part, index, setDeleteProduct }) => {
  const { name, price, quantity, minQuantity } = part;
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{minQuantity}</td>
      <td className="">
        <label
          htmlFor="delete-part"
          onClick={() => setDeleteProduct(part)}
          className="cursor-pointer hover:text-red-500 flex justify-center"
        >
          <AiFillDelete className="text-3xl text-center" />
        </label>
      </td>
    </tr>
  );
};

export default Product;
