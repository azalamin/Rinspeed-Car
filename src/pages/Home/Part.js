import React from "react";
import { Link } from "react-router-dom";

const Part = ({ part }) => {
  const { name, price, minQuantity, quantity, description, image, _id } = part;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="max-w-xs max-h-xs" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <strong>Price: $</strong>
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
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
