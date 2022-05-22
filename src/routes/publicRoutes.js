import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";

export const publicRoutes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/login', name: 'Login', Component: Login},
    {path: '/signup', name: 'Signup', Component: Signup},
    {path: '/reset', name: 'ResetPassword', Component: ResetPassword},
]
