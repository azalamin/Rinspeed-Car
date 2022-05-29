import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const PrivetRoute = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivetRoute;
