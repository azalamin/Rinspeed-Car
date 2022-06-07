import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading />;
  }

  return (
    <div className="drawer drawer-mobile z-0 mb-20 left-0 top-[5.1rem] fixed">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-5 md:m-10">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu overflow-y-auto w-56 sm:w-72 bg-[#1f0063] pt-5 px-2 md:px-4">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              <li className=" mb-2">
                <NavLink to="my-orders" className="text-white rounded-xl">
                  My Orders
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="add-review" className="text-white rounded-xl">
                  Add A Review
                </NavLink>
              </li>
            </>
          )}

          {admin && (
            <>
              <li className="mb-2">
                <NavLink to="user" className="text-white rounded-xl">
                  All User
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="manage-order" className="text-white rounded-xl">
                  Manage All Order
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="add-product" className="text-white rounded-xl">
                  Add a Product
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="mange-product" className="text-white rounded-xl">
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
          <li className="mb-2">
            <NavLink to="my-profile" className="text-white rounded-xl">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
