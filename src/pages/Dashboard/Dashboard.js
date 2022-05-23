import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu overflow-y-auto w-40 sm:w-72 bg-[#3a0aa1]">
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
