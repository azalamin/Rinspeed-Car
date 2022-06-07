import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  console.log();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`navbar shadow-xl fixed w-full top-0 py-4 z-50 px-6 md:px-10 ${
        isActive ? "active" : "custom-navbar"
      }`}
    >
      <div className="navbar-start">
        <label
          htmlFor="dashboard-drawer"
          className={`drawer-button ${
            pathname.includes("dashboard") ? "block" : "hidden"
          } lg:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <Link
          to="/"
          className={`btn btn-ghost normal-case text-lg sm:text-xl ${
            location.pathname === "/" && !isActive ? "text-white" : ""
          }`}
        >
          RINSPEED CAR
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mx-2">
            <NavLink
              className={`${
                location.pathname === "/" && !isActive ? "text-white" : ""
              }`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              className={`${
                location.pathname === "/" && !isActive ? "text-white" : ""
              }`}
              to="/blogs"
            >
              Blog
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              className={`${
                location.pathname === "/" && !isActive ? "text-white" : ""
              }`}
              to="/portfolio"
            >
              MY Portfolio
            </NavLink>
          </li>
          <li className="mx-2">
            <a
              className={`${
                location.pathname === "/" && !isActive ? "text-white" : ""
              }`}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className={`w-10 rounded-full bg-white ${!user && "p-2"}`}>
                <img
                  src={`${
                    user?.photoURL || "https://i.ibb.co/JnsL8m4/unknown.png"
                  }`}
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-center"
            >
              {admin && (
                <>
                  <li className="mb-2">
                    <NavLink className="w-full" to="/admin-dashboard/user">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="/admin-dashboard/my-profile"
                      className="w-full"
                    >
                      Profile
                    </NavLink>
                  </li>
                </>
              )}

              {user && !admin && (
                <>
                  <li className="mb-2">
                    <NavLink to="/user-dashboard/my-profile" className="w-full">
                      Profile
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className="w-full" to="/user-dashboard/my-orders">
                      Dashboard
                    </NavLink>
                  </li>
                </>
              )}

              {user ? (
                <button
                  className="my-3 bg-error hover:bg-red-500 py-2 rounded-md"
                  onClick={() => {
                    signOut(auth);
                    navigate("/");
                    window.location.reload(true);
                  }}
                >
                  Logout
                </button>
              ) : (
                <li>
                  <NavLink className="my-2 w-full" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </ul>
      </div>
      <div className="dropdown dropdown-end navbar-end text-right lg:hidden">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${
              location.pathname === "/" && !isActive ? "white" : "black"
            }`}
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
          <li className="mb-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/blogs">Blog</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/portfolio">MY Portfolio</NavLink>
          </li>
          <li className="mb-2">
            <a href="#contact">Contact</a>
          </li>
          <label
            tabIndex="0"
            className="btn btn-ghost btn-circle avatar w-full"
          >
            <div className={`w-10 rounded-full bg-white ${!user && "p-2"}`}>
              <img
                src={`${
                  user?.photoURL || "https://i.ibb.co/JnsL8m4/unknown.png"
                }`}
                className="text-center"
                alt=""
              />
            </div>
          </label>

          {admin && (
            <>
              <li className="mb-2">
                <NavLink className="w-full" to="/admin-dashboard/user">
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/admin-dashboard/my-profile" className="w-full">
                  Profile
                </NavLink>
              </li>
            </>
          )}

          {user && !admin && (
            <>
              <li className="mb-2">
                <NavLink to="/user-dashboard/my-profile" className="w-full">
                  Profile
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="w-full" to="/user-dashboard/my-orders">
                  Dashboard
                </NavLink>
              </li>
            </>
          )}

          {user ? (
            <button
              className="my-3 bg-error hover:bg-red-500 py-2 rounded-md"
              onClick={() => {
                signOut(auth);
                navigate("/");
                window.location.reload(true);
              }}
            >
              Logout
            </button>
          ) : (
            <li>
              <NavLink className="my-2 w-full" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
