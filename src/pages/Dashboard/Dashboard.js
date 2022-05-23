import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-5 md:m-10">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu overflow-y-auto w-40 sm:w-72 bg-[#1f0063]">
          {/* <!-- Sidebar content here --> */}
          <li className="border-b-2">
            <NavLink to="my-orders" className="text-white">
              My Orders
            </NavLink>
          </li>
          <li className="border-b-2">
            <NavLink to="add-review" className="text-white">
              Add A Review
            </NavLink>
          </li>
          <li className="border-b-2">
            <NavLink to="my-profile" className="text-white">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
