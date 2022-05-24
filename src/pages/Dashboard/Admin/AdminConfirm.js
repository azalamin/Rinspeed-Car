import React from "react";
import fetcher from "../../../api";

const AdminConfirm = ({ makeAdmin, setMakeAdmin, refetch }) => {
  const { email } = makeAdmin;
  const handleDelete = async () => {
    const { data } = await fetcher.patch(`/user/${email}`);
    if (data) {
      setMakeAdmin(null);
      refetch();
    }
  };
  return (
    <>
      <input type="checkbox" id="admin-confirm" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to make admin?
          </h3>

          <div className="modal-action">
            <label htmlFor="admin-confirm" className="btn btn-md">
              Close
            </label>
            <button onClick={handleDelete} className="btn btn-md btn-success">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminConfirm;
