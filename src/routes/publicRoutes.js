import Blogs from "../pages/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import Purchase from "../pages/Purchase";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/blogs", name: "Blog", Component: Blogs },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "Signup", Component: Signup },
  { path: "/reset", name: "ResetPassword", Component: ResetPassword },
  { path: "/purchase/:partId", name: "Purchase", Component: Purchase },
];
