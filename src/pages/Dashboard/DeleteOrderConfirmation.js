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
      <input type="checkbox" id="delete-confirm" class="modal-toggle" />
      <div class="modal modal-middle sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to cancel this order?
          </h3>

          <div class="modal-action">
            <label for="delete-confirm" class="btn btn-md">
              Close
            </label>
            <button onClick={handleDelete} class="btn btn-md btn-error">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderConfirmation;
