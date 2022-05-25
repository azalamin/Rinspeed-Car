import React from "react";
import { toast } from "react-toastify";
import fetcher from "../../../api";

const DeleteOrderModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
  const { _id } = deleteConfirm;
  const handleDelete = async () => {
    const { data } = await fetcher.delete(`/orders/${_id}`);
    console.log(data);
    if (data) {
      setDeleteConfirm(null);
      refetch();
      toast.success("Order deleted");
    }
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete this order?
          </h3>
          <div className="modal-action">
            <label htmlFor="delete-confirm" className="btn btn-md">
              Close
            </label>
            <button onClick={handleDelete} className="btn btn-md btn-error">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
