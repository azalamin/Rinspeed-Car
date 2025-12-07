import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import fetcher from "../../api";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import DeleteOrderConfirmation from "./DeleteOrderConfirmation";
import Order from "./Order";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(
    "orders",
    async () => await fetcher.get(`/orders/${user?.email}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">MY Orders</h3>
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
            </tr>
          </thead>
          <tbody>
            {orders?.data.map((order, index) => (
              <Order
                index={index}
                order={order}
                key={index}
                setDeleteConfirm={setDeleteConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteConfirm && (
        <DeleteOrderConfirmation
          refetch={refetch}
          deleteConfirm={deleteConfirm}
          setDeleteConfirm={setDeleteConfirm}
        />
      )}
    </div>
  );
};

export default MyOrders;
