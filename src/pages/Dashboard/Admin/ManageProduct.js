import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivet from "../../../api/axiosPrivet";
import Loading from "../../../components/Loading";
import DeleteProductModal from "./DeleteProductModal";
import Product from "./Product";

const ManageProduct = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery(
    "parts",
    async () => await axiosPrivet.get(`https://rinspeed-car-server.vercel.app/parts`)
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">Manage Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Minimum Quantity</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {parts?.data.map((part, index) => (
              <Product
                index={index}
                part={part}
                key={index}
                setDeleteProduct={setDeleteProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteProductModal
          refetch={refetch}
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
        />
      )}
    </div>
  );
};

export default ManageProduct;
