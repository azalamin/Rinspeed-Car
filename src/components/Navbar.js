import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  return (
    <nav className="navbar bg-[#f7f7f7] shadow-xl sticky top-0 py-4 z-50 px-6 md:px-10">
      <div className="navbar-start">
        <label
          htmlFor="dashboard-drawer"
          className={`drawer-button ${
            pathname.includes("dashboard") ? "block" : "hidden"
          } lg:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <Link to="/" className="btn btn-ghost normal-case text-lg sm:text-xl">
          RINSPEED CAR
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mx-1">
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <>
              <li className="mx-1">
                <NavLink to="/dashboard/my-orders">Dashboard</NavLink>
              </li>

              <button
                onClick={() => signOut(auth)}
                className="btn btn-outline btn-primary mx-1"
              >
                Logout
              </button>
              <span className="btn btn-link">{user?.displayName} </span>
            </>
          ) : (
            <li className="mx-1">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="dropdown dropdown-end navbar-end text-right lg:hidden">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Home</a>
          </li>
          <li tabIndex="0">
            <a className="justify-between">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
