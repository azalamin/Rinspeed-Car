import React from "react";
import fetcher from "../../api";

const DeleteOrderConfirmation = ({ deleteConfirm, setDeleteConfirm, refetch, }) => {
  const { _id } = deleteConfirm;
  const handleDelete = async () => {
    const { data } = await fetcher.delete(`/orders/${_id}`);
    console.log(data);
    if (data) {
      setDeleteConfirm(null);
      refetch();
    }
  };
  return (
    <>
      <input type="checkbox" id="delete-confirm" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to cancel this order?
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
    </>
  );
};

export default DeleteOrderConfirmation;
