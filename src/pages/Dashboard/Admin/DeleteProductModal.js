import { toast } from "react-toastify";

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
  const { _id } = deleteProduct;
  const handleDelete = async () => {
    fetch(`https://rinspeed-car-server.onrender.com/delete-part/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          setDeleteProduct(null);
          toast.success("Product deleted");
          refetch();
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="delete-part" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete?
          </h3>

          <div className="modal-action">
            <label htmlFor="delete-part" className="btn btn-md">
              Close
            </label>
            <button onClick={handleDelete} className="btn btn-md btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProductModal;
