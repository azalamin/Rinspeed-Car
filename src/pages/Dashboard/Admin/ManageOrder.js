import React, { useState } from "react";
import { useQuery } from "react-query";
import fetcher from "../../../api";
import Loading from "../../../components/Loading";
import DeleteOrderModal from "./DeleteOrderModal";
import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", async () => await fetcher.get(`/get-orders`));

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
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Address</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data.map((order, index) => (
              <OrderRow
                index={index}
                order={order}
                key={index}
                setDeleteConfirm={setDeleteConfirm}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteConfirm && (
        <DeleteOrderModal
          refetch={refetch}
          deleteConfirm={deleteConfirm}
          setDeleteConfirm={setDeleteConfirm}
        />
      )}
    </div>
  );
};

export default ManageOrder;
