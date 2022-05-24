import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
