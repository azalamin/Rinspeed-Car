import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivet from "../../../api/axiosPrivet";
import auth from "../../../firebase.init";

const AdminConfirm = ({ makeAdmin, setMakeAdmin, refetch }) => {
  const { email } = makeAdmin;
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const { data } = await axiosPrivet.put(
        `https://rinspeed-car-server.onrender.com/admin/${email}`
      );
      if (data) {
        toast.success('Successfully made admin');
        setMakeAdmin(null);
        refetch();
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
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
