import React from "react";
import { Link } from "react-router-dom";

const Part = ({ part }) => {
  const { name, price, minQuantity, quantity, description, image } = part;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>
          <strong>Price: </strong>
          {price}
        </p>
        <p>
          <strong>Quantity: </strong>
          {quantity}
        </p>
        <p>
          <strong>Minimum Order: </strong>
          {minQuantity}
        </p>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <Link to='/purchase' class="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
